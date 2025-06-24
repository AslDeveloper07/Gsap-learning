gsap.registerPlugin(ScrollTrigger);

gsap.from("#box1", {
  scale: 0,
  rotate: 360,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page1",
    start: "top center",
    scroller: "body",
    markers: true,
  }
});

gsap.from("#box2", {
  scale: 0,
  rotate: 360,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page2",
    start: "top center",
    scroller: "body",
    markers: true,
  }
});

gsap.from("#box3", {
  scale: 0,
  rotate: 360,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page3",
    start: "top center",
    scroller: "body",
    markers: true,
  }
});
