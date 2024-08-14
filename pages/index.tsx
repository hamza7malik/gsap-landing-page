import React, { useEffect } from 'react';

import AnimatedLogo from '../components/AnimatedLogo/AnimatedLogo';

const index = () => {
  return (
    <div>
      {/* section-1 */}
      <div className='section-content-snap hero-main-wrap h-[100vh] bg-white w-full'>
        <div className='px-20 my-auto flex items-center justify-center h-full text-center'>
          <AnimatedLogo />
        </div>
      </div>
      <div className='section-snap hero-main-wrap h-[100vh] bg-black w-full'>
        <h2 className='text-white flex items-center justify-center h-full text-center'>
          WHAT IS CREO?
        </h2>
      </div>
      <div className='section-snap hero-main-wrap h-[100vh] bg-white w-full'>
        <h3 className='rotate-element text-black flex items-center justify-center h-full text-center'>
          We are not another 360 agency
        </h3>
      </div>
      <div className='section-snap hero-main-wrap h-[100vh] bg-black w-full'>
        <h3 className='rotate-element text-white flex items-center justify-center h-full text-center'>
          But rather a mindset
        </h3>
      </div>
      <div className='section-snap hero-main-wrap h-[100vh] bg-white w-full'>
        <h3 className='rotate-element text-black flex items-center justify-center h-full text-center'>
          that will challenge you
        </h3>
      </div>
      <div className='section-snap hero-main-wrap h-[100vh] bg-white w-full'>
        <h3 className='rotate-element text-black flex items-center justify-center h-full text-center'>
          To rethink
        </h3>
      </div>
    </div>
  );
};

export default index;
