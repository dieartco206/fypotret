import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightStories } from './components/HighlightStories';
import { Gallery } from './components/Gallery';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { BookingModal } from './components/BookingModal';
import { StoryViewerModal } from './components/StoryViewerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackgroundDecoration } from './components/BackgroundDecoration';
import { PORTFOLIO_ITEMS, type PricingPackage, type PortfolioItem } from './data/portfolioData';
import { type StorySlide } from './data/storyData';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
  const [preselectedPackage, setPreselectedPackage] = useState<PricingPackage | null>(null);
  const [preselectedItem, setPreselectedItem] = useState<PortfolioItem | null>(null);

  // Filtered gallery items
  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'all') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenGeneralBooking = () => {
    setPreselectedPackage(null);
    setPreselectedItem(null);
    setIsBookingOpen(true);
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    setPreselectedPackage(pkg);
    setPreselectedItem(null);
    setIsBookingOpen(true);
  };

  const handleInquireItem = (item: PortfolioItem) => {
    setPreselectedItem(item);
    setPreselectedPackage(null);
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleInquireStory = (slide: StorySlide, highlightTitle: string) => {
    // Map slide into a synthetic PortfolioItem to prefill booking engine
    const determineCategory = (): 'wedding' | 'prewedding' | 'graduation' | 'event' | 'birthday' => {
      const lowerId = slide.id.toLowerCase();
      if (lowerId.startsWith('w-')) return 'wedding';
      if (lowerId.startsWith('pw-')) return 'prewedding';
      if (lowerId.startsWith('g-')) return 'graduation';
      if (lowerId.startsWith('bts-1') || lowerId.startsWith('bts-2')) return 'birthday';
      return 'event';
    };

    const syntheticItem: PortfolioItem = {
      id: `story-${slide.id}`,
      title: `${slide.title} (Sorotan: ${highlightTitle})`,
      category: determineCategory(),
      categoryLabel: highlightTitle,
      client: slide.client || 'Klien FYPotret',
      location: slide.location || 'Jabodetabek',
      image: slide.posterUrl || slide.mediaUrl,
      aspect: 'tall',
      description: slide.description || `Momen spesial dari sorotan ${highlightTitle}`,
      isVideo: slide.type === 'video',
      videoSrc: slide.type === 'video' ? slide.mediaUrl : undefined,
    };

    setPreselectedItem(syntheticItem);
    setPreselectedPackage(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-zinc-100 flex flex-col selection:bg-gold-500 selection:text-black relative">
      {/* Background Cinematic Texture & Bokeh Layer */}
      <BackgroundDecoration />

      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenGeneralBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenGeneralBooking} />

        {/* Authentic Instagram Story Highlights Bar */}
        <HighlightStories onOpenStory={(storyId) => setActiveStoryId(storyId)} />

        {/* Dynamic Bento Gallery with Category Tabs */}
        <Gallery
          items={filteredGallery}
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Transparent Pricing Section */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* Testimonials & FAQ Section */}
        <Testimonials />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Fullscreen Lightbox Viewer */}
      <LightboxModal
        items={filteredGallery}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        onInquire={handleInquireItem}
      />

      {/* Interactive Instagram Story Viewer Modal */}
      <StoryViewerModal
        initialHighlightId={activeStoryId}
        onClose={() => setActiveStoryId(null)}
        onInquireStory={handleInquireStory}
      />

      {/* Interactive WhatsApp Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage={preselectedPackage}
        preselectedItem={preselectedItem}
      />

      {/* Mobile-First Floating WhatsApp in Thumb-Zone */}
      <FloatingWhatsApp onOpenBooking={handleOpenGeneralBooking} />
    </div>
  );
}

export default App;
