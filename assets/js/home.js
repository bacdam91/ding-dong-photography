$(document).ready(function()
{  
    var galleryItemsPos = getPosOfGalleryItems();
    var widthArray = getGalleryItemsWidth(galleryItemsPos);

    console.log(galleryItemsPos);
    console.log(widthArray);
    console.log($(".gallery").width());

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

    $("body, html").click(function(event)
    {
        $(".gallery-item").removeClass("active-item");
    })

    $(".gallery-item").click(function(event)
    {

        $(".gallery-item").removeClass("active-item");
        $(this).addClass("active-item");
 
        console.log($(this).position());
        var arrayIndex = $(this).index(".gallery-item");

        var positionToMove = galleryItemsPos[arrayIndex] - 100;

        // $(".gallery").animate(
        // {
        //     "left" : positionToMove + "px"
        // }, 2000);

        event.stopPropagation();
        event.preventDefault();
    });
});

function getPosOfGalleryItems()
{
    var array = [];
    $(".gallery-item").each(function(index)
    {
        array.push($(this).position().left);
    });

    return array;
}

function getGalleryItemsWidth(posArray)
{
    var widthArray = [];

    for (var i = 0; i < posArray.length; i++)
    {
        var width = posArray[i + 1] - posArray[i];
        

        if (i == posArray.length - 1)
        {
            width = $(".gallery").width() - posArray[i];
        }

        widthArray.push(width);
    }

    return widthArray;
}