gsap.registerPlugin(ScrollTrigger);

gsap.from("#box1", {
  scale: 0,
  duration: 1.5,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    markers: true,
    start: "top center", // page1 ekranning markaziga yetganda ishga tushadi
  },
});

gsap.from("#box2", {
  scale: 0,
  duration: 1.5,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top center",
  },
});

gsap.from("#box3", {
  scale: 0,
  duration: 1.5,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    markers: true,
    start: "top center",
  },
});
