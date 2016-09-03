$(document).ready(function(){
    var $loader = $('.over'),
        $loadwrap = $('.loader');
    
    $loader.animate({'width':'100%'}, 4000, function (){
        $loadwrap.fadeOut(2000);
    });
});

