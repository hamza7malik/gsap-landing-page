import React, { Fragment } from 'react';

import './AnimatedLogo.css';
import CIconSVG from '../../public/images/creo/c.svg';
import RIconSVG from '../../public/images/creo/r.svg';
import EIconSVG from '../../public/images/creo/e.svg';
import OIconSVG from '../../public/images/creo/o.svg';

const AnimatedLogo = () => {
  return (
    <div className='w-full h-full '>
      <div className='w-full h-full flex gap-3'>
        <div className='contents'>
          <CIconSVG />
        </div>
        <div className='contents'>
          <RIconSVG />
        </div>
        <div className='contents'>
          <EIconSVG />
        </div>
        <div className='contents'>
          <OIconSVG />
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
