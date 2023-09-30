gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

gsap.to(".w1" , {
    x: -650,
    duration: 8,
    scrollTrigger: {
        trigger: ".w1",
        start: "top 80%",
        end: "top 30%",
        scrub: 5,
        toggleActions: "restart reset none none",
        // play pause resume reverse restart reset comolete none
        //         onEnter | onLeave | onEnterBack | onLeaveBack  
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "1rem",
    },
  }
})

