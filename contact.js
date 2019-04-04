$(document).ready(function(){
    let index = 0;
    let people = $(".pepContain");
    carousel();
    function carousel(){
        for (let i = 0; i < people.length; i++){
            $(people[i]).fadeOut();
            $(people[i]).css("position", "absolute")
            $("#people").css("height", $(people[i]).height())
        }
        index++;
        if( index > people.length){
            index = 1;
        }
        $(people[index-1]).fadeIn();
        setTimeout(carousel, 2500);
    }
    $(window).resize(function(){
        $("#people").css("height", $(people).height())
    });
});