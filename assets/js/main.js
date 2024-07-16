(function ($) {
  $(document).ready(function () {
    // code goes here
    $('.filter-select-box select').niceSelect();
    $('.prodotti-shorting select').niceSelect();
    $('.catalogModal select').niceSelect();
    $('.catalogMobileModal select').niceSelect();
    // sidebar slideup and down

    var $ul = $('.mobile-menu-items > ul');

    $ul.find('li > a > i').click(function (e) {
      e.preventDefault();

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
        var result = pIntPLeft + 4;

        $(this).find('>li>a').css('padding-left', result);
      } else {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 4;

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

    // mobile menu show hide start
    $('.main-header .header-bar').click(function () {
      $(this).toggleClass('active');
      $('#targetElement').removeClass('sidebar-hide');
    });

    $('.sidebar-area .header-bar').click(function () {
      $('.main-header .header-bar').removeClass('active');

      $('#targetElement').addClass('sidebar-hide');
    });
    $('.sidebar-filtri-btn').click(function () {
      $('.left-sidebar .common-padding').addClass('show-filter');
    });
    $('.mobile-filter-close').click(function () {
      $('.left-sidebar .common-padding').removeClass('show-filter');
    });

    $('.toggle-category-megamenu').click(function () {
      if ($('.toggle-language-megamenu').hasClass('active')) {
        $('.toggle-language-megamenu').removeClass('active');
        $('.language-megamenu').slideUp('slow');
      }
      $(this).toggleClass('active');
      $('.categroi-megamenu').slideToggle('slow');
    });

    $('.toggle-language-megamenu').click(function () {
      if ($('.toggle-category-megamenu').hasClass('active')) {
        $('.toggle-category-megamenu').removeClass('active');
        $('.categroi-megamenu').slideUp('slow');
      }
      $(this).toggleClass('active');
      $('.language-megamenu').slideToggle('slow');
    });

    // mobile menu show hide end

    $('#header-search-input').focus(function () {
      $('.header-search-resulsbox').slideDown('slow');
    });

    $('#header-search-input').blur(function () {
      $('.header-search-resulsbox').slideUp('slow');
    });

    // homebanner custom select start

    $('.category-dropdown > ul > li > a').click(function (e) {
      e.preventDefault();

      $(this).toggleClass('open');
      $(this).parent().find('> ul').slideToggle('slow');

      $(this).find('.arrow').toggleClass('rotated');
    });

    $(document).click(function (e) {
      if (!$(e.target).closest('.category-dropdown').length) {
        $('.category-dropdown > ul > li > a.open').each(function () {
          $(this).removeClass('open');
          $(this).parent().find('> ul').slideUp('slow');
          $(this).find('.arrow').removeClass('rotated');
        });
      }
    });

    $('.category-dropdown').click(function (e) {
      e.stopPropagation();
    });
    // homebanner custom select ends

    // homebanner search start
    $('#bannerSearchInput').focus(function () {
      $('.banner-search-results').slideDown('slow');
    });

    $('#bannerSearchInput').blur(function () {
      $('.banner-search-results').slideUp('slow');
    });
    // homebanner search ends

    // consulti slider start
    var swiper = new Swiper('.home-consulta-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loop: true,
      autoplay: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerGroup: 1,
        },
        360: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerGroup: 1,
        },
        375: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerGroup: 1,
        },
        414: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerGroup: 1,
        },
        415: {
          slidesPerView: 1.1,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerGroup: 1,
        },
        576: {
          slidesPerView: 1.1,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerGroup: 1,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 4,
        },
      },
    });
    // consulti slider ends
    // mobile slider start
    var swiper = new Swiper('.mobile-slider-home', {
      slidesPerView: 2.5,

      grid: {
        rows: 2,
      },
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2.5,
        },
        360: {
          slidesPerView: 2.5,
        },
        375: {
          slidesPerView: 2.5,
        },
        414: {
          slidesPerView: 2.5,
        },
        415: {
          slidesPerView: 2.5,
        },
        576: {
          slidesPerView: 2.5,
        },

        768: {
          slidesPerView: 2.5,
        },

        992: {
          slidesPerView: 4.2,
        },
        1200: {
          slidesPerView: 5.3,
        },
      },
    });
    // mobile slider ends

    // product details slider start
    var swiper = new Swiper('.details-thumb-slider', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper('.details-display-slider', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: swiper,
      },
    });
    // product details slider ends

    // consulti slider start
    var swiper = new Swiper('.altri-product-slider', {
      slidesPerView: 4.9,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      // autoplay: true,
      // autoplay: {
      //   speed: 5000,
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2.2,
          slidesPerGroup: 2,
          spaceBetween: 10,
          centeredSlides: false,
        },
        360: {
          slidesPerView: 2.2,
          slidesPerGroup: 2,
          spaceBetween: 10,
          centeredSlides: false,
        },
        375: {
          slidesPerView: 2.2,
          slidesPerGroup: 2,
          spaceBetween: 10,
          centeredSlides: false,
        },
        414: {
          slidesPerView: 2.2,
          slidesPerGroup: 2,
          spaceBetween: 10,
          centeredSlides: false,
        },
        415: {
          slidesPerView: 2.2,
          slidesPerGroup: 2,
          spaceBetween: 10,
          centeredSlides: false,
        },
        576: {
          slidesPerView: 3.2,
          slidesPerGroup: 3,
          spaceBetween: 10,
          centeredSlides: false,
        },

        768: {
          slidesPerView: 4.2,
          slidesPerGroup: 4,
          spaceBetween: 10,
          centeredSlides: false,
        },

        992: {
          slidesPerView: 4.2,
          slidesPerGroup: 4,
          spaceBetween: 10,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 5.2,
          slidesPerGroup: 5,
          spaceBetween: 10,
          centeredSlides: false,
        },
        1300: {
          slidesPerView: 5.5,
          spaceBetween: 20,
        },
      },
    });
  });
})(jQuery);
