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

  let tl2=gsap.timeline({
    scrollTrigger: {
      trigger: ".main2",
      start: "0% 100%",
      end: "30% 70%",
      // markers: true,
      // pin: true,
      scrub: 1,
    }
  });

  tl2.to(".innermain",{
    scale:1,
  })

  let tl3=gsap.timeline({
    scrollTrigger:{
      trigger:".main3",
      start:"30% 68%",
      end:"80% 80%",
      // markers:true,
      scrub:2,
    }
  })

  tl3.to(".main3img ",{
    x:"-5%"
  },'same')

  tl3.to(".main3img :nth-child(1)",{
    opacity:1,
  },'same')


  tl3.to(".main3img :nth-child(1)",{
    x:"11%"
  })

  

});