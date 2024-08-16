import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const logoAnimation = () => {
  gsap.fromTo(
    ['.r-letter', '.e-letter'],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,

      duration: 2,
      ease: 'power2.out',
    }
  );

  gsap.fromTo(
    '.letters-wrapper',
    { scale: 0.9, y: 50 },
    {
      scale: 1,
      y: 0,
      duration: 3,
      ease: 'power2.out',
    }
  );

  gsap.fromTo(
    ['.c-letter', '.o-letter'],
    { y: 0, opacity: 1 },
    {
      y: 200,
      opacity: 0.5,
      scrollTrigger: {
        trigger: '.section-logo',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      ease: 'power2.out',
    }
  );
  gsap.to('.section-logo', {
    backgroundColor: 'black',
    scrollTrigger: {
      trigger: '.section-logo',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
    ease: 'power2.out',
  });
};

export const snapSectionContent = (selector: string) => {
  const sections = gsap.utils.toArray(selector) as HTMLElement[];

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      scrub: true,
      pin: true,
      pinSpacing: false,
      snap: 1,
    });
  });
};

export const snapSection = (selector: string) => {
  const sections = gsap.utils.toArray(selector) as HTMLElement[];
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      snap: 1 / (sections.length - 1),
    });
  });
};

export const rethinkTextAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-rethink',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  tl.to('.think', { x: 40, duration: 1, delay: 0.5 }).to(
    '.re',
    { opacity: 1, x: -24, duration: 1 },
    '-=1'
  );
};

export const diagonalLineTopToMidAnimation = () => {
  gsap.fromTo(
    '.diagonal-line-top-to-mid',
    { height: '0vh', bottom: 0 },
    {
      height: '50vh',
      scrollTrigger: {
        trigger: '.diagonal-line-section-top-to-mid',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    }
  );
};

export const diagonalLineMidToBottomAnimation = () => {
  gsap.fromTo(
    '.diagonal-line-mid-to-bottom',
    { height: '0vh', top: 0 },
    {
      height: '50vh',
      scrollTrigger: {
        trigger: '.diagonal-line-section-mid-to-bottom',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    }
  );
};

export const straightLineTopToMidAnimation = () => {
  gsap.fromTo(
    '.line-straight-top-to-mid',
    { height: '0%', top: 0 },
    {
      height: '50%',
      scrollTrigger: {
        trigger: '.line-section-top-to-mid',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    }
  );
};

export const straightLineMidToBottomAnimation = () => {
  gsap.fromTo(
    '.line-straight-mid-to-bottom',
    { height: '0%', top: '50%' },
    {
      height: '50%',
      scrollTrigger: {
        trigger: '.line-section-mid-to-bottom',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    }
  );
};

export const exploreElementAnimation = () => {
  gsap.fromTo(
    '.explore-element',
    { opacity: 0, filter: 'blur(10px)' },
    {
      opacity: 1,
      filter: 'blur(0)',
      scrollTrigger: {
        trigger: '.last-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },

      ease: 'power2.in',
    }
  );
};

export const typeWriterAnimation = () => {
  gsap.to('.typewriter-text', {
    scrollTrigger: {
      trigger: '.section-footer',
      start: 'top bottom',
      end: 'top bottom',
      scrub: 2,
    },
    text: { value: ' requires CREO' },
    ease: 'none',
  });
};

export const lastSectionStripAnimation = () => {
  gsap.fromTo(
    '.last-section-strip',
    { y: 0 },
    {
      y: '-100%',

      // opacity: 0.5,
      scrollTrigger: {
        trigger: '.last-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },

      ease: 'power2.out',
    }
  );
};

export const textFloatOutAnimation = () => {
  gsap.matchMedia().add('(min-width: 768px)', () => {
    gsap.fromTo(
      '.float-out-text',
      { marginLeft: 0 },
      {
        marginLeft: '-360px',
        scrollTrigger: {
          trigger: '.last-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'power2.out',
      }
    );
  });
  gsap.matchMedia().add('(max-width: 767px)', () => {
    gsap.fromTo(
      '.float-out-text',
      { marginLeft: 0 },
      {
        marginLeft: '-190px',
        scrollTrigger: {
          trigger: '.last-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'power2.out',
      }
    );
  });
};

export const whatIsCreoAnimation = () => {
  gsap.fromTo(
    '.what-is-creo',
    { scale: 3, x: '25%', opacity: 0.5, y: '10%' },
    {
      x: '-55%',
      scale: 3,
      opacity: 1,
      y: '-10%',
      scrollTrigger: {
        trigger: '.section-what-is-creo',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      ease: 'power2.out',
    }
  );
  gsap.fromTo(
    '.creo',
    { scale: 0.2 },
    {
      scale: 1,

      scrollTrigger: {
        trigger: '.section-what-is-creo',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      ease: 'power2.out',
    }
  );
};
