import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { execSync } from 'child_process';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PORTFOLIO_DATA_PATH = path.join(ROOT_DIR, 'src/data/portfolioData.ts');
const PORTFOLIO_MEDIA_DIR = path.join(ROOT_DIR, 'public/portfolio');
const PORTFOLIO_VIDEOS_DIR = path.join(ROOT_DIR, 'public/portfolio/videos');

// Ensure output directories exist
fs.mkdirSync(PORTFOLIO_MEDIA_DIR, { recursive: true });
fs.mkdirSync(PORTFOLIO_VIDEOS_DIR, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        fs.unlink(dest, () => reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`)));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

function loadCookies() {
  if (process.env.IG_COOKIES_JSON) {
    try {
      console.log('🔑 Loading cookies from environment variable IG_COOKIES_JSON...');
      return JSON.parse(process.env.IG_COOKIES_JSON);
    } catch (e) {
      console.error('⚠️ Could not parse IG_COOKIES_JSON from env:', e.message);
    }
  }

  const localCookiePaths = [
    '/tmp/ig_cookies.json',
    path.join(__dirname, 'ig_cookies.json'),
    path.join(ROOT_DIR, 'ig_cookies.json'),
  ];

  for (const cPath of localCookiePaths) {
    if (fs.existsSync(cPath)) {
      try {
        console.log(`🔑 Loading cookies from local file: ${cPath}`);
        return JSON.parse(fs.readFileSync(cPath, 'utf8'));
      } catch (e) {
        console.error(`⚠️ Could not read cookies from ${cPath}:`, e.message);
      }
    }
  }

  console.warn('⚠️ No Instagram cookies found. Proceeding as guest (public profile view).');
  return [];
}

function determineCategory(caption) {
  const text = (caption || '').toLowerCase();

  if (/wisuda|graduation|toga|yudisium|sarjana|cumlaude|unpad|ui|itb|ugm|ipb|undip/.test(text)) {
    return { category: 'graduation', categoryLabel: 'Wisuda' };
  }
  if (/wedding|nikah|pernikahan|akad|resepsi|bride|groom|manten|seserahan/.test(text)) {
    return { category: 'wedding', categoryLabel: 'Wedding' };
  }
  if (/lamaran|prewed|prewedding|engagement|tunangan|one step closer|beautiful beginning/.test(text)) {
    return { category: 'prewedding', categoryLabel: 'Lamaran & Prewed' };
  }
  if (/birthday|ultah|ulang tahun|kids|sweet 17|sweet seventeen|anak|anakku|baby/.test(text)) {
    return { category: 'birthday', categoryLabel: 'Kids & Birthday' };
  }
  return { category: 'event', categoryLabel: 'Event' };
}

function extractExistingData() {
  const content = fs.readFileSync(PORTFOLIO_DATA_PATH, 'utf8');
  
  // Extract all shortcodes
  const shortcodeRegex = /instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/g;
  const existingShortcodes = new Set();
  let match;
  while ((match = shortcodeRegex.exec(content)) !== null) {
    existingShortcodes.add(match[1]);
  }

  // Extract highest ig-N id
  const idRegex = /id:\s*'ig-(\d+)'/g;
  let maxId = 0;
  while ((match = idRegex.exec(content)) !== null) {
    const num = parseInt(match[1], 10);
    if (!isNaN(num) && num > maxId) {
      maxId = num;
    }
  }

  return { existingShortcodes, maxId, content };
}

async function runSync() {
  console.log('==============================================');
  console.log('📸 FYPotret Instagram Auto-Sync Engine');
  console.log('==============================================');

  const { existingShortcodes, maxId } = extractExistingData();
  console.log(`📊 Currently tracked Instagram posts in portfolio: ${existingShortcodes.size}`);
  console.log(`🔢 Highest existing ID: ig-${maxId}`);

  const cookies = loadCookies();

  const launchArgs = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    '--window-size=1280,1000',
  ];

  const launchOptions = {
    headless: 'new',
    args: launchArgs,
  };

  // Check if Brave or Chrome binary is specified or available locally
  if (fs.existsSync('/opt/brave-bin/brave')) {
    launchOptions.executablePath = '/opt/brave-bin/brave';
  } else if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch(launchOptions);
  let nextId = maxId;

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1000 });
    await page.setUserAgent(
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
    );

    if (cookies.length > 0) {
      await page.setCookie(...cookies);
    }

    console.log('🌐 Visiting https://www.instagram.com/fypotretid/ ...');
    await page.goto('https://www.instagram.com/fypotretid/', {
      waitUntil: 'networkidle2',
      timeout: 45000,
    });

    // Give it a moment to render posts grid
    await new Promise((r) => setTimeout(r, 4000));

    // Extract post links from profile
    const profileHrefs = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]'));
      return anchors.map((a) => a.getAttribute('href')).filter(Boolean);
    });

    const candidateShortcodes = [];
    for (const href of profileHrefs) {
      const m = href.match(/\/(?:p|reel)\/([A-Za-z0-9_-]+)/);
      if (m && m[1] && !candidateShortcodes.includes(m[1])) {
        candidateShortcodes.push(m[1]);
      }
    }

    console.log(`📋 Found ${candidateShortcodes.length} recent posts on profile:`, candidateShortcodes.join(', '));

    // Find new posts (not yet in portfolioData.ts)
    const newShortcodes = candidateShortcodes.filter((sc) => !existingShortcodes.has(sc));

    if (newShortcodes.length === 0) {
      console.log('✨ All Instagram posts are already up to date in the portfolio! No sync needed.');
      return;
    }

    console.log(`🔥 Found ${newShortcodes.length} new post(s) to import:`, newShortcodes.join(', '));

    // Process from oldest to newest so when inserted at top, the newest ends up first
    const postsToProcess = [...newShortcodes].reverse();
    const newPortfolioEntries = [];

    for (const shortcode of postsToProcess) {
      console.log(`\n----------------------------------------------`);
      console.log(`📥 Processing Instagram post: ${shortcode}`);
      console.log(`----------------------------------------------`);

      const postPage = await browser.newPage();
      await postPage.setViewport({ width: 1280, height: 1000 });
      await postPage.setUserAgent(
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
      );

      let videoUrl = null;
      let audioUrl = null;
      let posterUrl = null;
      const imageUrls = [];

      postPage.on('response', (response) => {
        const url = response.url();
        const headers = response.headers();

        // Check for MP4 video
        if (url.includes('.mp4')) {
          const cleanUrl = url.replace(/&bytestart=\d+&byteend=\d+/, '');
          if (url.includes('dash_ln_heaac_vbr3_audio') || url.includes('audio')) {
            if (!audioUrl) audioUrl = cleanUrl;
          } else if (!videoUrl) {
            videoUrl = cleanUrl;
          }
        }

        // Check for CDN images
        if (
          (url.includes('cdninstagram.com') || url.includes('fbcdn.net')) &&
          (url.includes('.jpg') || url.includes('.webp'))
        ) {
          if (
            url.includes('dst-jpg_e15') ||
            url.includes('s1080x1080') ||
            url.includes('p1080x1080') ||
            url.includes('video_user_uploaded_thumbnail')
          ) {
            if (!posterUrl) posterUrl = url;
            if (!imageUrls.includes(url)) imageUrls.push(url);
          }
        }
      });

      const targetUrl = `https://www.instagram.com/p/${shortcode}/`;
      try {
        await postPage.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 40000 });
      } catch (err) {
        console.warn(`Timeout loading ${targetUrl}, trying reel URL...`);
        try {
          await postPage.goto(`https://www.instagram.com/reel/${shortcode}/`, {
            waitUntil: 'networkidle2',
            timeout: 40000,
          });
        } catch (e) {
          console.error(`Failed to load ${shortcode}:`, e.message);
        }
      }

      await new Promise((r) => setTimeout(r, 4000));

      // Extract metadata
      const details = await postPage.evaluate(() => {
        // Caption
        let caption = '';
        const h1 = document.querySelector('h1');
        if (h1 && h1.innerText) {
          caption = h1.innerText;
        } else {
          const metaDesc = document.querySelector('meta[property="og:description"]');
          if (metaDesc) caption = metaDesc.content;
        }

        // Location
        let location = '';
        const loc = document.querySelector('header a[href*="/explore/locations/"]');
        if (loc) location = loc.innerText.trim();

        // Check if video element exists
        const video = document.querySelector('video');
        const isVideo = !!video;
        const domPoster = video ? video.poster : '';

        // Images in carousel
        const imgs = Array.from(document.querySelectorAll('article img, div[role="dialog"] img'))
          .map((img) => img.src)
          .filter((src) => src && src.includes('cdninstagram.com') && !src.includes('150x150'));

        return { caption, location, isVideo, domPoster, imgs };
      });

      console.log('Metadata extracted:', {
        captionPreview: (details.caption || '').slice(0, 80) + '...',
        location: details.location || '(none)',
        isVideo: details.isVideo,
        foundImages: details.imgs.length,
      });

      const caption = details.caption.trim();
      const location = details.location || 'Jakarta';
      const isVideo = details.isVideo || !!videoUrl;
      const { category, categoryLabel } = determineCategory(caption);

      // Extract client handles from caption
      const mentions = caption.match(/@([A-Za-z0-9_.]+)/g) || [];
      const client = mentions.length > 0 ? mentions.join(' ') : 'FYPotret Client';

      nextId++;
      const id = `ig-${nextId}`;
      let title = caption.split('\n')[0].replace(/[#@*]/g, '').trim();
      if (!title || title.length > 60) {
        title = `${categoryLabel} Moment: ${client.split(' ')[0] || 'FYPotret'}`;
      }

      let itemEntry = null;

      if (isVideo) {
        const videoDestPath = path.join(PORTFOLIO_VIDEOS_DIR, `v${nextId}_${shortcode}.mp4`);
        const posterDestPath = path.join(PORTFOLIO_MEDIA_DIR, `p${nextId}_${shortcode}.jpg`);

        // Download video
        if (videoUrl) {
          console.log(`Downloading video for ${shortcode}...`);
          const tempVideoPath = `/tmp/temp_v_${shortcode}.mp4`;
          await downloadFile(videoUrl, tempVideoPath);

          if (audioUrl) {
            console.log(`Downloading audio and muxing with ffmpeg...`);
            const tempAudioPath = `/tmp/temp_a_${shortcode}.mp4`;
            try {
              await downloadFile(audioUrl, tempAudioPath);
              execSync(
                `ffmpeg -y -i "${tempVideoPath}" -i "${tempAudioPath}" -c:v copy -c:a aac -shortest "${videoDestPath}"`,
                { stdio: 'ignore' }
              );
              fs.unlinkSync(tempAudioPath);
            } catch (err) {
              console.warn(`ffmpeg muxing error, using raw video:`, err.message);
              fs.copyFileSync(tempVideoPath, videoDestPath);
            }
          } else {
            fs.copyFileSync(tempVideoPath, videoDestPath);
          }
          if (fs.existsSync(tempVideoPath)) fs.unlinkSync(tempVideoPath);
        } else {
          console.warn(`Could not intercept videoUrl for ${shortcode}`);
        }

        // Download poster
        const finalPoster = posterUrl || details.domPoster || (details.imgs.length > 0 ? details.imgs[0] : null);
        if (finalPoster) {
          console.log(`Downloading poster thumbnail...`);
          await downloadFile(finalPoster, posterDestPath);
        } else if (fs.existsSync(videoDestPath)) {
          // Extract frame from video with ffmpeg
          console.log(`Extracting cover frame with ffmpeg...`);
          execSync(`ffmpeg -y -ss 00:00:01 -i "${videoDestPath}" -vframes 1 -q:v 2 "${posterDestPath}"`, {
            stdio: 'ignore',
          });
        }

        itemEntry = `  // ${id}. ${categoryLabel} Reel - ${shortcode} (Auto-synced from Instagram)
  {
    id: '${id}',
    title: ${JSON.stringify(title)},
    category: '${category}',
    categoryLabel: '${categoryLabel}',
    image: '/portfolio/p${nextId}_${shortcode}.jpg',
    aspect: 'tall',
    location: ${JSON.stringify(location)},
    client: ${JSON.stringify(client)},
    description: ${JSON.stringify(caption)},
    instagramUrl: '${targetUrl}',
    isVideo: true,
    videoSrc: '/portfolio/videos/v${nextId}_${shortcode}.mp4',
  },`;
      } else {
        // Photo or Carousel
        const allImgUrls = Array.from(new Set([...imageUrls, ...details.imgs]));
        if (allImgUrls.length > 1) {
          console.log(`Downloading ${allImgUrls.length} carousel images...`);
          const savedImages = [];
          for (let i = 0; i < allImgUrls.length; i++) {
            const idxStr = String(i + 1).padStart(2, '0');
            const imgDest = path.join(PORTFOLIO_MEDIA_DIR, `p${nextId}_${shortcode}_${idxStr}.jpg`);
            try {
              await downloadFile(allImgUrls[i], imgDest);
              savedImages.push(`/portfolio/p${nextId}_${shortcode}_${idxStr}.jpg`);
            } catch (e) {
              console.warn(`Failed downloading image ${i}:`, e.message);
            }
          }

          itemEntry = `  // ${id}. ${categoryLabel} Album - ${shortcode} (Auto-synced from Instagram)
  {
    id: '${id}',
    title: ${JSON.stringify(title)},
    images: ${JSON.stringify(savedImages, null, 6)},
    category: '${category}',
    categoryLabel: '${categoryLabel}',
    image: '${savedImages[0] || `/portfolio/p${nextId}_${shortcode}_01.jpg`}',
    aspect: 'tall',
    location: ${JSON.stringify(location)},
    client: ${JSON.stringify(client)},
    description: ${JSON.stringify(caption)},
    instagramUrl: '${targetUrl}',
  },`;
        } else {
          // Single Image
          const imgUrl = allImgUrls[0] || posterUrl;
          const imgDest = path.join(PORTFOLIO_MEDIA_DIR, `p${nextId}_${shortcode}.jpg`);
          if (imgUrl) {
            console.log(`Downloading single image for ${shortcode}...`);
            await downloadFile(imgUrl, imgDest);
          }

          itemEntry = `  // ${id}. ${categoryLabel} Photo - ${shortcode} (Auto-synced from Instagram)
  {
    id: '${id}',
    title: ${JSON.stringify(title)},
    category: '${category}',
    categoryLabel: '${categoryLabel}',
    image: '/portfolio/p${nextId}_${shortcode}.jpg',
    aspect: 'tall',
    location: ${JSON.stringify(location)},
    client: ${JSON.stringify(client)},
    description: ${JSON.stringify(caption)},
    instagramUrl: '${targetUrl}',
  },`;
        }
      }

      if (itemEntry) {
        newPortfolioEntries.push(itemEntry);
      }

      await postPage.close();
    }

    if (newPortfolioEntries.length > 0) {
      console.log(`\n💾 Injecting ${newPortfolioEntries.length} new entries into src/data/portfolioData.ts...`);
      let currentFileContent = fs.readFileSync(PORTFOLIO_DATA_PATH, 'utf8');

      // Prepend to PORTFOLIO_ITEMS array
      // Reverse entries so newest is at the very top
      const injectionString = newPortfolioEntries.reverse().join('\n\n') + '\n\n';
      const anchor = 'export const PORTFOLIO_ITEMS: PortfolioItem[] = [\n';

      if (currentFileContent.includes(anchor)) {
        currentFileContent = currentFileContent.replace(anchor, anchor + '\n' + injectionString);
        fs.writeFileSync(PORTFOLIO_DATA_PATH, currentFileContent, 'utf8');
        console.log('✅ Successfully updated src/data/portfolioData.ts!');
      } else {
        console.error('❌ Could not find anchor "export const PORTFOLIO_ITEMS: PortfolioItem[] = ["');
      }
    }

    console.log('\n🎉 Sync completed successfully!');
  } finally {
    await browser.close();
  }
}

runSync().catch((err) => {
  console.error('❌ Fatal error in Instagram Sync:', err);
  process.exit(1);
});
