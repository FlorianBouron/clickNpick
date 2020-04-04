import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import AddressSearchSection from '../../components/AddressSearchSection';
import AdvantageSection from '../../components/AdvantageSection';
import CarouselSection from '../../components/CarouselSection';
import FarmersSection from '../../components/FarmersSection/FarmersSection';

export default function LandingPage() {
  return (
    <div>
      <HeroBanner />
      <AddressSearchSection />
      <AdvantageSection />
      <CarouselSection />
      <FarmersSection />
    </div>
  );
}
