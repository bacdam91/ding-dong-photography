/*
	The following classes and functions allow users to implement 
	finer controls over the photo galleries created using the CSS classes in basic_ui.css.
*/

class BTDGallery
{
	constructor(wrapperID)
	{
		this.wrapperID = wrapperID;
		this.activateFirstItem();
		this.addLunchbox();
		this.slideshowInterval = "";
		this.pauseDuration = 5000;
	}

	/*
		This function activates the first item
		so that there is always one element showing
	*/
	activateFirstItem()
	{
		this.galleryItemArray = $("#" + this.wrapperID + " .btd-gallery-item");
		//Get the length of the array for iteration
		this.arrayLength = this.galleryItemArray.length;

		this.galleryItemArray.each(function(index)
		{
			if(index == 0)
			{
				$(this).addClass("btd-gallery-item-active");
			}
		});
	}

	/*
		This function adds bread crumbs navigation
		so that we can see and navigate between the photos
		It is generated based on the number of gallery-items set
	*/
	addLunchbox()
	{
		var lunchbox = $("#" + this.wrapperID + " .btd-lunchbox");
		lunchbox.css({
			"width" : this.arrayLength * 20
		});

		for (var i = 0; i < this.arrayLength; i++)
		{
			var id = this.wrapperID + "-lunchbox-" + i;
			var input = $('<input type="radio" name="'+ this.wrapperID + '" id="' + id + '" class="btd-display-none">');
			var label = $('<label for="' + id + '" class="btd-breadcrumbs"></label>');
	
			lunchbox.append(input);
			lunchbox.append(label);
		}
		
	}

	static addBreadcrumbListeners(galleryObj)
	{
		$(".btd-breadcrumbs").click(function(event)
		{
			//After 5 seconds the slideshow restarts
			setTimeout(galleryObj.pauseDuration, galleryObj.startSlideshow());
			
			var clickedIndex = $(this).index(".btd-breadcrumbs");
			clearInterval(galleryObj.slideshowInterval);
			
			galleryObj.galleryItemArray.each(function(index)
			{	
				$(this).removeClass("btd-gallery-item-active");
				if(index == clickedIndex)
				{
					$(this).addClass("btd-gallery-item-active");
				}
			});
		});
	}

	/*
		This function starts the slide show.
		The user can elect to put in a duration between transition.
		Otherwise it is default at 5 seconds (5000ms)
	*/
	startSlideshow()
	{
		var self = this;

		//Check the first radio button
		$("#" + this.wrapperID + " .btd-lunchbox input[type='radio']").eq(0).prop("checked", true);

		this.slideshowInterval = setInterval(function()
		{
			//Get index of the currently active item
			var activeIndex = $(".btd-gallery-item-active").index();

			//Get index of the next element to activate
			var indexToActivate = activeIndex + 1;
			/*
				If we come to the end of the array then circle back to the beginning
			*/
			if (indexToActivate == self.arrayLength)
			{
				indexToActivate = 0;
			}

			/*
				Remove the active class from the current item,
				and add the active class to the next item
			*/
			self.galleryItemArray.each(function(index)
			{
				if(index == activeIndex)
				{
					$(this).removeClass("btd-gallery-item-active");
					$("#" + self.wrapperID + " .btd-lunchbox input[type='radio']").eq(activeIndex).prop("checked", false);
				}
				
				if (index == indexToActivate)
				{
					$(this).addClass("btd-gallery-item-active");
					$("#" + self.wrapperID + " .btd-lunchbox input[type='radio']").eq(indexToActivate).prop("checked", true);
				}
				
			});

		}, this.pauseDuration);
	}	
}

