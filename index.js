$(document).ready(function() {
    //animated scrolling
    //select all a with href containing # but not just "#"
    $('a[href*="#"]:not([href="#"])').click(function(e) {
        e.preventDefault();
        //section = #projects, #contact, etc.
        var section = $(this).attr("href");
        var navHeight = $("nav").height();
        //use scroll difference to calculate animation time
        var scrollDifference = Math.abs($(section).offset().top - navHeight - $(window).scrollTop());
        var animationTime = scrollDifference/$(document).height()*1000*1.5;
        //animation
        $("html, body").animate({
            scrollTop: $(section).offset().top - navHeight
        }, animationTime);
    });

    //textarea resizing with content
    $("#textinput").on('input', function(event) {
        $("#textinput").css("height", "1px");
        var scrollHeight = $("#textinput").prop("scrollHeight");
        var minHeight = 150;
        //if new line
        if (event.keyCode == 13) {
            scrollHeight += 30;
        }
        if (scrollHeight > minHeight) {
            $("#textinput").css("height", scrollHeight+5);
        } else {
            $("#textinput").css("height", minHeight);
        }
    });

    $("#copyright").append(" " + new Date().getFullYear());
});