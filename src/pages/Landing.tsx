import AllInOne from '../components/sections/landing/all-in-one/AllInOne';
import Hero from '../components/sections/landing/hero/Hero';
import OurSuccess from '../components/sections/landing/our-success/OurSuccess';
import WhatIs from '../components/sections/landing/what-is/WhatIs';

export default function Landing() {
  return (
    <div>
      <Hero />
      <OurSuccess />
      <AllInOne />
      <WhatIs />
    </div>
  );
}
