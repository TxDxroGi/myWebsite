gsap.registerPlugin(ScrollTrigger);

TweenMax.to('.multitext', 2, {
    delay: .8,
    width: '50%',
    ease: Power2.easeInOut
})

gsap.to(".w1" , {
    x: -700,
    duration: 8,
    scrollTrigger: {
        trigger: ".w1",
        start: "top 80%",
        end: "top 30%",
        scrub: 5,
        toggleActions: "restart none none none",
        // play pause resume reverse restart reset comolete none
        //         onEnter | onLeave | onEnterBack | onLeaveBack  
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "1rem",
    },
  }
})