$(window).on("load", function(){
    let url = "https://www.shredsf.com/new-blog/?format=json";
      $.ajax({
        type:     "GET",
        url:      url,
        dataType: "jsonp",
        success: function(data){
            let posts = data.items;
            for (let i = 0; i < posts.length; i++){
                $("blog").append(`<div><p>`+ new Date(posts[i].publishOn) +`</p></div>`)
                $("blog").append(posts[i].promotedBlock)
                $("blog").append(posts[i].body)
            }
            $('.image-block-wrapper').each(function () {
                $(this).css("padding-bottom", "0");
            });
            $('img').each(function () {
                $(this).attr('src', $(this).attr("data-src"));
                $(this).css("width", "100%")
            });
            $('.embed-block-wrapper').each(function () {
                $(this).remove()
            });
        }
      });
})

$("#hamburger, #mobileNav a").click(function(){
    if($("#mobileNav").is(":hidden")){
        $("#mobileNav").fadeIn(200).css("display", "flex");
        $("#mobileNav").addClass("active");
    } else {
        $("#mobileNav").fadeOut(200)
        $("#mobileNav").removeClass("active");
    }
    if ($("#mobileNav").hasClass("active")){
        $('.bar').css('background-color', '#fff');
        $('#mobileNav a').css('color', '#fff');
    } else {
        $('.bar').css('background-color', '#012d5e');
        }
})


$(window).resize(function(){
    if ($(this).width() > 1024) {
        $("#mobileNav").css("display", "none")
        $('.bar').css('background-color', '#012d5e');
        $("#mobileNav").removeClass("active");
    }
})