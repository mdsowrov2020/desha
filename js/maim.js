window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// slick slider for home banner

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  prevArrow:
    '<span class="prev_arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next_arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  fade: true,
  autoplay: true,
  cssEase: 'linear',
});

//====================================BACK TO TOP JS

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

//  Executive part slider
// $('.executive_slider').slick({
//   infinite: true,
//   slidesToShow: 4,
//   prevArrow:
//     '<span class="prev_arrow_executive"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
//   nextArrow:
//     '<span class="next_arrow_executive"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
//   autoplay: true,
//   slidesToScroll: 4,
// });

$('.executive_slider').slick({
  infinite: true,
  slidesToShow: 2,
  prevArrow:
    '<span class="prev_arrow_executive"><i class="fas fa-arrow-left"></i></span>',
  nextArrow:
    '<span class="next_arrow_executive"><i class="fas fa-arrow-right"></i></span>',
  autoplay: true,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// General slider
$('.general_slider').slick({
  infinite: true,
  slidesToShow: 2,
  prevArrow:
    '<span class="prev_arrow_executive"><i class="fas fa-arrow-left"></i></span>',
  nextArrow:
    '<span class="next_arrow_executive"><i class="fas fa-arrow-right"></i></span>',
  autoplay: true,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// Partner part slider start
$('.partner_slider').slick({
  infinite: true,
  speed: 500,
  arrows: false,
  dots: false,
  autoplay: true,
  slidesToShow: 7,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//====================================count down  JS
//SETUP COUNTDOWN FUNCTION
function countdown(endDate) {
  //SET VARIABLES
  let days, hours, minutes, secondes;

  //DATE
  endDate = new Date(endDate).getTime();

  //RUN CALCTIME FUNCTION EACH SECOND
  setInterval(calcTime, 1000);

  //SETUP CALCTIME FUNCTION
  function calcTime() {
    //TODAY [ CURRENT DATE ]
    let today = new Date().getTime();

    //TIME REMAINING BETWEEN THE CURRENT DATE AND END DATE.
    let timeRemaining = parseInt((endDate - today) / 1000);

    if (timeRemaining >= 0) {
      //GET DAYS [ DAY = 86400 SECONDS ]
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      //GET HOURS [ HOUR = 3600 SECONDS ]
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      //GET MINUTES [ MIN = 60 SECONDS  ]
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      //GET SECONDS
      secondes = parseInt(timeRemaining);

      //SELECT ELEMENTS
      const countDays = document.querySelector('.countdown-days');
      const countHours = document.querySelector('.countdown-hours');
      const countMinutes = document.querySelector('.countdown-minutes');
      const countSeconds = document.querySelector('.countdown-seconds');

      //SELECT ELEMENTS Two
      // const countDaysTwo = document.querySelector('.countdown-days-two');
      // const countHoursTwo = document.querySelector('.countdown-hours-two');
      // const countMinutesTwo = document.querySelector('.countdown-minutes-two');
      // const countSecondsTwo = document.querySelector('.countdown-seconds-two');

      //SELECT ELEMENTS Three
      const countDaysThree = document.querySelector('.countdown-days-three');
      const countHoursThree = document.querySelector('.countdown-hours-three');
      const countMinutesThree = document.querySelector(
        '.countdown-minutes-three'
      );
      const countSecondsThree = document.querySelector(
        '.countdown-seconds-three'
      );

      //SELECT ELEMENTS Four
      const countDaysFour = document.querySelector('.countdown-days-four');
      const countHoursFour = document.querySelector('.countdown-hours-four');
      const countMinutesFour = document.querySelector(
        '.countdown-minutes-four'
      );
      const countSecondsFour = document.querySelector(
        '.countdown-seconds-four'
      );

      //SETUP ADDZERO FUNCTION
      function addZero(n) {
        return n < 10 ? '0' + n : n;
      }

      //RESULT
      countDays.textContent = addZero(days);
      countHours.textContent = addZero(hours);
      countMinutes.textContent = addZero(minutes);
      countSeconds.textContent = addZero(secondes);
      //RESULT Two
      // countDaysTwo.textContent = addZero(days);
      // countHoursTwo.textContent = addZero(hours);
      // countMinutesTwo.textContent = addZero(minutes);
      // countSecondsTwo.textContent = addZero(secondes);

      //RESULT Three
      countDaysThree.textContent = addZero(days);
      countHoursThree.textContent = addZero(hours);
      countMinutesThree.textContent = addZero(minutes);
      countSecondsThree.textContent = addZero(secondes);

      //RESULT Four
      countDaysFour.textContent = addZero(days);
      countHoursFour.textContent = addZero(hours);
      countMinutesFour.textContent = addZero(minutes);
      countSecondsFour.textContent = addZero(secondes);
    } else {
      clearInterval(calcTime);
    }
  }
}

//SET THE END DATE
countdown('2020/12/20 00:00:00');

// ========================== Count two
function countdownTwo(endDate) {
  //SET VARIABLES
  let days, hours, minutes, secondes;

  //DATE
  endDate = new Date(endDate).getTime();

  //RUN CALCTIME FUNCTION EACH SECOND
  setInterval(calcTime, 1000);

  //SETUP CALCTIME FUNCTION
  function calcTime() {
    //TODAY [ CURRENT DATE ]
    let today = new Date().getTime();

    //TIME REMAINING BETWEEN THE CURRENT DATE AND END DATE.
    let timeRemaining = parseInt((endDate - today) / 1000);

    if (timeRemaining >= 0) {
      //GET DAYS [ DAY = 86400 SECONDS ]
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      //GET HOURS [ HOUR = 3600 SECONDS ]
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      //GET MINUTES [ MIN = 60 SECONDS  ]
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      //GET SECONDS
      secondes = parseInt(timeRemaining);

      //SELECT ELEMENTS Two
      const countDaysTwo = document.querySelector('.countdown-days-two');
      const countHoursTwo = document.querySelector('.countdown-hours-two');
      const countMinutesTwo = document.querySelector('.countdown-minutes-two');
      const countSecondsTwo = document.querySelector('.countdown-seconds-two');

      //SETUP ADDZERO FUNCTION
      function addZero(n) {
        return n < 10 ? '0' + n : n;
      }

      //RESULT Two
      countDaysTwo.textContent = addZero(days);
      countHoursTwo.textContent = addZero(hours);
      countMinutesTwo.textContent = addZero(minutes);
      countSecondsTwo.textContent = addZero(secondes);
    } else {
      clearInterval(calcTime);
    }
  }
}

//SET THE END DATE
countdownTwo('2020/08/10 00:00:00');
