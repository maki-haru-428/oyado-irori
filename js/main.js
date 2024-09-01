$(document).ready(function () {
  $(".firstview-change").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    infinite: true,
    fade: true,
    speed: 2000,
    cssEase: "linear",
    useCSS: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    swipe: false,
    touchMove: false,
    waitForAnimate: false,
    arrows: false,
    dots: false,
  });
});

// カーソルストーカー
$(window).on("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  $(".stalker").css("translate", `${x}px ${y}px`);
});

$(window).on("mouseenter", () => {
  $(".stalker").addClass("is-active");
});
$(window).on("mouseleave", () => {
  $(".stalker").removeClass("is-active");
});

// ホバー時にストーカーデカくなる
$("a , button").on("mouseenter", () => {
  $(".stalker").addClass("is-hover");
});
$("a , button").on("mouseleave", () => {
  $(".stalker").removeClass("is-hover");
});

// パララックス
const $parallaxElms = $(".para");

$parallaxElms.each((index, elm) => {
  const speed = $(elm).attr("data-para");

  gsap.fromTo(
    elm,
    {
      yPercent: 10 * speed,
    },
    {
      yPercent: -10 * speed,
      scrollTrigger: {
        trigger: elm,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        
      },
    }
  );
});
