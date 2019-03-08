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
        $('#mobileNav a').css('color', '#fff');
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
        $("#mobileNav").css("display", "none")
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

$(document).ready(function(){
    $("#work img").click(function(){
        $("#projectLeft img").attr("src", this.src)
        info(this)
        $("#projectThumb img").click(function(){
            $("#projectLeft img").attr("src", this.src)
            $("html, body").stop().animate({scrollTop: $("nav").height()-($(this).scrollTop() / 2) + "px"}, 500, "swing");
            findHeight()
        });
    });
    //close animation
    $("#close h2").click(function(){
        $("#project").fadeOut(500);
        $("#work").animate({marginTop: "0px"}, 1000);
    });
});

//scroll speed
// $(window).scroll(function () {
//     $('#project').css({
//         'top': $("nav").height()-($(this).scrollTop() / 2) + "px"
//     });
// });

//get info on what image clicked then set
function info(funkName){
    $("#projectThumb").empty()
    $("#projectTitle h3").empty()
    $("#projectType p").empty()
    $("#projectDescription p").empty()
    switch (funkName.id) {
        case "5X5_THUMBNAIL_100_RUBYRED":
        $("#projectTitle h3").text("OCEAN SPRAY 100% JUICE");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#projectDeliverable p").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / PHOTOGRAPHY ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./work/oceanSprayJuice/OSJ1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./work/oceanSprayJuice/OSJ2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./work/oceanSprayJuice/OSJ3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./work/oceanSprayJuice/OSJ4.jpg"/></div>`)
        break;
    }
    // wait for images to load before finding height
    $(function() {
        function imageLoaded() {
           counter--; 
           if( counter === 0 ) {
               findHeight()
           }
        }
        let images = $("img");
        let counter = images.length;
        images.each(function() {
            if( this.complete ) {
                imageLoaded.call( this );
            } else {
                $(this).one('load', imageLoaded);
            }
        });
    });
};

// find height after images load
function findHeight(){
    let project = $("#project").height();
    let nav = $("nav").height();
    let projectHeight = project + nav; 
    setHeight(projectHeight)
}

// set margin top of #work
function setHeight(projectHeight){
    let VH = $(window).height();
        if (projectHeight < VH){
            $("#work").animate({marginTop: VH + "px"}, 1000);
        } else if (projectHeight > VH) {
            $("#work").animate({marginTop: projectHeight + "px"}, 1000);
        };
    animate();
};

//animations
function animate(){
    $("html, body").stop().animate({
        scrollTop: $("#landingSlides").outerHeight() + 5 + "px"}, 500, "swing");
    $("#project").css("position", "absolute").fadeIn(1000).css("display", "flex");
    $("#mobileNav").fadeOut();
}
