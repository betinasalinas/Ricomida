

	$(document).ready(function(){

	$(function() {
		$('[data-bs-toggle="tooltip"]').tooltip();
	});
	
	
	$('#enviarCorreo').on('click',function(){
		alert("El correo fue enviado correctamente");
	});

	$('h4').on('dblclick',function(){
		$(this).addClass('rojo');
	});

	$('.card-title').on('click',function(){
		$('.card-text').toggle();
	})

});







