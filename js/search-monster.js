$(document).ready(function(){
    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
    };

    $('.search-monster').keyup(function(e){ 
        if($(this).val() != '') {
            $(this).parent().find('.monsters .monster').addClass('hide');

            $(this).parent().find('.monsters .monster[name*="'+$(this).val()+'"]').removeClass('hide');
        }
        else
            $(this).parent().find('.monsters .monster').removeClass('hide');
    });
});