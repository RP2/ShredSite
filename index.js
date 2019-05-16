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
  $("#land1").on("click", function(e){
      if ($(window).width() > 800){
        let video = $("#cran");
        if(video[0].muted){
            video[0].muted = false;
        }
        else{
            video[0].muted = true;
        }
      }
  });
  $("video").on("click", function(){
    let video = $(this);
      if(video[0].muted){
        let getVids = $(".secretContain video")
        for (let eachVid of getVids) {
            eachVid.muted = true;
        }
          video[0].muted = false;
          video[0].currentTime = 0;
      }
      else{
          video[0].muted = true;
      }
  });

//blue and white
$(document).ready(function() {
    navColor();
    $("#work img").click(function(){
        if ($("#project").css("display", "flex")){
            $("#project").css("display", "none");
        }
        $("#projectLeft img").attr("src", this.src)
        $("#loading").css("display", "flex")
        $("#work").stop().animate({marginTop: $("#loading").height() + "px"}, 250);
        info(this)
        $("#projectThumb img").click(function(){
            $("#projectLeft img").attr("src", this.src)
            $("html, body").stop().animate({scrollTop: $("nav").height()-($(this).scrollTop() / 2) + "px"}, 500, "swing");
            findHeight()
        });
    });
    //close animation
    $("#close h2").click(function(){
        $("modal").fadeOut(200)
        $("#project").fadeOut(500);
        $("#work").animate({marginTop: "0px"}, 1000);
    });

    let banner = $(".mobileBan");
    let bannerVideo = $(".mobileVid");

    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
        $(banner).css("background-image", "url(" + bannerVideo[0].poster + ")");
        $(banner).css("background-size", "cover");
        $(banner).css("background-position", "center");
        $(bannerVideo).css("display", "none")= 'none';
    }
});

$(window).scroll(function() {
    if ($(window).width() > 800){
        let video = $("#cran");
        if ($(window).scrollTop() > $("#land1").outerHeight()){
            video[0].muted = true;
            video[0].pause();
            $("nav").css("z-index", 0)
        } else {
            $("nav").css("z-index", 1)
            video[0].play();
        }
        navColor();
    }
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
            $('.navButton').css('color', '#012d5e');
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
            $('#contactBtn').css('color', '#012d5e');
        } else {
            $('#contactBtn').css('color', '#fff');
        }
        if (Array.prototype.some.call($('.whiteBG'), function(contactE) {
            contactTop = $(contactE).offset().top - 130;
            contactBottom = $(contactE).outerHeight() + contactTop - 40;
            if (scrollPosition > contactTop && scrollPosition < contactBottom) {
                return true;
            } else {
                return false;
            }
        })) {
                $('#blogBtn').css('color', '#012d5e');
            } else {
                $('#blogBtn').css('color', '#fff');
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
                $('.bar').css('background-color', '#012d5e');
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
   $("modal").fadeIn(200).css("display", "grid")
})

// $("#close h2").click(function(){
    
// })


//scroll speed
// $(window).scroll(function () {
//     $('#project').css({
//         'top': $("nav").height()-($(this).scrollTop() / 2) + "px"
//     });
// });

//get info on what image clicked then set
function info(funkName){
    $("#projectThumb").empty();
    $("#projectTitle h3").empty();
    $("#projectClient p").empty();
    $("#short").empty();
    $("#long").empty();
    switch (funkName.id) {
        case "5X5_THUMBNAIL_100_RUBYRED":
        $("#projectTitle h3").text("OCEAN SPRAY 100% JUICE");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / PHOTOGRAPHY ART DIRECTION / GRAPHIC STANDARDS");
        $("#long").text("Objectives: Redesign of Ocean Spray’s 100% Juice Line. Reposition line as a more premium offering in a bid to take market share competing shelf stable, chilled, and refrigerated juices.Scope: 30 SKUs from concept through delivery of final mechanical files. ")
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/oceanSprayJuice/OSJ1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/oceanSprayJuice/OSJ2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/oceanSprayJuice/OSJ3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/oceanSprayJuice/OSJ4.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_CC_ESPRESSO":
        $("#projectTitle h3").text("COMMUNITY COFFEE ESPRESSO CAPSULES");
        $("#projectClient p").text("Community Coffee Company, LLC");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/communityFounder/CF1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/communityFounder/CF2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/communityFounder/CF3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/communityFounder/CF4.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/communityFounder/ShredSF_CC_Espresso.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_CC_Porch":
        $("#projectTitle h3").text("PORCH BREEZE");
        $("#projectClient p").text("Community Coffee Company, LLC");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/comPorchBreeze/CPB1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/comPorchBreeze/CPB2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/comPorchBreeze/CPB3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/comPorchBreeze/CPB4.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_CLUSTERS":
        $("#projectTitle h3").text("CRAISINS FRUIT CLUSTERS");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / PHOTOGRAPHY ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/OSCluster/cluster1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/OSCluster/cluster2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_COLD_BREW_KIT":
        $("#projectTitle h3").text("COMMUNITY COFFEE COLD BREW COFFEE KIT");
        $("#projectClient p").text("Community Coffee Company, LLC");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/coldBrew/cold1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/coldBrew/cold2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_CRAISINS":
        $("#projectTitle h3").text("OCEAN SPRAY CRAISINS");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / PHOTOGRAPHY ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/craisins/craisins1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/craisins/craisins2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/craisins/craisins3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/craisins/craisins4.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Cheetos_Thumb":
        $("#projectTitle h3").text("CHEETOS FLAMIN' HOT DORITOS DINAMITA");
        $("#projectClient p").text("Frito-Lay, North America Inc.");
        $("#short").text("PRODUCTION STRATEGY / BRAND ARCHITECTURE / PACKAGING SYSTEM / DIGITAL ILLUSTRATION ART DIRECTION");
        break;
        case "5X5_THUMBNAIL_Concept_pure_GREEN":
        $("#projectTitle h3").text("Dentyne Pure");
        $("#projectClient p").text("Dentyne");
        $("#short").text("Gum package concept");
        break;
        case "5X5_THUMBNAIL_DINAMITA_GREEN":
        $("#projectTitle h3").text("DORITOS DINAMITA");
        $("#projectClient p").text("Frito-Lay, North America Inc.");
        $("#short").text("PRODUCTION STRATEGY / LINE EXTENSION / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION ART DIRECTION");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/thumbnail/5X5_THUMBNAIL_DINAMITA_Purple.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/dinamita/dinamita1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/dinamita/dinamita2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/dinamita/dinamita3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/dinamita/dinamita4.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Doritos_Loaded":
        $("#projectTitle h3").text("DORITOS LOADED");
        $("#projectClient p").text("Frito-Lay, North America Inc.");
        $("#short").text("PRODUCTION STRATEGY / LINE EXTENSION / BRAND ARCHITECTURE / PACKAGING SYSTEM / PHOTO ART DIRECTION");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/loaded/loaded1.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Farmers_Thumb":
        $("#projectTitle h3").text("OCEAN SPRAY FARMERS LOGO");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#short").text("LOGOMARK / PACKAGING SYSTEM / VISUAL LANGUAGE / GRAPHIC STANDARDS");
        break;
        case "5X5_THUMBNAIL_Friendlys_Duo":
        $("#projectTitle h3").text("FRIENDLY'S DESSERT CUPS");
        $("#projectClient p").text("Friendly’s");
        $("#short").text("PACKAGING SYSTEM / ILLUSTRATION / BRAND ARCHITECTURE");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/friendlys/friend1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/friendlys/friend2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_GNC_Earth_Genius":
        $("#projectTitle h3").text("GNC EARTH GENIUS");
        $("#projectClient p").text("GNC");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ART DIRECTION IN COLLABORATION WITH GNC");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/earthGenius/genius.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Greg_Loiacono_2":
        $("#projectTitle h3").text("GREG LOIACONO");
        $("#projectClient p").text("Greg Loiacono");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / PACKAGING SYSTEM / ILLUSTRATION / PRODUCTION STRATEGY");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/loiacono/loia1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/loiacono/loia2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/loiacono/loia3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Indulgences":
        $("#projectTitle h3").text("SMARTFOOD INDULGENCES");
        $("#projectClient p").text("Smartfood, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM /  ILLUSTRATION / ART DIRECTION");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/indulgences/indulge1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/indulgences/indulge2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_KOOBA":
        $("#projectTitle h3").text("KOOBA TARGET GAME");
        $("#projectClient p").text("InPlay");
        $("#short").text("VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/kooba/kooba1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/kooba/kooba2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/kooba/kooba3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Krusteaz":
        $("#projectTitle h3").text("KRUSTEAZ");
        $("#projectClient p").text("Continental Mills, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / PHOTOGRAPHY ART DIRECTION / ILLUSTRATION ART DIRECTION");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/krusteaz/krust1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/krusteaz/krust2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/krusteaz/krust3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_LAYERS":
        $("#projectTitle h3").text("TRIDENT LAYERS");
        $("#projectClient p").text("Kraft Foods");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/layers/layer1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/layers/layer2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/layers/layer3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_LINDSAYPEPPERS":
        $("#projectTitle h3").text("LINDSAY PEPPERS");
        $("#projectClient p").text("Bell-Carter Foods, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/lindsay/lindsay1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/lindsay/lindsay2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_LINDSAY_OIL":
        $("#projectTitle h3").text("LINDSAY NATURALS");
        $("#projectClient p").text("Bell-Carter Foods, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/lindsayOil/oil1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/lindsayOil/oil2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Lindsay_Almond_Butter":
        $("#projectTitle h3").text("LINDSAY ALMOND BUTTER");
        $("#projectClient p").text("Bell-Carter Foods, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / LINE EXTENSION / PACKAGING SYSTEM / ILLUSTRATION ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/lindsayAlmonds/butter1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/lindsayAlmonds/butter2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/lindsayAlmonds/butter3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Lindsay_Infusions":
        $("#projectTitle h3").text("LINDSAY INFUSIONS");
        $("#projectClient p").text("Bell-Carter Foods, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / LINE EXTENSION / PACKAGING SYSTEM / ILLUSTRATION ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/infusions/infuse1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/infusions/infuse2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/infusions/infuse3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Lindsay_Olive_Oil":
        $("#projectTitle h3").text("LINDSAY OLIVE OIL");
        $("#projectClient p").text("Bell-Carter Foods, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / LINE EXTENSION / PACKAGING SYSTEM");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/oliveoil/oliveoil1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/oliveoil/oliveoil2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_NEXXUS":
        $("#projectTitle h3").text("NEXXUS STYLE GUIDE");
        $("#projectClient p").text("Unilever North America");
        $("#short").text("VISUAL LANGUAGE / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/nexxus/nex1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/nexxus/nex2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/nexxus/nex3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_NRC_CHAMPION_New":
        $("#projectTitle h3").text("CHAMPION");
        $("#projectClient p").text("National Raisin Company");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / PACKAGING SYSTEM / BRAND ARCHITECTURE / ILLUSTRATION / PRODUCTION STRATEGY");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/champion/champ1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/champion/champ2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/champion/champ3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/champion/champ4.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_NRC_RAISELS_2":
        $("#projectTitle h3").text("RAISELS");
        $("#projectClient p").text("National Raisin Company");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / PACKAGING SYSTEM / BRAND ARCHITECTURE / PRODUCTION STRATEGY");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/raisels/rais1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/raisels/rais2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/raisels/rais3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/raisels/rais4.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/raisels/rais5.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_OS_Cran_Amazing_Orange":
        $("#projectTitle h3").text("OCEAN SPRAY CRAN AMAZING");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/cranAmaze/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/cranAmaze/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/cranAmaze/3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/cranAmaze/4.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_OS_Cran_America":
        $("#projectTitle h3").text("OCEAN SPRAY CRAN AMERICA");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#short").text("VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/cranAmerica/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/cranAmerica/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/cranAmerica/3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/cranAmerica/4.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_OS_Organic":
        $("#projectTitle h3").text("100% ORGANIC & PURE");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / PHOTOGRAPHY ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/osPure/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/osPure/2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_POM":
        $("#projectTitle h3").text("TRIDENT VITALITY");
        $("#projectClient p").text("Kraft Foods");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/vitality/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/vitality/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/vitality/3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/vitality/4.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/vitality/5.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/vitality/6.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_POPS":
        $("#projectTitle h3").text("LAY'S AIR POPS");
        $("#projectClient p").text("Frito-Lay, North America Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ART DIRECTION");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/airpop/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/airpop/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/airpop/3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_REDBAG":
        $("#projectTitle h3").text("COMMUNITY COFFEE");
        $("#projectClient p").text("Community Coffee Company, LLC");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/community/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/community/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/community/3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/community/4.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/community/5.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/community/6.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_SMURFS":
        $("#projectTitle h3").text("SUAVE KIDS SMURFS");
        $("#projectClient p").text("Unilever North America");
        $("#short").text("VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION DEVELOPMENT / ART DIRECTION");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/smurfs/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/smurfs/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/smurfs/3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/smurfs/4.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/smurfs/5.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_SPARKLING":
        $("#projectTitle h3").text("OCEAN SPRAY SPARKLING");
        $("#projectClient p").text("Ocean Spray Cranberries, Inc.");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION ART DIRECTION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/sparkle/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/sparkle/2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_SUAVEKIDS":
        $("#projectTitle h3").text("SUAVE KIDS HAIR CARE");
        $("#projectClient p").text("Unilever North America");
        $("#short").text("VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION DEVELOPMENT / ART DIRECTION ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/suavekids/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/suavekids/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/suavekids/3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_SUAVE_DEO":
        $("#projectTitle h3").text("SUAVE DEODORANT");
        $("#projectClient p").text("Unilever North America");
        $("#short").text("VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION DEVELOPMENT / ART DIRECTION ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/deodorant/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/deodorant/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/deodorant/3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Suave_Bodywash_Lotion":
        $("#projectTitle h3").text("SUAVE BODY WASH");
        $("#projectClient p").text("Unilever North America");
        $("#short").text("VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / ILLUSTRATION / GRAPHIC STANDARDS");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/bodywash/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/bodywash/2.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Suavemen":
        $("#projectTitle h3").text("SUAVE MEN HERITAGE EDITION");
        $("#projectClient p").text("Unilever");
        $("#short").text("U.S PRODUCT ROLL-OUT / ARCHITECTURE / PRODUCTION STRATEGY / LINE EXTENSION ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/suavemen/1.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_Top_N_Go":
        $("#projectTitle h3").text("FRITO LAY TOP N GO");
        $("#projectClient p").text("Frito Lay North America, Inc");
        $("#short").text("IDENTITY / VISUAL LANGUAGE / BRAND ARCHITECTURE / PACKAGING SYSTEM / PHOTOGRAPHY ART DIRECTION ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/topngo/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/topngo/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/topngo/3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_VALERIE":
        $("#projectTitle h3").text("");
        $("#projectClient p").text("");
        $("#short").text("");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/valerie/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/valerie/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/valerie/3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/valerie/4.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/valerie/5.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/valerie/6.jpg"/></div>`)
        break;
        case "5X5_hair":
        $("#projectTitle h3").text("SUAVE HAIR INNOVATIONS");
        $("#projectClient p").text("Unilever North America");
        $("#short").text("VISUAL LANGUAGE / SALES COLLATERAL / PRINT STRATEGY ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/hair/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/hair/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/hair/3.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/hair/4.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_LIPTON":
        $("#projectTitle h3").text("LIPTON ICED TEA");
        $("#projectClient p").text("Lipton North America");
        $("#short").text("VISUAL LANGUAGE / SALES COLLATERAL / PRINT STRATEGY ");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/lipton/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/lipton/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/lipton/3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_ORBIT_BABY":
        $("#projectTitle h3").text("FOOTMUFF ORBIT BABY");
        $("#projectClient p").text("Ergobaby");
        $("#short").text("VISUAL LANGUAGE / PACKAGING SYSTEM / BRAND ARCHITECTURE / ILLUSTRATION / PRODUCTION STRATEGY");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/orbit/1.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/orbit/2.jpg"/></div>`)
        .append(`<div class="thumbs"><img src="./images/projects/orbit/3.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_SOUR_PATCH":
        $("#projectTitle h3").text("SOUR PATCH ZOMBIE KIDS");
        $("#projectClient p").text("Mars Men");
        $("#short").text("VISUAL LANGUAGE / PACKAGING SYSTEM / BRAND ARCHITECTURE / ILLUSTRATION / PRODUCTION STRATEGY");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/sourPatch/1.jpg"/></div>`)
        break;
        case "5X5_THUMBNAIL_WEETABIX":
        $("#projectTitle h3").text("WEETABIX");
        $("#projectClient p").text("Weetabix Limited");
        $("#short").text("VISUAL LANGUAGE / PACKAGING SYSTEM / BRAND ARCHITECTURE / ILLUSTRATION / PRODUCTION STRATEGY");
        $("#projectThumb")
        .append(`<div class="thumbs"><img src="./images/projects/weetabix/1.jpg"/></div>`)
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
            $("#work").stop().animate({marginTop: VH + "px"}, 1000);
        } else if (projectHeight > VH) {
            $("#work").stop().animate({marginTop: projectHeight + "px"}, 1000);
        };
    animate();
};

//animations
function animate(){
    $("html, body").stop().animate({
        scrollTop: $("#landingSlides").outerHeight() + 5 + "px"}, 1000, "swing");
    $("#project").stop().css("position", "absolute").fadeIn(1000).css("display", "flex");
    $("#loading").css("display", "none")
    $("#mobileNav").stop().fadeOut();
    if ($("#project").css("display") == "flex"){
        $(window).resize(function(){
            let projectHeight = $("nav").height() + $("#project").height(); 
            let VH = $(window).height();
            if (projectHeight > VH) {
                $("#work").stop().animate({marginTop: projectHeight + "px"}, 500);
            };
        })
    }
}
