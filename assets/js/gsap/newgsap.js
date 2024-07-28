import { gsap, TimelineLite } from './otherLibs/gsap/all.js';
import { SplitText } from './src/splitText.js';

// Define the master timeline
var masterTimeline = gsap.timeline({ delay: 1.2 });

// Add the first and second animations to the master timeline to start at the same point
masterTimeline;

//====================================================

// home project show case moving animation start from here

//====================================================
var swiper;

const movingshowcaseParent = document.querySelector('.partner-main');

const movingProjectShowcase = document.querySelector(
  '.partner-main .swiper-wrapper'
);

function pauseAnimation() {
  movingProjectShowcaseAnimation.duration(100);
}

function resumeAnimation() {
  movingProjectShowcaseAnimation.duration(15).play();
}

const movingProjectShowcaseAnimation = gsap.timeline({ repeat: -1 });

movingProjectShowcaseAnimation
  .set(movingProjectShowcase, { x: 0 })
  .to(movingProjectShowcase, {
    x: '-100%',
    duration: 25,
    ease: 'none',
    onComplete: function () {
      gsap.set(movingProjectShowcase, { x: 0 });
      if (swiper) {
        swiper.slideNext();
      }
    },
  });

movingshowcaseParent.addEventListener('mouseenter', pauseAnimation);

movingshowcaseParent.addEventListener('mouseleave', resumeAnimation);

//====================================================

// home project show case moving animation ends here

//====================================================
