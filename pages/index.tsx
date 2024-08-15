import React, { useEffect } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {
  diagonalLineMidToBottomAnimation,
  diagonalLineTopToMidAnimation,
  rethinkTextAnimation,
  snapSection,
  snapSectionContent,
  straightLineMidToBottomAnimation,
  straightLineTopToMidAnimation,
} from '../utils/gsap/animations';

import AnimatedLogo from '../components/AnimatedLogo/AnimatedLogo';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    snapSectionContent('.section-content-snap');
    snapSection('.section-snap');
    straightLineMidToBottomAnimation();
    straightLineTopToMidAnimation();
    diagonalLineMidToBottomAnimation();
    diagonalLineTopToMidAnimation();
    rethinkTextAnimation();

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

      <div className='line-section-mid-to-bottom section-snap h-[100vh] bg-white w-full relative'>
        <div className='line-straight-mid-to-bottom w-[2px] bg-black absolute left-1/2 transform -translate-x-1/2'></div>
        <div className='h-full text-center flex items-center justify-center'>
          <div className='bg-white p-6 z-10'>
            <h3 className='text-black'>We are not another 360 agency</h3>
          </div>
        </div>
      </div>

      <div className='line-section-top-to-mid diagonal-line-section-mid-to-bottom  section-snap h-[100vh] bg-black w-full relative'>
        <div className='line-straight-top-to-mid w-[2px] h-[50%] bg-white absolute top-0 left-1/2 transform -translate-x-1/2'></div>

        <div className='h-full text-center flex items-center  justify-center'>
          <div className='bg-black p-6 z-10 absolute'>
            <h3 className='text-white'> But rather a mindset</h3>
            <div className='w-[40%] h-[2px] bg-white absolute right-4 bottom-4'>
              <div className='relative'>
                <div className='diagonal-line-mid-to-bottom backdrop-invert bg-white/30  w-[2px] h-[50vh] z-20 absolute top-0  sm:rotate-[12deg] right-1/2 transform translate-x-1/2 md:rotate-[23deg] origin-top'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='diagonal-line-section-top-to-mid section-snap h-[100vh] bg-white w-full relative'>
        <div className='h-full text-center flex items-center justify-center'>
          <div className='bg-white p-6 z-10 absolute'>
            <h3 className='text-black'>that will challenge you</h3>
            <div className='w-[40%] h-[2px] bg-black absolute left-4 top-4'>
              <div className='relative'>
                <div className='diagonal-line-top-to-mid backdrop-invert bg-white/30  w-[2px] h-[50vh] z-20 absolute sm:rotate-[12deg] right-1/2 transform translate-x-1/2 md:rotate-[23deg] origin-bottom'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-snap section-rethink h-[100vh] bg-white w-full flex items-center justify-center'>
        <h3 className='text-black text-center'>
          To <span className='re'>re</span>
          <span className='think'>think</span>
        </h3>
      </div>
      <div className='h-[140vh] bg-white w-full relative'>
        <div className='w-10 md:w-16 h-[50%] bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2'></div>
        <div className='h-full text-center flex items-center  justify-center'>
          <div className='bg-white p-6 z-10'>
            <h4 className='text-black'>Because</h4>
            <h3 className='text-black'>Launch thinking</h3>
          </div>
        </div>
      </div>

      <div className=' h-[140vh] bg-white w-full relative'>
        <div className='w-10 md:w-16 h-full bg-black absolute top-0 left-1/2 transform -translate-x-1/2'></div>
        <div className='h-full text-center flex items-center  justify-center'>
          <div className='text-center bg-white z-10'>
            <h3 className='text-black mb-12 md:mb-20'>does not equal</h3>

            <div className='inline-block rotate-90 bg-white origin-center ml-2 md:ml-5 p-2 md:p-6'>
              <h2 className='text-black'>growth</h2>
              <h2 className='text-black'>thinking</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[100vh] bg-white w-full relative'>
        <div className='w-10 md:w-16 h-[50%] bg-black absolute top-0 left-1/2 transform -translate-x-1/2'></div>
        <div className='h-full text-center flex items-center  justify-center'>
          <div className='bg-white p-6 z-10'>
            <h3 className='text-black'>Growth requires rethinking</h3>
            <div className='flex justify-center items-center gap-3 transform translate-y-[500%]'>
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
