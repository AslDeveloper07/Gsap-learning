gsap.from("#page1 #box1", {
  scale: 0,
  delay: 1,
  duration: 3,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page1 #box1",
    scroller: "body",
    markers: true,
    start: "top 60% "
  },
});

gsap.from("#page2 #box2", {
  scale: 0,
  delay: 1,
  duration: 3,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box2",
    scroller: "body",
    markers: true,
    start: "top 60% "
  },
});

gsap.from("#page3 #box3", {
  scale: 0,
  delay: 1,
  duration: 3,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #box3",
    scroller: "body",
    markers: true,
    start: "top 60% "
  },
});
