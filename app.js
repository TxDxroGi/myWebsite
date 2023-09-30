gsap.registerPlugin(ScrollTrigger);

gsap.to(".w1" , {
    x: -650,
    duration: 4,
    scrollTrigger: ".w2"
})