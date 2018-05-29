$(document).ready(function(){     
    /* SIMULATION */  
        $(".btn-simulate").click(function(e){ 
            e.preventDefault();
            
            if($('.team .monster').length != 0) {
                $('.smlt-choose').hide("slide", { direction: "left" }, 500, function(){
                    $('.smlt-loading').show("slide", { direction: "right" });
                    
                    var nbFight = $('.nb-fight').val();

                    simulateTeam(nbFight);
                });
            }
        });   

        function simulateTeam(nbFight) {
            var gagne = 0;
            var perd = 0;
            

            var i = 0, limit = 1000, busy = false; 
            var processor = setInterval(function() { 
                if(!busy) { 
                    var newFight = new fight();

                    newFight.setGloryBuildings({
                        crystal_Rock	        : 0,
                        guardstone	            : 1,
                        water_sanctuary	        : 10,
                        fire_sanctuary	        : 2,
                        wind_sanctuary	        : 4,
                        light_sanctuary	        : 5,
                        dark_sanctuary          : 2,
                        ancient_sword           : 8,
                        crystal_Altar           : 7,
                        sky_tribe_totem         : 10,
                        arcane_Booster_Tower    : 0,
                        fallen_Ancient_Guardian : 10
                    });
                    newFight.setFlagsGvG({
                        flag_of_rage  : 0,
                        flag_of_hope  : 0,
                        flag_of_will  : 0,
                        flag_of_battle: 0
                    });
                    newFight.setLeaderSkill({ spd : 19 });
                    
                    newFight.setAlly( new Verdehile(
                        /* HP    */ 4520,
                        /* ATK   */ 768,
                        /* DEF   */ 181,
                        /* SPD   */ 81,
                        /* CRATE */ 120,
                        /* CDMG  */ 86,
                        /* RES   */ 35,
                        /* ACC   */ 0,
                        2,
                        0,
                        0
                    ));
                    newFight.setAlly( new Stella(
                        /* HP    */ 4401,
                        /* ATK   */ 1150,
                        /* DEF   */ 147,
                        /* SPD   */ 80,
                        /* CRATE */ 60,
                        /* CDMG  */ 160,
                        /* RES   */ 15,
                        /* ACC   */ 18,
                        6,
                        4,
                        2
                    ));

                    newFight.setEnnemy( new Tarq(
                        /* HP    */ 4401,
                        /* ATK   */ 1150,
                        /* DEF   */ 147,
                        /* SPD   */ 84,
                        /* CRATE */ 60,
                        /* CDMG  */ 160,
                        /* RES   */ 15,
                        /* ACC   */ 18,
                        6,
                        4,
                        2
                    ));
                    newFight.setEnnemy( new Sieq(
                        /* HP    */ 4401,
                        /* ATK   */ 1150,
                        /* DEF   */ 147,
                        /* SPD   */ 84,
                        /* CRATE */ 60,
                        /* CDMG  */ 160,
                        /* RES   */ 15,
                        /* ACC   */ 18,
                        6,
                        4,
                        2
                    ));
                    newFight.setEnnemy( new Sieq(
                        /* HP    */ 4401,
                        /* ATK   */ 1150,
                        /* DEF   */ 147,
                        /* SPD   */ 84,
                        /* CRATE */ 60,
                        /* CDMG  */ 160,
                        /* RES   */ 15,
                        /* ACC   */ 18,
                        6,
                        4,
                        2
                    ));

                    if(newFight.start())
                        gagne++;
                    else
                        perd++;


                        
                    
                    loadingCircle(Math.round((100/limit)*i));

                    busy = false; 

                    if(++i == limit)  { 
                        clearInterval(processor); 
                        console.log(((100*gagne)/(gagne+perd)) + "% de victoire");
                    }
                } 
            }, 1); 
            
        }

        var bar = new ldBar(".ldBar");
        function loadingCircle(pourc) {
            if(bar.value != pourc)
                bar.set(pourc);

            if(pourc >= 100) {
                $('.smlt-loading').hide("slide", { direction: "left" }, 500, function(){
                    $('.smlt-result').show("slide", { direction: "right" });
                });
            }
        }

        /*function test2() { 
            var result2 = document.getElementById('result2'); 

            var start = new Date().getTime(); 

            var i = 0, limit = 200, busy = false; 
            var processor = setInterval(function() { 
                if(!busy) { 
                    busy = true; 

                    result2.value =  'time=' +  
                    (new Date().getTime() - start) + ' [i=' + i + ']'; 

                    process(); 

                    if(++i == limit)  { 
                        clearInterval(processor); 
                        result2.value = 'time=' +  
                        (new Date().getTime() - start) + ' [done]'; 
                    } 

                    busy = false; 
                } 
            }, 100); 
        }*/
    /* END SIMULATION */

    
    /* NEW SIMULATION */
        $(".new-simulation").click(function(e){ 
            e.preventDefault();

            cptLoading = 0;
            
            $('.smlt-result').hide("slide", { direction: "right" }, 500, function(){
                $('.smlt-choose').show("slide", { direction: "left" });
            });
        }); 
    /* END NEW SIMULATION */
});