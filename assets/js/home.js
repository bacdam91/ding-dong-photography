$(document).ready(function()
{  
    $(".nav-able").click(function(event)
    {
        var target = $(this).attr("href");
        var pos = $(target).offset();
        $("html, body").stop().animate({
            scrollTop : pos.top - 50
        }, 700);

        $("#menu-nav").attr("checked", false);

        event.preventDefault();
    });   
});