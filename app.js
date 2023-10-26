gsap.registerPlugin(ScrollTrigger);


gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger, SplitText);
const split = new SplitText("p", { type: "lines" });

split.lines.forEach((target) => {
  gsap.to(target, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      markers: true,
      scrub: 1,
      start: "top center",
      end: "bottom center"
    }
  });
});

// var words = ['console.log("my-portfolio");', 'puts "I am old 16 years old"', 
// 'console.log("I want to be a programmer")','echo "I want to write code";'],
