$(document).ready(function(){
	$("[data-toggle='dropdown']" ).mouseover(function() {
		$(this).children('ul').css('display','inline');
	});
	$("[data-toggle='dropdown']" ).mouseout(function() {
		$(this).children('ul').css('display','none');
	});
});