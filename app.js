setTimeout(function(){
	$('#splash').fadeOut();
	$('#main').fadeIn();
}, 100);


$('button').on('click', function(){
	var visina = $('#visina').val() / 100;
	var tezina = $('#tezina').val();
	var rezultat = tezina / (visina * visina);

	rezultat = Math.round(rezultat * 10) / 10;
	$('#bmi').text(rezultat);
});