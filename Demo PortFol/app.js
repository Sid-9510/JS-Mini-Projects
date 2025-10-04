// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: "0",
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
function circleMouseFollower() {
  window.addEventListener("mousemove", function (detls) {
    // console.log(detls);
    this.document.querySelector("#minicircle").style.transform = `translate(${
      detls.clientX - 5
    }px ,${detls.clientY - 5}px)`;
  });
}
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mousemove", function (details) {
    // console.log(details.clientX, details.clientY);
    /*To show the imahe inside the element we have have to count the distance from top to where the pointer is IN THE ELEMENT not from the top of the window and that's why we have to find the diffrence between length from top of the window and the length from the top of the element*/

    // console.log(elem.getBoundingClientRect); // This gives all the details about that element

    // var diff = details.clientY - elem.getBoundingClientRect().top;
    var diffX = details.clientX - elem.getBoundingClientRect().left;
    var diffY = details.clientY - elem.getBoundingClientRect().top;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      x: diffX,
      y: diffY,
    });
  });
});
document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mouseleave", function (details) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });
});
