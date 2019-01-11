$(document).ready(function()
{
    getPhotosFromFolder();
});

function getPhotosFromFolder()
{
    $.get("assets/php/gallery.php", 
    {}, 
    function(result)
    {
        var galleryContainer = $("#gallery-container");

        var jpgArray = result.array;

        for (var i = 0; i < jpgArray.length; i++)
        {
            var img = $("<img class='gallery-preview' src='assets/img/photos/" + jpgArray[i] + "'>");
            galleryContainer.append(img);
        }

    });
}