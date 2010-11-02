$(document).ready(function() {
	
	var thiscode = $('#thiscode').text();
		
	$('body').append('<code>' + thiscode + '</code>');
	
	$('body').append('<script src="libs/hijs.js"><\/script>');
	
});