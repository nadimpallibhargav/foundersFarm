if ($(".association-slider").length) {
  var $newslider = $(".association-slider")
    .on("init", function (slick) {
      $(".association-slider").fadeIn(1000);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: "ondemand",
      autoplaySpeed: 3500,
      pauseOnHover: false,
      arrows: false,
    });
}
