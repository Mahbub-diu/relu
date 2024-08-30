(function ($) {
  $(document).ready(function () {
    // code goes here
    var swiper = new Swiper('.home-slider', {
      effect: 'fade',
      speed: 2000,

      // autoplay: {
      //   delay: 5000,
      // },
      // autoplay: true,

      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    $('.swiper-video').on('loadeddata', function () {
      var duration = this.duration;

      var autoplayDelay = Math.round(duration * 1000);

      $(this)
        .closest('.video-slide')
        .attr('data-swiper-autoplay', autoplayDelay);

      console.log('Video Duration: ' + duration + ' seconds');
    });

    var swiper = new Swiper('.service-slider', {
      effect: 'fade',
      speed: 2000,

      autoplay: {
        delay: 5000,
      },
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
    $(window).scroll(function () {
      var navbar = $('#main-header');

      if ($(window).scrollTop() >= 110) {
        navbar.addClass('sticky');
      } else {
        navbar.removeClass('sticky');
      }
    });

    // mobile menu show hide start
    $('.main-header .header-bar').click(function () {
      $(this).toggleClass('active');
      $('#targetElement').toggleClass('sidebar-hide');
    });

    // $('.sidebar-area .header-bar').click(function () {
    //   $('.main-header .header-bar').removeClass('active');

    //   $('#targetElement').addClass('sidebar-hide');
    // });
    // sidebar slideup and down

    var $ul = $('.mobile-menu-items > ul');

    $ul.find('li > a').click(function (e) {
      if (!$(this).closest('li').hasClass('selected--last')) {
        e.preventDefault();
      }

      var $li = $(this).closest('li');

      if ($li.find('ul').length > 0) {
        if ($li.hasClass('selected')) {
          $li.removeClass('selected').find('li').removeClass('selected');
          $li.find('ul').slideUp(400);
          $li.find('a i').removeClass('mdi-flip-v');
        } else {
          if ($li.parents('li.selected').length == 0) {
            $ul.find('li').removeClass('selected');
            $ul.find('ul').slideUp(400);
            $ul.find('li a i').removeClass('mdi-flip-v');
          } else {
            $li.parent().find('li').removeClass('selected');
            $li.parent().find('> li ul').slideUp(400);
            $li.parent().find('> li a i').removeClass('mdi-flip-v');
          }

          $li.addClass('selected');
          $li.find('>ul').slideDown(400);
          $li.find('>a>i').addClass('mdi-flip-v');
        }
      }
    });

    $('.mobile-menu-items > ul ul').each(function (i) {
      if ($(this).find('>li>ul').length > 0) {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 2;

        $(this).find('>li>a').css('padding-left', result);
      } else {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 2;

        $(this)
          .find('>li>a')
          .css('padding-left', result)
          .parent()
          .addClass('selected--last');
      }
    });

    var activeLi = $('li.selected');
    if (activeLi.length) {
      opener(activeLi);
    }

    function opener(li) {
      var ul = li.closest('ul');
      if (ul.length) {
        li.addClass('selected');
        ul.addClass('open');
        li.find('>a>i').addClass('mdi-flip-v');

        if (ul.closest('li').length) {
          opener(ul.closest('li'));
        } else {
          return false;
        }
      }
    }
    // sidebar slideup and down

    // Initialize Swiper
    var swiper = new Swiper('.partner-slider', {
      on: {
        init: function () {
          setSlideWidths();
        },
        slideChange: function () {
          setSlideWidths();
        },
        resize: function () {
          setSlideWidths();
        },
      },
    });

    function setSlideWidths() {
      if (window.innerWidth >= 992) {
        var slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(function (slide) {
          var element = slide.querySelector('.element');
          if (element) {
            slide.style.width = element.offsetWidth + 'px';
            slide.style.marginRight = 50 + 'px';
          }
        });
      } else {
        // Reset slide widths and margins for smaller viewports
        var slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(function (slide) {
          slide.style.width = '';
          slide.style.marginRight = '';
        });
      }
    }

    // Initial call to set widths on page load
    setSlideWidths();

    // Listen for window resize events
    window.addEventListener('resize', setSlideWidths);

    var swiper = new Swiper('.partner-slider', {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      spaceBetween: 50,
      autoplay: false,
      speed: 5000,
      pagination: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        414: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
  });
})(jQuery);
