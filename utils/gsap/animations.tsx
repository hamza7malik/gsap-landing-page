import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const rotateElement = () => {
  gsap.to('.rotate-element', {
    rotation: 360,
    duration: 2,
    repeat: -1,
    ease: 'linear',
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
