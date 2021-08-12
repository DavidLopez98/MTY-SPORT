 $(document).ready(function(){
    //EFECTO MENU
$('.menu a').each(function(index, elemento){

$(this).css ({
    'top': '-200px'
});
$(this).animate({
    top: '0'
}, 2000 + (index * 500));

});
//EFECTO HEADER
if($(window).width() > 800){
    $('header .textos').css({
        opacity: 0,
        marginTop:0
    });

    $('header .textos').animate({
        opacity: 1,
        marginTop:'-52px'
    }, 1500 );
}
//Scroll Elementos MEnu
var acercaDe = $('#acerca-de').offset().top,
menu = $ ('#platillos').offset().top,
galeria = $('#galeria').offset().top,
ubicacion =  $('#ubicacion').offset().top;

$('btn-acerca-de').on('click',function(e){
    e.preventDefault();
$('html , body').animate({
    srollTop: acercaDe - 100
},500);
});
$('btn-menu').on('click',function(e){
    e.preventDefault();
$('html , body').animate({
    srollTop: menu - 100
},500);
});
$('btn-galeria').on('click',function(e){
    e.preventDefault();
$('html , body').animate({
    srollTop: galeria - 100
},500);
});
$('btn-ubicacion').on('click',function(e){
    e.preventDefault();
$('html , body').animate({
    srollTop: ubicacion - 100
},500);
});
});