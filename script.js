document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

  const lenis = new Lenis({
    lerp: 0.05,          // Webflow-like
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main1",
      start: "20% 20%",
      end: "300% 1%",
      // markers: true,
      pin: true,
      scrub: 1,
    }


  });

  tl.to("nav", {
    y: -100,
  });

  tl.to(".section1 img", {
    scale: 1.18,
    // opacity:0,
  }, 'same');

  tl.to(".main1", {
    backgroundColor: " rgb(0, 0, 0)"
  }, 'same');

  tl.to(".down1para", {
    scale: 1,
  }, 'same');

  tl.to(".backblur", {
    // filter:"blur(0px)",
    opacity: 0,
  }, 'same2');

  tl.to(".section1 img", {
    opacity: 0,
  }, 'same2');


  tl.to(".section1text h2", {
    color: "rgb(0,0,0)"
  }, 'same2')

  tl.to(".section1text ul", {
    color: "rgb(0,0,0)"
  }, 'same2')

  tl.to(".section1text h1", {
    scale: 1.2,
    filter: "blur(5px)",
    opacity: 0,
  })


  tl.to(".down1para", {
    scale: 0.8,
    opacity: 0,
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main2",
      start: "0% 100%",
      end: "30% 50%",
      // markers: true,
      // pin: true,
      scrub: 1,
    }
  });

  tl2.to(".innermain", {
    scale: 1,
    opacity:1,
  })

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main3",
      start: "30% 68%",
      end: "100% 80%",
      // markers:true,
      scrub:1,
    }
  })

  tl3.to(".main3img ", {
    x: "-5%"
  }, 'same')

  tl3.to(".main3img :nth-child(1)", {
    opacity: 1,
  }, 'same')


  tl3.to(".main3img :nth-child(1)", {
    x: "11%"
  })

  tl3.to(".main3", {
    backgroundColor: "#ffff",
  }, 'same1')


  tl3.to(".main3 .bottomtext", {
    color: "rgb(0,0,0)"
  }, 'same1')

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main4",
      // markers: true,
      start: "0% 80%",
      end: "100% 10%",
      scrub:1,
    }
  })

  tl4.to(".para", {
    x: "-60%"
  })



});