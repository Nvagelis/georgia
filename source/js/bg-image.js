$(document).ready(function(){
    var $win = $(window),
        $img = $('.bg-image img');
        
    $win.scroll(function (){
        var top = $(this).scrollTop();
        $img.css({'-webkit-transform':'translate(0,' + Math.min((top * 0.05),20) + '%)',
                'transform':'translate(0,' + Math.min((top * 0.05),20) + '%)'});
    });
});


