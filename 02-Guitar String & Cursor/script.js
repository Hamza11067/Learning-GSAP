let initialPath = "M 0 100 Q 600 100 1200 100";
let finalPath = "M 0 100 Q 600 100 1200 100";

let string = document.querySelector("#string");
let cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
  });
});

string.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    // scale: 4,
    duration: 0.5,
    backgroundColor: "lightgreen"
  });
});

string.addEventListener("mousemove", function (dets) {
  finalPath = `M 0 100 Q ${dets.x} ${dets.y} 1200 100`;

  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    // scale: 1,
    backgroundColor: "white"
  });

  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 1.2,
    ease: "elastic.out(1,0.1)",
  });
});
