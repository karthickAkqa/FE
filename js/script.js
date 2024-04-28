$(document).ready(function () {
  $(".carousel-item").each(function () {
    var attr = $(this).attr("data-image-src");
    if (typeof attr !== typeof undefined && attr !== false) {
      $(this).css("background-image", "url(" + attr + ")");
    }
  });

  /* text fade animation */

  gsap.registerPlugin(ScrollTrigger);
  var content = document.getElementById("quote");
  content.innerHTML =
    "<span>" + content.innerHTML.split("").join("</span><span>") + "</span>";

  gsap.set(
    ".aboutus h2 span",
    {
      transformOrigin: "100% 50%",
      opacity: 0.3,
    },
    0.02
  );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".trigger1",
        scrub: 1,
        start: "top 50%",
        end: "bottom 20%",
        ease: 0.5,
        // markers:true
      },
    })
    .to(".aboutus h2 span", {
      color: "#FCB315",
      duration: 0.5,
      opacity: 1,
      stagger: 0.5,
      ease: "back.in",
    })

    .from(".aboutus p", {
      duration: 1.5,
      delay: 1,
      opacity: 0,
      stagger: 0.5,
      y: 30,
      ease: "power1.out",
    });

 



  let middleDivHeight = document.getElementById("scrollcenter").clientHeight;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scrollwrap",
      start: "top top",
      // end: "+=1000px",
      pin: true,
      scrub: true,
    },
  });

  tl.to(".scrollcenter", {
    duration: 0.2,
    ease: "none",
    top: middleDivHeight,
  });

  const tp = gsap.timeline({
    scrollTrigger: {
      trigger: ".scrollwrap",
      start: "top top",
      // end: "+=1000px",
      // pin: true,
      scrub: true,
    },
  });

  tp.to(".scrollLeft, .scrollright", {
    duration: 0.2,
    ease: "none",
    top: -middleDivHeight,
  });





















  // Fixed Header =====================
  $(window).scroll(function () {
    var sticky = $("body"),
      scroll = $(window).scrollTop();
    if (scroll >= 5) sticky.addClass("fixed-header");
    else sticky.removeClass("fixed-header");
  });














});