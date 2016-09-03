$(document).ready(function(){
    var $burger = $('.burger'),
        $menu = $('.menu');
        
    $burger.on('click', function (){
        $menu.toggleClass('open').toggleClass('close');
    });
});


