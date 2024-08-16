import React, { Fragment, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import './AnimatedLogo.css';
import CIconSVG from '../../public/images/creo/c.svg';
import RIconSVG from '../../public/images/creo/r.svg';
import EIconSVG from '../../public/images/creo/e.svg';
import OIconSVG from '../../public/images/creo/o.svg';
import { logoAnimation } from '../../utils/gsap/animations';

const AnimatedLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='letters-wrapper w-full h-full flex gap-3'>
        <CIconSVG className='c-letter' />
        <RIconSVG className='r-letter' />
        <EIconSVG className='e-letter' />
        <OIconSVG className='o-letter' />
      </div>
    </div>
  );
};

export default AnimatedLogo;
