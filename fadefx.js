// hasLoaded is a boolean that makes sure that an element is
// animated if it is already visible before scrolling.
var hasLoaded = false;

$(document).ready(function() {
    
	// Are the elements already 
	if (hasLoaded == false)
	{
		// Check all elements in this one-time function
		fadefx_fadein_down_animate();
		fadefx_fadein_up_animate();
		fadefx_fadein_animate();
		fadefx_fadein_left_animate();
		fadefx_fadein_right_animate();
		
		// Set hasLoaded to true
		hasLoaded = true;
	}
	
    // Every time the window is scrolled ...
    $(window).scroll(function(){
		fadefx_fadein_down_animate();
		fadefx_fadein_up_animate();
		fadefx_fadein_animate();
		fadefx_fadein_left_animate();
		fadefx_fadein_right_animate();
    });
});

// Animate downwards
function fadefx_fadein_down_animate() {
	
	// Check the location of each desired element
    $('.fadefx-fadein-down').each(function(i){
            
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		// If the element is visible on the screen, start animating
		if(bottom_of_window > bottom_of_object) {
			
			if ($(this).attr("has-animated") === undefined)
			{
				var arrayOfCurrentElement = $(this).attr("class").split(/\s+/);
				var delayInMs = getDelayFromClassArray(arrayOfCurrentElement);
				var durationInMs = getDurationsFromClassArray(arrayOfCurrentElement);
				var currentHeight = getHeightFromClassArray(arrayOfCurrentElement);
				
				$(this).css('line-height', "-=" + currentHeight + "px");
				$(this).attr("has-animated", true);
				
				$(this).delay(delayInMs).animate({
					'line-height': '+=' + currentHeight + 'px',
					'opacity': '1'
				}, durationInMs, 'easeOutCubic');
			}
		}
	}); 
}

// Animate leftwards
function fadefx_fadein_left_animate() {
	
	// Check the location of each desired element
    $('.fadefx-fadein-left').each(function(i){
            
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		// If the element is visible on the screen, start animating
		if(bottom_of_window > bottom_of_object) {
			
			if ($(this).attr("has-animated") === undefined)
			{
				var arrayOfCurrentElement = $(this).attr("class").split(/\s+/);
				var delayInMs = getDelayFromClassArray(arrayOfCurrentElement);
				var durationInMs = getDurationsFromClassArray(arrayOfCurrentElement);
				var currentHeight = getHeightFromClassArray(arrayOfCurrentElement);
				
				$(this).css('padding-left', "-=" + currentHeight + "px");
				$(this).attr("has-animated", true);
				
				$(this).delay(delayInMs).animate({
					'padding-left': '+=' + currentHeight + 'px',
					'opacity': '1'
				}, durationInMs, 'easeOutCubic');
			}
		}
	}); 
}

// Animate rightwards
function fadefx_fadein_right_animate() {
	
	// Check the location of each desired element
    $('.fadefx-fadein-right').each(function(i){
            
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();
				
		// If the element is visible on the screen, start animating
		if(bottom_of_window > bottom_of_object) {
			
			if ($(this).attr("has-animated") === undefined)
			{
				var arrayOfCurrentElement = $(this).attr("class").split(/\s+/);
				var delayInMs = getDelayFromClassArray(arrayOfCurrentElement);
				var durationInMs = getDurationsFromClassArray(arrayOfCurrentElement);
				var currentHeight = getHeightFromClassArray(arrayOfCurrentElement);
				
				$(this).css('padding-right', "-=" + currentHeight + "px");
				$(this).attr("has-animated", true);
				
				$(this).delay(delayInMs).animate({
					'padding-right': '+=50px',
					'opacity': '1'
				}, durationInMs, 'easeOutCubic');
			}
		}
	}); 
}

// Animate fadein
function fadefx_fadein_animate() {
	
	// Check the location of each desired element
    $('.fadefx-fadein').each(function(i){
            
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		// If the element is visible on the screen, start animating
		if(bottom_of_window > bottom_of_object) {
			
			if ($(this).attr("has-animated") === undefined)
			{
				var arrayOfCurrentElement = $(this).attr("class").split(/\s+/);
				var delayInMs = getDelayFromClassArray(arrayOfCurrentElement);
				var durationInMs = getDurationsFromClassArray(arrayOfCurrentElement);
				
				$(this).attr("has-animated", true);
				
				$(this).delay(delayInMs).animate({
					'opacity': '1'
				}, durationInMs, 'easeOutCubic');
			}
		}
	}); 
}

// Animate upwards
function fadefx_fadein_up_animate() {
	
	// Check the location of each desired element
    $('.fadefx-fadein-up').each(function(i){
            
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		// If the element is visible on the screen, start animating
		if(bottom_of_window > bottom_of_object) {
			
			if ($(this).attr("has-animated") === undefined)
			{
				var arrayOfCurrentElement = $(this).attr("class").split(/\s+/);
				var delayInMs = getDelayFromClassArray(arrayOfCurrentElement);
				var durationInMs = getDurationsFromClassArray(arrayOfCurrentElement);
				var currentHeight = getHeightFromClassArray(arrayOfCurrentElement);
				
				$(this).css('padding-top', "+=" + currentHeight + "px");
				$(this).attr("has-animated", true);
				
				$(this).delay(delayInMs).animate({
					'padding-top': '-=' + currentHeight + 'px',
					'opacity': '1'
				}, durationInMs, 'easeOutCubic');
			}
		}
	}); 
}

// Delay is a class attribute in the form :[0-9]+ms
function getDelayFromClassArray(arrayOfClasses) {
	var lengthOfArray = arrayOfClasses.length;
	
	for (var index = 0; index < lengthOfArray; index++)
	{
		var currentString = arrayOfClasses[index];
		if (currentString.match(/^:\d+ms$/))
		{
			return parseInt(currentString.replace("ms", "").replace(":", ""));
		}
	}
	
	return 0;
}

// Duration is a class attribute in the form ::[0-9]+ms
function getDurationsFromClassArray(arrayOfClasses) {
	var lengthOfArray = arrayOfClasses.length;
	
	for (var index = 0; index < lengthOfArray; index++)
	{
		var currentString = arrayOfClasses[index];
		if (currentString.match(/^::\d+ms$/))
		{
			return parseInt(currentString.replace("ms", "").replace("::", ""));
		}
	}
	
	return 500;
}

// Animation height is a class attribute in the form :[0-9]+px
function getHeightFromClassArray(arrayOfClasses) {
	var lengthOfArray = arrayOfClasses.length;
	
	for (var index = 0; index < lengthOfArray; index++)
	{
		var currentString = arrayOfClasses[index];
		if (currentString.match(/^:\d+px$/))
		{
			return parseInt(currentString.replace("px", "").replace(":", ""));
		}
	}
	
	return 50;
}