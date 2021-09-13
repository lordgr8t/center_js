$(document).ready(function() {	
	$('*#center-wrapper').css({'paddingTop' : '0.1px'});	
	let	wrapWidth = $('*#center-width').parent().width();
	let	wrapHeight = $('*#center-heigh').parent().height();
	let contentWidthL = $('#center-width').width();
	let contentHeightP = $('#center-heigh').height();
	let contentWidthA = $('#center-all').width();
	let contentHeightA = $('#center-all').height();
	let	currentWidth = (wrapWidth/2)-(contentWidthL/2);
	let	currentHeight = (wrapHeight/2)-(contentHeightP/2);
	let	currentAllWidth = (wrapWidth/2)-(contentWidthA/2);
	let	currentAllHeight = (wrapHeight/2)-(contentHeightA/2);
	$('*#center-wrapper #center-width').css({'marginLeft' : currentWidth});
	$('*#center-wrapper #center-heigh').css({'marginTop' : currentHeight});
	$('*#center-wrapper #center-all').css({'marginTop' : currentAllHeight}).css({'marginLeft' : currentAllWidth});
});
