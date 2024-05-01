window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marquee", {
      transform: "translateX(-200%)",
      duration: 7,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".marquee img", {
      rotate: 180,
      duration: 0.5,
      ease: "none",
    });

  } else {

    gsap.to(".marquee", {
      transform: "translateX(0%)",
      duration: 7,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".marquee img", {
      rotate: 0,
      duration: 0.5,
      ease: "none",
    });
  }
});
