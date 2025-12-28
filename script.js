document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

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
  },'same');

  tl.to(".main1", {
    backgroundColor: " rgb(0, 0, 0)"
  },'same');

  tl.to(".down1para",{
    scale:1,
  },'same');
  
  tl.to(".backblur",{
    // filter:"blur(0px)",
    opacity:0,
  },'same2');
  
  tl.to(".section1 img", {
    opacity:0,
  },'same2');
  
  
  tl.to(".section1text h2",{
    color:"rgb(0,0,0)"
  },'same2')
  
  tl.to(".section1text ul",{
    color:"rgb(0,0,0)"
  },'same2')
  
  tl.to(".section1text h1",{
    scale:1.2,
    filter:"blur(5px)",
    opacity:0,
  })
  
  
  tl.to(".down1para",{
    scale:0.8,
    opacity:0,
  });

  let lt=gsap.timeline({
    scrollTrigger: {
      trigger: ".main2",
      start: "0% 0%",
      end: "300% 100%",
      // markers: true,
      pin: true,
      scrub: 1,
    }
  });

  lt.to(".innermain",{
    scale:1,
  })



});