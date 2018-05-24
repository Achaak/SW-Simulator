$(document).ready(function(){               
    $(".icon-menu").click(function(e){  
        if($('nav.main').hasClass('open')) {
            $('nav.main .menu .li-name').hide('fade', 200, function() {
                $('nav.main').removeClass('open');
            });

        }
        else {
            $('nav.main').addClass('open');

            setTimeout(function(){ 
                $('nav.main .menu .li-name').show('fade', 200);
            }, 200);
        }
    });
});