import React from 'react'
import Banner from '@/components/Banner';
import BootcampHero from '@/components/bootcampHero';

const page = () => {
  return (
    <div className="home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      <Banner />
      <BootcampHero />
    </div>
  );
}

export default page;