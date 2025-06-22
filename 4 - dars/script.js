// ================================ ***** 1 GSAP function ***** ================================

const text = document.querySelector('.text');
    const chars = text.textContent.split('');
    text.innerHTML = '';

    chars.forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      text.appendChild(span);
    });

    gsap.to(".text span", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

// ================================ ***** 2 GSAP function ***** ================================

const text2 = document.querySelector('.text2');
const letters2 = text2.textContent.split('');
text2.innerHTML = '';

letters2.forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  text2.appendChild(span);
});

gsap.to(".text2 span", {
  x: 0,
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.05,
  ease: "power3.out"
});


// ================================ ***** 3 GSAP function ***** ================================


const text3 = document.querySelector('.text3');
  const letters3 = text3.textContent.split('');
  text3.innerHTML = '';

  letters3.forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    text3.appendChild(span);
  });

  gsap.to(".text3 span", {
    rotateX: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.05,
    ease: "expo.out"
  });

// ================================ ***** 4 GSAP function ***** ================================
function splitText(selector) {
    const el = document.querySelector(selector);
    const chars = el.textContent.split('');
    el.innerHTML = '';
    chars.forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      el.appendChild(span);
    });
  }

  // 5 ta textni split qilamiz
  splitText('.text1');
  splitText('.text2');
  splitText('.text3');
  splitText('.text4');
  splitText('.text5');

  // 1. PASTDAN CHIQADI
  gsap.fromTo(".text1 span",
    { y: 100 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out(1.7)"
    }
  );

  // 2. YUQORIDAN TUSHADI
  gsap.fromTo(".text2 span",
    { y: -100 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "bounce.out"
    }
  );

  // 3. AYLANA EFFEKTI
  gsap.fromTo(".text3 span",
    { rotate: 720, scale: 0 },
    {
      rotate: 0,
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.04,
      ease: "elastic.out(1, 0.4)"
    }
  );

  // 4. ZOOM (kichraygan holatda paydo bo‘ladi)
  gsap.fromTo(".text4 span",
    { scale: 3 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.out"
    }
  );

  // 5. RANDOM HOLATLARDAN chiqish
  const spans5 = document.querySelectorAll('.text5 span');
  spans5.forEach(span => {
    const x = (Math.random() - 0.5) * 400;
    const y = (Math.random() - 0.5) * 300;
    span.style.transform = `translate(${x}px, ${y}px)`;
  });

  gsap.to(".text5 span", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.04,
    ease: "power4.out"
  });