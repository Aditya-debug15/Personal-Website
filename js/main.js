$(document).ready(function(){
    $("#nav-home").on({
      mouseenter: function(){
        $(this).css("color", "red");
      },
      mouseleave: function(){
        $(this).css("color", "");
      }
    });
});
$(document).ready(function(){
    $("#nav-education").on({
      mouseenter: function(){
        $(this).css("color", "red");
      },
      mouseleave: function(){
        $(this).css("color", "");
      }
    });
});
$(document).ready(function(){
    $("#nav-skills").on({
      mouseenter: function(){
        $(this).css("color", "red");
      },
      mouseleave: function(){
        $(this).css("color", "");
      }
    });
});
$(document).ready(function(){
    $("#nav-contact").on({
      mouseenter: function(){
        $(this).css("color", "red");
      },
      mouseleave: function(){
        $(this).css("color", "");
      }
    });
});
$(document).ready(function(){
    $("#nav-gallery").on({
      mouseenter: function(){
        $(this).css("color", "red");
      },
      mouseleave: function(){
        $(this).css("color", "");
      }
    });
});
$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
})