$(document).ready(main);
var contador = 1;
var contar = 1;
function main () {
	$('.icon-menu').click(function(){
		if (contador == 1) {
			$('.navi').animate({
				left: '0'
			});
			contador = 0;
            $('.bt-menu span').addClass('icon-cross');
            $('.bt-menu span').removeClass('icon-menu');
		} else {
			contador = 1;
			$('.navi').animate({
				left: '-100%'
			});
            $('.bt-menu span').addClass('icon-menu');
            $('.bt-menu span').removeClass('icon-cross');
		}
	});
	$('.icon-filter').click(function(){
		if (contar == 1) {
			$('.filtro').animate({
				left: '0'
			});
			contar = 0;
            $('.bt-filter span').addClass('icon-cross');
            $('.bt-filter span').removeClass('icon-filter');
		} else {
			contar = 1;
			$('.filtro').animate({
				left: '-100%'
			});
            $('.bt-filter span').addClass('icon-filter');
            $('.bt-filter span').removeClass('icon-cross');
		}
	});
    var mql = window.matchMedia("screen and (max-width:425px)");
    $('#Busc').click(function(){
       if (contador==1){
           if(mql.matches){
               $('.busc2').addClass('ver');
           } else {
               $("#buscar").focus();
           }
       } 
    });
    $('#cloBusc').click(function(){
       if (contador==1){
           if(mql.matches){
               $('.busc2').removeClass('ver');
           } else {
               $("#buscar").focus();
           }
       } 
    });
// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
$(document).ready(function(){
	var altura = '420';
	var altura2 = '360';
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() >= altura ){
			$('.principal').addClass('redColor');
		} else {
			$('.principal').removeClass('redColor');
		}
		if ( $(window).scrollTop() >= altura2 ){
			$('.filtro').addClass('paste');
        } else {
			$('.filtro').removeClass('paste');
        }
	});
});