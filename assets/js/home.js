$(document).ready(function()
{  
    
    $("body").click(function(event)
    {
        if($(window).width() < 769)
        {
                event.stopPropagation();
                $("#menu").slideUp();
                $("#hamburger-nav").removeClass("ham-nav-clicked");
        }
    });

    $(window).resize(function() {
        if($(window).width() >= 769)
        {
            $("#menu").show();
        }  
    });
     

    $("#hamburger-nav").click(function(event)
    {
        event.stopPropagation();
        toggleToolbar();
    });

    
});

function toggleToolbar()
{
    $("#menu").slideToggle();
    $("#hamburger-nav").toggleClass("ham-nav-clicked");
}