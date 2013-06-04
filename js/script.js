$(document).ready(function() {
    
	/* Next/prev and primary nav btn click handlers */
	$('a.landingpage_link').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {

		});
    	return false;
	});
    $('a.vanilla-brittle_link').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#vanilla-brittle').offset().top
    	}, 1000, function() {

		});
    	return false;
    });
    $('a.citron-lime_link').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#citron-lime').offset().top
    	}, 1000, function() {

		});
    	return false;
    });
	$('a.kiba_link').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#kiba').offset().top
    	}, 1000, function() {

		});
    	return false;
    });

});