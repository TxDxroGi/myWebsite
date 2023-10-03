gsap.registerPlugin(ScrollTrigger);

gsap.to(".animate-text", {
    x: -900,
    duration: 30,
    scrollTrigger: {
        trigger: ".bg-text-container",
        start: "top 80%",
        end: "top 2%",
        scrub: 8,
        // markers: {
        //     startsColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "1rem",
        // }
    }
})
gsap.to(".animate-text.left", {
    x: 900,
    duration: 30,
    scrollTrigger: {
        trigger: ".bg-text-container",
        start: "top 80%",
        end: "top 2%",
        scrub: 8,
        // markers: {
        //     startsColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "1rem",
        // }
    }
})