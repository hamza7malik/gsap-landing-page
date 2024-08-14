import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div className='py-7 px-16 flex items-center justify-between'>
        <div>
          <Image
            src={'/images/arrow.png'}
            height={20}
            width={20}
            alt='share-ic'
          />
        </div>
        <p>2024 © Creo Global. All Rights Reserved</p>
        <div>
          <Image
            className='text-right'
            src={'/images/share.png'}
            height={20}
            width={20}
            alt='share-ic'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
