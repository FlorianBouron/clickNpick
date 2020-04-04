import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import AddressSearchSection from '../../components/AddressSearchSection';
import AdvantageSection from '../../components/AdvantageSection';
import CarouselSection from '../../components/CarouselSection';
import FarmersSection from '../../components/FarmersSection/FarmersSection';


const dataArray = [
  {
    text: 'Golden apples from Jerzy in Krakow',
    src: 'https://www.eho.eu/wp-content/uploads/2018/10/jabolko_novo.jpg"',
  },
  {
    text: 'Sweet beetroots from Przemek in Gdansk',
    src:
      'https://www.ogrodinfo.pl/wp-content/uploads/2018/08/buraki_16_746.jpg',
  },
  { text: 'Tasty potatoes from Michal in Warsaw', src: 'https://n-16-1.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/b432f34c5a997c8e7c806a895ecc5e25/d2788b1e-5131-4a94-910f-7e1b7d87a3bf.jpg?srcmode=0&srcx=1/20&srcy=1/1&srcw=87/100&srch=22/25&dstw=500&dsth=281&quality=80&type=1' },
];


export default function LandingPage() {
  return (
    <div>
      <HeroBanner />
      <AddressSearchSection />
      <AdvantageSection />
      <CarouselSection data={dataArray} title="Why is it worth it?" />
      <FarmersSection />
    </div>
  );
}
