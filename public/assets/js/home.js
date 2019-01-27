$(document).ready(function()
{  
    var galleryItemsPos = getPosOfGalleryItems();
    var widthArray = getGalleryItemsWidth(galleryItemsPos);

    console.log("Initial Positions: " + galleryItemsPos);

    console.log(widthArray);
    //console.log($(".gallery").width());

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
 
        var requiredMargin = 10;

        // var currentPosLeft = $(this).position().left;

        // console.log("Current position of this item: " + currentPosLeft);
        
        var arrayIndex = $(this).index(".gallery-item");
        console.log("Index of this item: " + arrayIndex);

        var posToMoveTo = galleryItemsPos[arrayIndex] - requiredMargin;

        console.log(posToMoveTo);

        // var initialPosLeft = galleryItemsPos[arrayIndex];

        // console.log("Initial position of this item: " + initialPosLeft);

        // var offset = Math.abs(currentPosLeft - initialPosLeft);

        // console.log("The offset: " + offset);

        

        // var galleryPos = $(".gallery").position().left;

        // console.log("Position of gallery: " + galleryPos);

        // var distanceToMove = Math.abs(initialPosLeft - offset - requiredMargin + galleryPos);

        // $(".gallery").animate(
        //     {
        //         "left" : ("-=" + distanceToMove + "px")
        //     }
        // );

        $(".gallery").animate(
            {
                "left" : ("-" + posToMoveTo + "px")
            }, 500
        );

        event.stopPropagation();
        event.preventDefault();
    });

    $(".rewind-btn").click(function(event)
    {
        $(".gallery").animate({
            "left" : "-=400px"
        }, 400);
    });

    $(".forward-btn").click(function(event)
    {
        $(".gallery").animate({
            "left" : "+=400px"
        }, 400);
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