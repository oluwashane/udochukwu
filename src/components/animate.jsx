import gsap from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger'

// Animate
export const navbar = elem => {

}

export const textIntro = elem => {
  gsap.from(elem, {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 3,
    ease: 'back',
  })
}