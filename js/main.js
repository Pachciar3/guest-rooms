//MOBILE MENU
const menuBtn = document.getElementById('menu-btn');
const menuCnt = document.getElementById('menu');
let menuFlag = false;
menuBtn.addEventListener('click', () => {
  menuCnt.classList.toggle('is-active');
  menuFlag = !menuFlag;
  menuBtn.setAttribute("aria-expanded", menuFlag);
})
//SLIDER
const sliderTab = [{
  source: "./images/pokoje_1.jpg",
  alt: "Foto 2"
}, {
  source: "./images/background.jpg",
  alt: "Foto 1"
}];
const slider = document.getElementById('slider');
const img = slider.querySelector('img');
let currentSlide = 0;
const nextImage = () => {
  console.log('next');
  img.src = sliderTab[currentSlide].source;
  img.alt = sliderTab[currentSlide].alt;
  if (currentSlide == sliderTab.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}
setInterval(nextImage, 10000);