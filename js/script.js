
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('searсh-form').classList.add('search-form--show')
  })
  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('searсh-form').classList.remove('search-form--show')
  })
  document.getElementById('searсh-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

let tabsStep = document.querySelectorAll('.how__step-link');
let tabsItem = document.querySelectorAll('.how__bottom-container');

tabsStep.forEach(function(element){
  element.addEventListener('click', function (e){
    const path = e.currentTarget.dataset.path;

    tabsStep.forEach(function(btn) { btn.classList.remove('how__step-link--active') });
    e.currentTarget.classList.add('how__step-link--active');

    tabsItem.forEach(function(element) { element.classList.remove('how__bottom-container--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__bottom-container--active');
  });
})

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  icons: false,
  active: false
  })

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link')

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  }
)

menuLinks.forEach(function (el){
  el.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    })
  })

  const swiper = new Swiper('.swiper-container', {
    slidesPerViev: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
