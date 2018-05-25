$(document).ready(function(){       
    $(".btn-simulate").click(function(e){ 
        e.preventDefault();

        $('.smlt-choose').hide("slide", { direction: "left" }, 500, function(){
            $('.smlt-loading').show("slide", { direction: "right" });


            

            boucle();
        });
    });   


    var bar = new ldBar(".ldBar");

    var tid = null;
    var i = 0;
    function boucle() {
        i++;
        bar.set(i);

        tid = setTimeout(boucle, 30);

        if(i == 100) {                        
            clearTimeout(tid);

            $('.smlt-loading').hide("slide", { direction: "left" }, 500, function(){
                $('.smlt-result').show("slide", { direction: "right" });
            });
        }
    }

    
    /* NEW SILUMATION */
        $(".new-simulation").click(function(e){ 
            e.preventDefault();

            $('.smlt-result').hide("slide", { direction: "right" }, 500, function(){
                $('.smlt-choose').show("slide", { direction: "left" });
            });
        }); 
    /* END NEW SILUMATION */
});