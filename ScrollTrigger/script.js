gsap.from("#page1 #box", {
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 1,
});
gsap.from("#page2 #box", {
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.to("#page3 #box", {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 #box",
    markers: true,
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: true,
  },
});
