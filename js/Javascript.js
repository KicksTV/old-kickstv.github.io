var Portfolio = function() {
	$('#image1').click(function() {
		$('.large_image_container').show(100).attr('id', 'image1');
	});
	$('#image2').click(function() {
		$('.large_image_container').show(100).attr('id', 'image2');
	});
	$('#image3').click(function() {
		$('.large_image_container').show(100).attr('id', 'image3');
	});
	$('#image4').click(function() {
		$('.large_image_container').show(100).attr('id', 'image4');
	});
	$('#image5').click(function() {
		$('.large_image_container').show(100).attr('id', 'image5');
	});
	$('#image6').click(function() {
		$('.large_image_container').show(100).attr('id', 'image6');
	});

	$('.X_icon').click(function() {
		$('.large_image_container').hide();
	});

};



$(document).ready(Portfolio);