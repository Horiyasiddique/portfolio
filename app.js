let menu = document.querySelector("#menu");
let cross = document.querySelector("#full i");
let tl = gsap.timeline();
tl.to("#full", {
  right: -0,
  duration: 0.7,
});

tl.from("#full h4", {
  x: 100,
  stagger: 0.4,
  opacity: 0,
  duration: 0.6,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

cross.addEventListener("click", () => {
    console.log('clicked closed')
  tl.reverse();
});

let tl2 = gsap.timeline();
tl2.from(
  ".left",
  {
    x: -150,
    duration: 0.9,
    opacity: 0,
  },
  "hi"
);

tl2.from(
  ".right",
  {
    x: 120,
    duration: 0.9,
    opacity: 0,
  },
  "hi"
);

//cursor animation
let cursor = document.querySelector("#cursor");
let body = document.querySelector('body');
body.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out(1.7)",
  })
})



