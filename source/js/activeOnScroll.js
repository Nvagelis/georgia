$(document).ready(function(){
    var $win = $(window),
        $page = $('.page'),
        $navLi = $('.main-navigation li');
    
    $win.on('scroll', function() {
        $page.each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $navLi.removeClass('active');
                $('.main-navigation li a[href=#'+ id +']').parent('li').addClass('active');
            }
        });
    });
    
    $win.on('resize', function (){
        $(this).trigger('scroll');
    });
});   


