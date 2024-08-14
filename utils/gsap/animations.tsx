import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const rotateElement = () => {
  gsap.to('.rotate-element', {
    rotation: 360,
    duration: 2, // duration of one complete rotation
    repeat: -1, // repeat infinitely
    ease: 'linear', // keep the speed consistent
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
      pin: true, // Pin the section during scroll
      snap: 1 / (sections.length - 1),
    });
  });
};
