$(function() {
  var t = $("body");
  $(document).on("mouseover", ".student", function(t) {
    t.preventDefault(), $(this).siblings().removeClass("is-active"), $(this).addClass("is-active")
  }), $(document).on("click", ".js-list-show", function() {
    $(this).parent().find("article.hidden").fadeIn(300), $(this).hide()
  }), $(document).on("click", ".js-show", function(t) {
    t.preventDefault(), $(this).parent().find("p.hidden").fadeIn(300), $(this).hide()
  });
  var e = $(".js-sticker").height(),
    n = $(".footer").height(),
    i = $(".s-about").height();
  $(".js-sticker").sticky({
    topSpacing: 0,
    bottomSpacing: i + e + n + 450
  }), $(".js-sticker-about").sticky({
    topSpacing: 0,
    zIndex: -1

  }), $(document).on("click", ".js-scr", function(t) {
    t.preventDefault();
    var e = $(this).attr("href"),
      n = "#" === e ? 0 : $(e).offset().top + 100;
    $("html, body").stop().animate({
      scrollTop: n
    }, 700)
  });
  var o = {
    error: function(t) {
      var e = "warning";
      o.init(t, e)
    },
    success: function(t) {
      var e = "success";
      o.init(t, e)
    },
    init: function(e, n) {
      t.append('<div class="notice notice--' + n + '" style="opacity:0;"><div class="wrapper">' + e + "</div></div>");
      var i = $(".notice").height();
      return $(".notice").css("bottom", "-" + i + "px"), $(".notice").animate({
        bottom: 0,
        opacity: 1
      }, 300), o.close(3e3), !1
    },
    close: function(t) {
      function e() {
        $(".notice").animate({
          opacity: 0
        }, 500, function() {
          $(this).remove()
        }), $(".input").removeClass("error")
      }
      setTimeout(e, t)
    }
  }
});