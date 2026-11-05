export interface StorySlide {
  id: string;
  type: "image" | "video";
  mediaUrl: string;
  posterUrl?: string;
  title: string;
  subtitle?: string;
  description?: string;
  client?: string;
  location?: string;
  duration?: number;
  instagramUrl?: string;
}

export interface StoryHighlight {
  id: string;
  title: string;
  categoryFilter?: string;
  coverImage: string;
  slides: StorySlide[];
}

export const INSTAGRAM_HIGHLIGHTS: StoryHighlight[] = [
  {
    "id": "bts",
    "title": "BTS",
    "categoryFilter": "event",
    "coverImage": "/portfolio/highlights/hl_bts.jpg",
    "slides": [
      {
        "id": "bts-1",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_0.mp4",
        "posterUrl": "/portfolio/stories/bts_0_poster.jpg",
        "title": "BTS #1",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 33,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-2",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_1.mp4",
        "posterUrl": "/portfolio/stories/bts_1_poster.jpg",
        "title": "BTS #2",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 8,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-3",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_2.mp4",
        "posterUrl": "/portfolio/stories/bts_2_poster.jpg",
        "title": "BTS #3",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 18,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-4",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_3.mp4",
        "posterUrl": "/portfolio/stories/bts_3_poster.jpg",
        "title": "BTS #4",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-5",
        "type": "image",
        "mediaUrl": "/portfolio/stories/bts_4.jpg",
        "title": "BTS #5",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Foto cerita otentik Instagram @fypotretid - Sorotan BTS.",
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-6",
        "type": "image",
        "mediaUrl": "/portfolio/stories/bts_5.jpg",
        "title": "BTS #6",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Foto cerita otentik Instagram @fypotretid - Sorotan BTS.",
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-7",
        "type": "image",
        "mediaUrl": "/portfolio/stories/bts_6.jpg",
        "title": "BTS #7",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Foto cerita otentik Instagram @fypotretid - Sorotan BTS.",
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-8",
        "type": "image",
        "mediaUrl": "/portfolio/stories/bts_7.jpg",
        "title": "BTS #8",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Foto cerita otentik Instagram @fypotretid - Sorotan BTS.",
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-9",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_8.mp4",
        "posterUrl": "/portfolio/stories/bts_8_poster.jpg",
        "title": "BTS #9",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-10",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_9.mp4",
        "posterUrl": "/portfolio/stories/bts_9_poster.jpg",
        "title": "BTS #10",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-11",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_10.mp4",
        "posterUrl": "/portfolio/stories/bts_10_poster.jpg",
        "title": "BTS #11",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-12",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_11.mp4",
        "posterUrl": "/portfolio/stories/bts_11_poster.jpg",
        "title": "BTS #12",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-13",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_12.mp4",
        "posterUrl": "/portfolio/stories/bts_12_poster.jpg",
        "title": "BTS #13",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-14",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_13.mp4",
        "posterUrl": "/portfolio/stories/bts_13_poster.jpg",
        "title": "BTS #14",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-15",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_14.mp4",
        "posterUrl": "/portfolio/stories/bts_14_poster.jpg",
        "title": "BTS #15",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-16",
        "type": "image",
        "mediaUrl": "/portfolio/stories/bts_15.jpg",
        "title": "BTS #16",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Foto cerita otentik Instagram @fypotretid - Sorotan BTS.",
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-17",
        "type": "image",
        "mediaUrl": "/portfolio/stories/bts_16.jpg",
        "title": "BTS #17",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Foto cerita otentik Instagram @fypotretid - Sorotan BTS.",
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-18",
        "type": "video",
        "mediaUrl": "/portfolio/stories/bts_17.mp4",
        "posterUrl": "/portfolio/stories/bts_17_poster.jpg",
        "title": "BTS #18",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan BTS.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      },
      {
        "id": "bts-19",
        "type": "image",
        "mediaUrl": "/portfolio/stories/bts_18.jpg",
        "title": "BTS #19",
        "subtitle": "Dokumentasi BTS FYPotret",
        "description": "Foto cerita otentik Instagram @fypotretid - Sorotan BTS.",
        "instagramUrl": "https://www.instagram.com/stories/highlights/18191246371383956/"
      }
    ]
  },
  {
    "id": "wedding",
    "title": "Wedding",
    "categoryFilter": "wedding",
    "coverImage": "/portfolio/highlights/hl_wedding.jpg",
    "slides": [
      {
        "id": "wedding-1",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_0.mp4",
        "posterUrl": "/portfolio/stories/wedding_0_poster.jpg",
        "title": "Wedding #1",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-2",
        "type": "image",
        "mediaUrl": "/portfolio/stories/wedding_1.jpg",
        "title": "Wedding #2",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Foto cerita otentik Instagram @fypotretid - Sorotan Wedding.",
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-3",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_2.mp4",
        "posterUrl": "/portfolio/stories/wedding_2_poster.jpg",
        "title": "Wedding #3",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-4",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_3.mp4",
        "posterUrl": "/portfolio/stories/wedding_3_poster.jpg",
        "title": "Wedding #4",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-5",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_4.mp4",
        "posterUrl": "/portfolio/stories/wedding_4_poster.jpg",
        "title": "Wedding #5",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-6",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_5.mp4",
        "posterUrl": "/portfolio/stories/wedding_5_poster.jpg",
        "title": "Wedding #6",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-7",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_6.mp4",
        "posterUrl": "/portfolio/stories/wedding_6_poster.jpg",
        "title": "Wedding #7",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-8",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_7.mp4",
        "posterUrl": "/portfolio/stories/wedding_7_poster.jpg",
        "title": "Wedding #8",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-9",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_8.mp4",
        "posterUrl": "/portfolio/stories/wedding_8_poster.jpg",
        "title": "Wedding #9",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-10",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_9.mp4",
        "posterUrl": "/portfolio/stories/wedding_9_poster.jpg",
        "title": "Wedding #10",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      },
      {
        "id": "wedding-11",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wedding_10.mp4",
        "posterUrl": "/portfolio/stories/wedding_10_poster.jpg",
        "title": "Wedding #11",
        "subtitle": "Dokumentasi Wedding FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Wedding.",
        "duration": 60,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17892267708683581/"
      }
    ]
  },
  {
    "id": "review",
    "title": "REVIEW",
    "categoryFilter": "review",
    "coverImage": "/portfolio/highlights/hl_review.jpg",
    "slides": [
      {
        "id": "review-1",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_0.mp4",
        "posterUrl": "/portfolio/stories/review_0_poster.jpg",
        "title": "REVIEW #1",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      },
      {
        "id": "review-2",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_1.mp4",
        "posterUrl": "/portfolio/stories/review_1_poster.jpg",
        "title": "REVIEW #2",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      },
      {
        "id": "review-3",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_2.mp4",
        "posterUrl": "/portfolio/stories/review_2_poster.jpg",
        "title": "REVIEW #3",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      },
      {
        "id": "review-4",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_3.mp4",
        "posterUrl": "/portfolio/stories/review_3_poster.jpg",
        "title": "REVIEW #4",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      },
      {
        "id": "review-5",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_4.mp4",
        "posterUrl": "/portfolio/stories/review_4_poster.jpg",
        "title": "REVIEW #5",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      },
      {
        "id": "review-6",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_5.mp4",
        "posterUrl": "/portfolio/stories/review_5_poster.jpg",
        "title": "REVIEW #6",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      },
      {
        "id": "review-7",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_6.mp4",
        "posterUrl": "/portfolio/stories/review_6_poster.jpg",
        "title": "REVIEW #7",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      },
      {
        "id": "review-8",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_7.mp4",
        "posterUrl": "/portfolio/stories/review_7_poster.jpg",
        "title": "REVIEW #8",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      },
      {
        "id": "review-9",
        "type": "video",
        "mediaUrl": "/portfolio/stories/review_8.mp4",
        "posterUrl": "/portfolio/stories/review_8_poster.jpg",
        "title": "REVIEW #9",
        "subtitle": "Dokumentasi REVIEW FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan REVIEW.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17865065826643490/"
      }
    ]
  },
  {
    "id": "engagement",
    "title": "Enggament 💍",
    "categoryFilter": "prewedding",
    "coverImage": "/portfolio/highlights/hl_engagement.jpg",
    "slides": [
      {
        "id": "engagement-1",
        "type": "video",
        "mediaUrl": "/portfolio/stories/engagement_0.mp4",
        "posterUrl": "/portfolio/stories/engagement_0_poster.jpg",
        "title": "Enggament 💍 #1",
        "subtitle": "Dokumentasi Enggament 💍 FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Enggament 💍.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17900368773355122/"
      },
      {
        "id": "engagement-2",
        "type": "video",
        "mediaUrl": "/portfolio/stories/engagement_1.mp4",
        "posterUrl": "/portfolio/stories/engagement_1_poster.jpg",
        "title": "Enggament 💍 #2",
        "subtitle": "Dokumentasi Enggament 💍 FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Enggament 💍.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17900368773355122/"
      },
      {
        "id": "engagement-3",
        "type": "video",
        "mediaUrl": "/portfolio/stories/engagement_2.mp4",
        "posterUrl": "/portfolio/stories/engagement_2_poster.jpg",
        "title": "Enggament 💍 #3",
        "subtitle": "Dokumentasi Enggament 💍 FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Enggament 💍.",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17900368773355122/"
      },
      {
        "id": "engagement-4",
        "type": "video",
        "mediaUrl": "/portfolio/stories/engagement_3.mp4",
        "posterUrl": "/portfolio/stories/engagement_3_poster.jpg",
        "title": "Enggament 💍 #4",
        "subtitle": "Dokumentasi Enggament 💍 FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Enggament 💍.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17900368773355122/"
      },
      {
        "id": "engagement-5",
        "type": "video",
        "mediaUrl": "/portfolio/stories/engagement_4.mp4",
        "posterUrl": "/portfolio/stories/engagement_4_poster.jpg",
        "title": "Enggament 💍 #5",
        "subtitle": "Dokumentasi Enggament 💍 FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Enggament 💍.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17900368773355122/"
      },
      {
        "id": "engagement-6",
        "type": "video",
        "mediaUrl": "/portfolio/stories/engagement_5.mp4",
        "posterUrl": "/portfolio/stories/engagement_5_poster.jpg",
        "title": "Enggament 💍 #6",
        "subtitle": "Dokumentasi Enggament 💍 FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Enggament 💍.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17900368773355122/"
      },
      {
        "id": "engagement-7",
        "type": "video",
        "mediaUrl": "/portfolio/stories/engagement_6.mp4",
        "posterUrl": "/portfolio/stories/engagement_6_poster.jpg",
        "title": "Enggament 💍 #7",
        "subtitle": "Dokumentasi Enggament 💍 FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan Enggament 💍.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17900368773355122/"
      }
    ]
  },
  {
    "id": "prewedding",
    "title": "PREWEDDIN...",
    "categoryFilter": "prewedding",
    "coverImage": "/portfolio/highlights/hl_prewedding.jpg",
    "slides": [
      {
        "id": "prewedding-1",
        "type": "video",
        "mediaUrl": "/portfolio/stories/prewedding_0.mp4",
        "posterUrl": "/portfolio/stories/prewedding_0_poster.jpg",
        "title": "PREWEDDIN... #1",
        "subtitle": "Dokumentasi PREWEDDIN... FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan PREWEDDIN....",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17950111596036956/"
      },
      {
        "id": "prewedding-2",
        "type": "video",
        "mediaUrl": "/portfolio/stories/prewedding_1.mp4",
        "posterUrl": "/portfolio/stories/prewedding_1_poster.jpg",
        "title": "PREWEDDIN... #2",
        "subtitle": "Dokumentasi PREWEDDIN... FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan PREWEDDIN....",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17950111596036956/"
      },
      {
        "id": "prewedding-3",
        "type": "video",
        "mediaUrl": "/portfolio/stories/prewedding_2.mp4",
        "posterUrl": "/portfolio/stories/prewedding_2_poster.jpg",
        "title": "PREWEDDIN... #3",
        "subtitle": "Dokumentasi PREWEDDIN... FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan PREWEDDIN....",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17950111596036956/"
      },
      {
        "id": "prewedding-4",
        "type": "video",
        "mediaUrl": "/portfolio/stories/prewedding_3.mp4",
        "posterUrl": "/portfolio/stories/prewedding_3_poster.jpg",
        "title": "PREWEDDIN... #4",
        "subtitle": "Dokumentasi PREWEDDIN... FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan PREWEDDIN....",
        "duration": 20,
        "instagramUrl": "https://www.instagram.com/stories/highlights/17950111596036956/"
      }
    ]
  },
  {
    "id": "wisuda",
    "title": "🎓 WISUDA",
    "categoryFilter": "graduation",
    "coverImage": "/portfolio/highlights/hl_wisuda.jpg",
    "slides": [
      {
        "id": "wisuda-1",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wisuda_0.mp4",
        "posterUrl": "/portfolio/stories/wisuda_0_poster.jpg",
        "title": "🎓 WISUDA #1",
        "subtitle": "Dokumentasi 🎓 WISUDA FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan 🎓 WISUDA.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18092229557378949/"
      },
      {
        "id": "wisuda-2",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wisuda_1.mp4",
        "posterUrl": "/portfolio/stories/wisuda_1_poster.jpg",
        "title": "🎓 WISUDA #2",
        "subtitle": "Dokumentasi 🎓 WISUDA FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan 🎓 WISUDA.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18092229557378949/"
      },
      {
        "id": "wisuda-3",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wisuda_2.mp4",
        "posterUrl": "/portfolio/stories/wisuda_2_poster.jpg",
        "title": "🎓 WISUDA #3",
        "subtitle": "Dokumentasi 🎓 WISUDA FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan 🎓 WISUDA.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18092229557378949/"
      },
      {
        "id": "wisuda-4",
        "type": "video",
        "mediaUrl": "/portfolio/stories/wisuda_3.mp4",
        "posterUrl": "/portfolio/stories/wisuda_3_poster.jpg",
        "title": "🎓 WISUDA #4",
        "subtitle": "Dokumentasi 🎓 WISUDA FYPotret",
        "description": "Cuplikan cerita video otentik Instagram @fypotretid - Sorotan 🎓 WISUDA.",
        "duration": 15,
        "instagramUrl": "https://www.instagram.com/stories/highlights/18092229557378949/"
      }
    ]
  }
];
