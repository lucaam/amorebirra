const intro = document.querySelector(".intro");

const video = intro.querySelector("video");
const text = document.querySelector("#title");
const text1 = document.querySelector("#first");
const text2 = document.querySelector("#second");
const text3 = document.querySelector("#third");
const text4 = document.querySelector("#fourth");
const text5 = document.querySelector("#fifth");

const final1 = document.querySelector("#final1");
const final2 = document.querySelector("#final2");
const final3 = document.querySelector("#final3");
const final4 = document.querySelector("#final4");
const final5 = document.querySelector("#final5");

if (!getMobileOperatingSystem() == "Android") {
  video.autoplay = false;
  //Android needs autoplay = true to let browser show the video
} else if (
  getMobileOperatingSystem() == "iOS" &&
  (BrowserDetect.browser === "Safari" || BrowserDetect.browser === "Mozilla")
) {
  video.playsinline = true;
  //Android needs autoplay = true to let browser show the video
} else {
  video.autoplay = false;
  //Autoplay must be false because if not a flickering is present on the video when there is no scroll
}

var tl = new TimelineMax();

tl.from(text, 0.5, { opacity: 0, y: -50 })
  .to(text, { opacity: 1 })
  .to(text, { opacity: 0, y: +50 })

  .to(text1, { opacity: 1 })
  .to(text1, { opacity: 0, y: +50 })

  .to(text2, { opacity: 1 })
  .to(text2, { opacity: 0, y: +50 })

  .to(text3, { opacity: 1 })
  .to(text3, { opacity: 0, y: +50 })

  .to(text4, { opacity: 1 })
  .to(text4, { opacity: 0, y: +50 })

  .to(text5, { opacity: 1 })
  .to(text5, { opacity: 0, y: +50 });

//Uncomment to get AMORE word made by previous words disappeared
// tl
// .to(text, {opacity: 1})
// .to(text, {opacity: 0, y: +50})

// .to(text1, {opacity: 1})
// .to(text1, { y: +300, x: +44})
// .to(final1, { opacity: 0})

// .to(text2, {opacity: 1})
// .to(text2, {y: +350, x: +30})
// .to(final2, { opacity: 0})

// .to(text3, {opacity: 1})
// .to(text3, {y: +400, x: +22})
// .to(final3, { opacity: 0})

// .to(text4, {opacity: 1})
// .to(text4, {y: +450, x: +105})
// .to(final4, { opacity: 0})

// .to(text5, {opacity: 1})
// .to(text5, {y: +500, x: +114})
// .to(final5, { opacity: 0})

//ScrollMagic

let videoduration = 10000;

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  duration: videoduration,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

const scene1 = new ScrollMagic.Scene({
  duration: videoduration,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setTween(tl)
  .addTo(controller);

  //Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 40);

//Beers aniamtion
const paleAle = document.querySelector("#pale-ale");
const lightAle = document.querySelector("#light-ale");
const italianWheatAle = document.querySelector("#italian-wheat-ale");
const darkAle = document.querySelector("#dark-ale");

const start = document.querySelector("#trigger");
const trigger2 = document.querySelector("#trigger2");
const trigger3 = document.querySelector("#trigger3");
const trigger4 = document.querySelector("#trigger4");

// Animate Pale Ale
var tlImages1 = new TimelineMax();
tlImages1.from(paleAle, { opacity: 0, x: -250 }).to(paleAle, { opacity: 1 });
const scene2 = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: start,
    triggerHook: 0,
  })
    .addIndicators()
    .setTween(tlImages1)
    .addTo(controller);

// Animate Light Ale
var tlImages2 = new TimelineMax();
tlImages2.from(lightAle, { opacity: 0, x: +250 }).to(lightAle, { opacity: 1 });
const scene3 = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: trigger2,
    triggerHook: 0,
  })
    .addIndicators()
    .setTween(tlImages2)
    .addTo(controller);


// Animate Italian Wheat Ale
var tlImages3 = new TimelineMax();
tlImages3
  .from(italianWheatAle, { opacity: 0, x: -250 })
  .to(italianWheatAle, { opacity: 1 });
  const scene4 = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: trigger3,
    triggerHook: 0,
  })
    .addIndicators()
    .setTween(tlImages3)
    .addTo(controller);

// Animate Dark Ale
var tlImages4 = new TimelineMax();
tlImages4.from(darkAle, { opacity: 0, x: +250 }).to(darkAle, { opacity: 1 });
const scene5 = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: trigger4,
    triggerHook: 0,
  })
    .addIndicators()
    .setTween(tlImages4)
    .addTo(controller);

