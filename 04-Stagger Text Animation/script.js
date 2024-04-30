const h1 = document.querySelector("h1");
const h1Text = h1.textContent;
const splittedText = h1Text.split("");
let halfText = Math.floor(splittedText.length / 2);
console.log(halfText);
let clutter = "";

splittedText.forEach(function (element, index) {
  if (index < halfText) {
    clutter += `<span class="a">${element}</span>`;
  } else {
    clutter += `<span class="b">${element}</span>`;
  }
});

console.log(clutter);

h1.innerHTML = clutter;

// gsap aniamtion code below

gsap.from("h1 .a", {
  y: 70,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 70,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: -0.15,
});
