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

        var lStatsMonsters = null;
        function simulateTeam(nbFight) {  
            lStatsMonsters = Array();          
            for (var i = 0; i < $('.t-configure .monster').length; i++) {
                var selector = '.t-configure .monster:nth-child('+(i+1)+')';

                var name  = $('.t-configure .monster:nth-child('+(i+1)+') .name').text();
                
                var src   = $('.t-configure .monster:nth-child('+(i+1)+') img').attr('src');

                var hp    = parseInt($('.Bhp' , selector).text()) + ( !Number.isInteger(parseInt($('.Rhp' , selector).val())) ? 0 : parseInt($('.Rhp' , selector).val()) );
                var atk   = parseInt($('.Batk', selector).text()) + ( !Number.isInteger(parseInt($('.Ratk', selector).val())) ? 0 : parseInt($('.Ratk', selector).val()) );
                var def   = parseInt($('.Bdef', selector).text()) + ( !Number.isInteger(parseInt($('.Rdef', selector).val())) ? 0 : parseInt($('.Rdef', selector).val()) );
                var spd   = parseInt($('.Bspd', selector).text()) + ( !Number.isInteger(parseInt($('.Rspd', selector).val())) ? 0 : parseInt($('.Rspd', selector).val()) );

                var crate = ( !Number.isInteger(parseInt($('.Rcrate', selector).val())) ? 0 : parseInt($('.Rcrate', selector).val()) );
                var cdmg  = ( !Number.isInteger(parseInt($('.Rcdmg' , selector).val())) ? 0 : parseInt($('.Rcdmg' , selector).val()) );
                var res   = ( !Number.isInteger(parseInt($('.Rres'  , selector).val())) ? 0 : parseInt($('.Rres'  , selector).val()) );
                var acc   = ( !Number.isInteger(parseInt($('.Racc'  , selector).val())) ? 0 : parseInt($('.Racc'  , selector).val()) );
                
                var skillUpSkill1 = ( !Number.isInteger(parseInt($('.skillUpSkill1', selector).val())) ? 0 : parseInt($('.skillUpSkill1', selector).val()) );
                var skillUpSkill2 = ( !Number.isInteger(parseInt($('.skillUpSkill2', selector).val())) ? 0 : parseInt($('.skillUpSkill2', selector).val()) );
                var skillUpSkill3 = ( !Number.isInteger(parseInt($('.skillUpSkill3', selector).val())) ? 0 : parseInt($('.skillUpSkill3', selector).val()) );

                lStatsMonsters.push({ 
                    "name" : name,

                    "hp"  : hp,
                    "atk" : atk,
                    "def" : def,
                    "spd" : spd,

                    "crate" : crate,
                    "cdmg"  : cdmg,
                    "res"   : res,
                    "acc"   : acc,

                    "skillUpSkill1" : skillUpSkill1,
                    "skillUpSkill2" : skillUpSkill2,
                    "skillUpSkill3" : skillUpSkill3
                });

                $('.t-result').append(
                    "<div class='monster'>" +
                        "<span class='name'>" + name + "</span>" +
                        "<table>" +
                            "<tr>" +
                                "<td colspan='3'>" +
                                    "<img src='" + src + "'>" +
                                "</td>" +
                            "</tr>" +
        
                            "<tr>" +
                                "<th>HP</th>" +
                                "<td>" + hp + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>DEF</th>" +
                                "<td>" + atk + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>ATK</th>" +
                                "<td>" + def + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>SPD</th>" +
                                "<td>" + spd + "</td>" +
                            "</tr>" +
        
                            "<tr>" +
                                "<th>CRate</th>" +
                                "<td>" + crate + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>CDmg</th>" +
                                "<td>" + cdmg + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>RES</th>" +
                                "<td>" + res + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>ACC</th>" +
                                "<td>" + acc + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th class='skillUp'>Skill up S1</th>" +
                                "<td>" + skillUpSkill1 + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th class='skillUp'>Skill up S2</th>" +
                                "<td>" + skillUpSkill2 + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th class='skillUp'>Skill up S3</th>" +
                                "<td>" + skillUpSkill3 + "</td>" +
                            "</tr>" +
                            
                        "</table>" +
                    "</div>"
                );
            }


            var gagne = 0, perd = 0;
            

            var cptFight = 0, limit = 1000; 
            var processor = setInterval(function() { 
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
                
                for (var i = 0; i < lStatsMonsters.length; i++) {
                    newFight.setAlly( new lClassMonsters[lStatsMonsters[i].name](    
                        /* HP    */ lStatsMonsters[i].hp,
                        /* ATK   */ lStatsMonsters[i].atk,
                        /* DEF   */ lStatsMonsters[i].def,
                        /* SPD   */ lStatsMonsters[i].spd,
                        /* CRATE */ lStatsMonsters[i].crate,
                        /* CDMG  */ lStatsMonsters[i].cdmg,
                        /* RES   */ lStatsMonsters[i].res,
                        /* ACC   */ lStatsMonsters[i].acc,
                        lStatsMonsters[i].skillUpSkill1,
                        lStatsMonsters[i].skillUpSkill2,
                        lStatsMonsters[i].skillUpSkill3
                    ));
                }

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

                
                loadingCircle(Math.round((100/limit)*cptFight));

                if(++cptFight == limit)  { 
                    clearInterval(processor); 
                    $('.winRate').text(((100*gagne)/(gagne+perd)) + "%");
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