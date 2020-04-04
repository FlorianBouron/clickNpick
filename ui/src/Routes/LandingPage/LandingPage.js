import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import EmailAddressSection from '../../components/EmailAddressSection';
import AdvantageSection from '../../components/AdvantageSection';
import CarouselSection from '../../components/CarouselSection';
import FarmersSection from '../../components/FarmersSection/FarmersSection';

export default function LandingPage() {
  return (
    <div>
      <HeroBanner />
      <EmailAddressSection />
      <AdvantageSection />
      <CarouselSection />
      <FarmersSection />
    </div>
  );
}
