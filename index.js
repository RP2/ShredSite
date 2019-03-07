// let landingIndex = 0;
// carousel();

// function carousel(){
//     let slides = document.getElementsByClassName("landingImages");
//     for (let i = 0; i < slides.length; i++){
//         // slides[i].style.display = "none";
//         $(slides[i]).fadeOut();
//     }
//     landingIndex++;
//     if (landingIndex > slides.length) {landingIndex = 1}
//     // slides[landingIndex-1].style.display = "block";
//     $(slides[landingIndex-1]).fadeIn();
//     setTimeout(carousel, 3000)
// }

// slide nav
$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
//black and white
$(document).ready(function() {
    navColor();
});
$(window).scroll(function() {
    navColor();
});
function navColor(){
    if (Array.prototype.some.call($('.whiteBG'), function(element) {
        scrollPosition = $(window).scrollTop();
        elementTop = $(element).offset().top - 20;
        elementBottom = $(element).outerHeight() + elementTop - 35;
        if (scrollPosition > elementTop && scrollPosition < elementBottom) {
            return true;
        } else {
            return false;
        }
    })) {
            $('.navButton').css('color', '#000');
        } else {
            $('.navButton').css('color', '#fff');
        }
    if (Array.prototype.some.call($('.beginWork'), function(workElement) {
        workTop = $(workElement).offset().top - 28;
        if (scrollPosition < workTop) {
            return true;
        } else {
            return false;
        }
    })) {
            $('.workBtn').text("Work").attr("href", "#work")
        } else {
            $('.workBtn').text("About").attr("href", "#about")
        }
    if (Array.prototype.some.call($('.whiteBG'), function(contactE) {
        contactTop = $(contactE).offset().top - 75;
        contactBottom = $(contactE).outerHeight() + contactTop - 40;
        if (scrollPosition > contactTop && scrollPosition < contactBottom) {
            return true;
        } else {
            return false;
        }
    })) {
            $('#contactBtn').css('color', '#000');
        } else {
            $('#contactBtn').css('color', '#fff');
        }
    if ($("#mobileNav").hasClass("active")){
        $('.bar').css('background-color', '#fff');
    } else {
        if (Array.prototype.some.call($('.whiteBG'), function(mobileE) {
            mobileTop = $(mobileE).offset().top - 20;
            mobileBottom = $(mobileE).outerHeight() + mobileTop - 45;
            if (scrollPosition > mobileTop && scrollPosition < mobileBottom) {
                return true;
            } else {
                return false;
            }
        })) {
                $('.bar').css('background-color', '#000');
            } else {
                $('.bar').css('background-color', '#fff');
            }
        }
    }

$("#dropdown").hover(function(){
    $(".dropBtn").fadeIn(200).css("display", "flex");
}, function(){
    $(".dropBtn").fadeOut(200);
})

$(window).resize(function(){
    if ($(this).width() > 1024) {
        $("#mobileNav").fadeOut(200)
    }
})

$("#hamburger, #mobileNav a").click(function(){
    if($("#mobileNav").is(":hidden")){
        $("#mobileNav").fadeIn(200).css("display", "flex");
        $("#mobileNav").addClass("active");
        navColor();
    } else {
        $("#mobileNav").fadeOut(200)
        $("#mobileNav").removeClass("active");
        navColor();
    }
})

$(".imageClickable").click(function(){
   let image = $(this).attr("src")
   $("modal img").attr("src", image);
   $("modal").fadeIn(200).css("display", "flex")
})

$(".close h2").click(function(){
    $("modal").fadeOut(200)
})