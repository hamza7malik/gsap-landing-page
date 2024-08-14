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
        <h1 className='text-white flex items-center justify-center h-full text-center'>
          Section-2
        </h1>
      </div>
      <div className='section-snap hero-main-wrap h-[100vh] bg-white w-full'>
        <h1 className='rotate-element text-black flex items-center justify-center h-full text-center'>
          Section-3
        </h1>
      </div>
    </div>
  );
};

export default index;
