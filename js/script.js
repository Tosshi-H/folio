jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>499){
            $('#navigation').addClass('fixed');
        }
        else if ($(this).scrollTop()<499){
            $('#navigation').removeClass('fixed');
        }
    });
});
jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>499){
            $('#main_padd').addClass('main_padd');
        }
        else if ($(this).scrollTop()<499){
            $('#main_padd').removeClass('main_padd');
        }
    });
});