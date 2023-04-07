$(document).ready(function () {
  $(".menu").click(function (e) {
    $(this).toggleClass("active");
  });
});

$(document).ready(function () {
  $(".nav-mobile .icon-mobile").click(function (e) {
    $(".nav-mobile .list-menus").toggleClass("active");
    $(".bg-menu").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".bg-menu").click(function (e) {
    $(".menu").removeClass("active");
    $(this).removeClass("active");
    $(".nav-mobile .list-menus").removeClass("active");
  });
});

// scrool header
$(document).ready(function () {
  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (
      currentScroll > 0 &&
      currentScroll < $(document).height() - $(window).height()
    ) {
      if (currentScroll > previousScroll) {
        $(".header-main").addClass("hide");
      } else {
        $(".header-main").removeClass("hide");
      }
      previousScroll = currentScroll;
    }
  });
});
