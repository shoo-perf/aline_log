$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 565,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       }
    ]
  });
});

$(document).ready(function () {
  var element = $(".text_anim");
  $counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = element.offset().top;

    if (scroll > offset && $counter == 0) {
      element.removeClass("hidden");
      element.addClass("animate_text");
    }
  });
});

$(document).ready(function () {
  var advantages_element = $(".advantages_anim");
  $counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = advantages_element.offset().top;

    if (scroll > offset) {
      advantages_element.removeClass("advantages_hidden");
      advantages_element.addClass("animate_adveantages");
    }
  });
});

$(document).ready(function () {
  var transport_types_element = $(".transport--types--text");
  $counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = transport_types_element.offset().top;

    if (scroll > offset) {
      transport_types_element.removeClass("hidden");
      transport_types_element.addClass("animate_transport--types");
    }
  });
});

$(document).ready(function () {
  var text_header_element = $(".text--header");
  $counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = text_header_element.offset().top;

    if (scroll > offset) {
      text_header_element.removeClass("hidden");
      text_header_element.addClass("animate_text--header");
    }
  });
});
