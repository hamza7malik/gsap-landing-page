import React, { useEffect } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { snapSection, snapSectionContent } from '../utils/gsap/animations';

import AnimatedLogo from '../components/AnimatedLogo/AnimatedLogo';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    snapSectionContent('.section-content-snap');
    snapSection('.section-snap');

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* section-1 */}
      <div className='section-content-snap h-[100vh] bg-white w-full'>
        <div className='px-20 my-auto flex items-center justify-center h-full text-center'>
          <AnimatedLogo />
        </div>
      </div>
      <div className='section-snap h-[100vh] bg-black w-full'>
        <h2 className='text-white flex items-center justify-center h-full text-center'>
          WHAT IS CREO?
        </h2>
      </div>
      <div className='section-snap h-[100vh] bg-white w-full'>
        <h3 className='text-black flex items-center justify-center h-full text-center'>
          We are not another 360 agency
        </h3>
      </div>
      <div className='section-snap h-[100vh] bg-black w-full'>
        <h3 className='text-white flex items-center justify-center h-full text-center'>
          But rather a mindset
        </h3>
      </div>
      <div className='section-snap h-[100vh] bg-white w-full'>
        <h3 className='text-black flex items-center justify-center h-full text-center'>
          that will challenge you
        </h3>
      </div>
      <div className='section-snap h-[100vh] bg-white w-full'>
        <h3 className='text-black flex items-center justify-center h-full text-center'>
          To rethink
        </h3>
      </div>
      <div className='h-[100vh] bg-white w-full relative'>
        <div className='h-full text-center flex items-center  justify-center'>
          <div className='bg-white p-6 z-10'>
            <h4 className='text-black'>Because</h4>
            <h3 className='text-black'>Launch thinking</h3>
          </div>
        </div>
        <div className='w-10 md:w-16 h-[50%] bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2'></div>
      </div>

      <div className=' h-[100vh] bg-white w-full relative'>
        <div className='w-10 md:w-16 h-full bg-black absolute top-0 left-1/2 transform -translate-x-1/2'></div>
        <div className='h-full text-center flex items-center  justify-center'>
          <div className='text-center bg-white z-10'>
            <h3 className='text-black mb-8 md:mb-20'>does not equal</h3>

            <div className='inline-block rotate-90 bg-white origin-center ml-2 md:ml-5 p-2 md:p-6'>
              <h2 className='text-black'>growth</h2>
              <h2 className='text-black'>thinking</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='section-snap  h-[100vh] bg-white w-full relative'>
        <div className='w-10 md:w-16 h-[50%] bg-black absolute top-0 left-1/2 transform -translate-x-1/2'></div>
        <div className='h-full text-center flex items-center  justify-center'>
          <div className='bg-white p-6 z-10'>
            <h3 className='text-black'>Growth requires rethinking</h3>
            <div className='flex justify-center items-center gap-3 mt-7'>
              <h5>Explore</h5>
              <Image src={'/images/ham.png'} width={10} height={10} alt='' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
