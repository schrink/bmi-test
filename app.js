setTimeout(function(){
	$('#splash').fadeOut();
	$('#main').fadeIn();
}, 2000);

$('button').on('click', function(){
	var tezina = $('#tezina').val();
	var visina = $('#visina').val() / 100;

	var bmi = tezina / (visina * visina);
	bmi = Math.round(bmi);
	$('#bmi').text(bmi);
});