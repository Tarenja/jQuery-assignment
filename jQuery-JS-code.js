/* Create a basic html page without any CSS styling to it, the page should have at least 10 elements on it.

Use jQuery to animate the elements, you can for instance use hide(), show(),fadeIn(),fadeOut(),slideToggle()...etc. You should have at least 5 different effects happen.

You must also have at least 3 different events handlers as well (you can choose for instance click,hover and mouseEnter but you're free to use others if you want).

If you've forgotten what events are, check out this page: https://learn.jquery.com/events/ (Links to an external site.)Links to an external site.

Finally, upload your solution on Github and submit the URL.

Succes! ;) */

$(document).ready(function(){

	$('.image').hide ();
	$('.images').hide ();				//this keeps the images hiddden until further action below

	$('.fruits p').click(function(){
		$('.image').fadeIn(1000);		//this fades in the image of the fruit when sentence is clicked
	});


	$('#food').click(function(){		//this makes the image pop in when sentence is clicked
		$('.images').show();	
	});

	$('h1').mouseenter(function(){		//this makes the h1 fadeout when the mouse enters it
		$('h1').fadeOut(3000);
	})

	$('.diets p').hover(function(){		//this makes the list slide up and disappear when hovering over the right sentence
		$('.diets li').slideToggle(500);	
	})

});

