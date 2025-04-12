import React from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import FeaturedConcertsSection from '@/components/organisms/FeaturedConcert';
import ConcertListSection from '@/components/organisms/ConcertListSection';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedConcertsSection />
      <ConcertListSection />
      {/* You can add more sections here as you build them */}
      {/* <FeaturedConcertsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <FAQSection /> */}
      {/* <NewsletterSection /> */}
    </main>
  );
}