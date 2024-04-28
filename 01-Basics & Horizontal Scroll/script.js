let tl = gsap.timeline();

tl.from("h1", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});

tl.from("li", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
});

tl.from(".hero", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  scale: 0.5,
});

// page 2
gsap.to(".page2 h1", {
  transform: "translateX(-73%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 3,
    pin: true,
  },
});
