//burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger-active');

    menu.classList.toggle('header__nav-active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger-active');

    menu.classList.remove('header__nav-active');

    document.body.classList.remove('stop-scroll');
  })
})

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger-open");
  let n = "true" === burger.getAttribute("aria-expanded");
  burger.setAttribute("aria-expanded", !n),
    n
      ? burger.setAttribute("aria-label", "Открыть меню")
      : burger.setAttribute("aria-label", "Закрыть меню");
});

//search
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('header__search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('header__search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

// dropdown
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });
})


document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__menu-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown");
    
    document.querySelectorAll(".header__menu-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("btn__active");
      }
    });
    
    document.querySelectorAll(".dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("dropdown__active");
      }
    })
    dropdown.classList.toggle("dropdown__active");
    btn.classList.toggle("btn__active")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__menu-list")) {
    document.querySelectorAll(".dropdown").forEach(el => {
        el.classList.remove("dropdown__active");
    })
     document.querySelectorAll(".header__menu-btn").forEach(el => {
        el.classList.remove("btn__active");
    });
  }
})
})

// hero-swiper
const container = document.querySelector(".hero__container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2200,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".hero__swiper-button-next",
    prevEl: ".hero__swiper-button-prev"
  },
  pagination: {
    el: '.hero__swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }
})

//select//
document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
    },
    placeholder: true,
    placeholderValue: 'Выберите',
    shouldSort: false
  });
});


// gallery__swiper
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery__slides-container", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev"
    },

    breakpoints: {
      100: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },

      440: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2
      },

      960: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2
      },

      1360: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

  });
});

//accordion
(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();

//tabs
let tabsBtn = document.querySelectorAll('.js-tab-btn');
let tabsItem = document.querySelectorAll('.js-tab-content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tab-active') });
    e.currentTarget.classList.add('tab-active');

    tabsItem.forEach(function (element) { element.classList.remove('catalog__card-active') });
    tabsBtn.forEach(function (element) { element.classList.remove('tab_active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__card-active');
    document.querySelector(`[data-path="${path}"]`).classList.add('tab_active');

  });
});

// events-swiper
const swiperEvents = new Swiper('.events__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  // Navigation arrows
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },

  pagination: {
    el: ".event-pagination",
    type: 'bullets',
    clickable: true
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    668: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },

    960: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30
    },

    1360: {
      slidesPerView: 3,
      spaceBetween: 50
    },
  }
});

//tippy//
tippy.setDefaultProps({
  trigger: 'click'
});

tippy('#tooltip-1', {
  content: 'tooltip-1',
});

tippy('#tooltip-2', {
  content: 'tooltip-2',
});

tippy('#tooltip-3', {
  content: 'tooltip-3',
});

// projects swiper
const swiperProjects = new Swiper('.projects__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.projects__btn-next',
    prevEl: '.projects__btn-prev',
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    668: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },

    960: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    1360: {
      slidesPerView: 3,
      spaceBetween: 50
    },
  }
});

// form
// inputmask
const form = document.querySelector('.contacts__form');
const telSelector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(telSelector);

const validation = new JustValidate('.contacts__form', {
  errorLabelStyle: {
    color: '#D11616',
  },

})
validation.addField('.input-name', [
  {
    rule: 'required',
    errorMessage: 'Введите имя',
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Не короче 3 символов!',
  },
  {
    rule: 'customRegexp',
    value:  /^[A-ZА-ЯЁ]+$/i,
    errorMessage: 'Только буквы!',
  },
  {
    rule: 'maxLength',
    value: 20,
    errorMessage: 'Не длиннее 20 символов!',
  },
]).addField('.input-tel', [
  {
    rule: 'required',
    errorMessage: 'Укажите телефон',
  },
  {
    validator: (value) => {
      const phone = telSelector.inputmask.unmaskedvalue()
      console.log(phone)
      return phone.length === 10;
    },
    errorMessage: 'Телефон не корректен!',
  },
]).onSuccess((event) => {
  console.log('Validation passes and form submitted', event);

  let formData = new FormData(event.target);

  console.log(...formData);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Отправлено');
      }
    }
  }

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  event.target.reset();
  alert('Спасибо за заявку! Мы с Вами скоро свяжемся!');
});

// map
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806901305, 37.601088500012],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "347px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "270px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {hintContent: 'Шоурум №4',},
    {
      iconLayout: "default#image",
      iconImageHref: "img/marker.svg",
      iconImageSize: [20, 20],
      // iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}


// scroll
(() => {

  function scrollToContent (link, isMobile) {
    if (isMobile && window.getWindowWidth() > window.MOBILE_WIDTH) {
      return;
    }

    const href = link.getAttribute('href').substring(1);

    if (Boolean(href)) {
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
    }

  }

  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        scrollToContent(this, false);
    });
  });
}) ();
