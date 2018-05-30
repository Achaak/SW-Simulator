var classEnnemiesWaves = null;

$(document).ready(function(){
    /* SIMULATION */  
        $(".btn-simulate").click(function(e){ 
            e.preventDefault();
            
            if($('.team .monster').length != 0) {
                $('.smlt-choose').hide("slide", { direction: "left" }, 500, function(){
                    $('.smlt-loading').show("slide", { direction: "right" });

                    simulateTeam();
                });
            }
        });   

        var lStatsMonsters = null;
        var lOtherStats = null;
        function simulateTeam() {  
            var win = 0, lose = 0;
            lStatsMonsters = Array();

            $('.t-result').empty();

            for (var i = 0; i < $('.t-configure .monster').length; i++) {
                var selector = '.t-configure .monster:nth-child('+(i+1)+')';

                var name  = $('.t-configure .monster:nth-child('+(i+1)+') .name').text();
                
                var src   = $('.t-configure .monster:nth-child('+(i+1)+') img').attr('src');

                var Bhp    = parseInt($('.Bhp' , selector).text());
                var Batk   = parseInt($('.Batk', selector).text());
                var Bdef   = parseInt($('.Bdef', selector).text());
                var Bspd   = parseInt($('.Bspd', selector).text());

                var Rhp    = ( !Number.isInteger(parseInt($('.Rhp' , selector).val())) ? 0 : parseInt($('.Rhp' , selector).val()) );
                var Ratk   = ( !Number.isInteger(parseInt($('.Ratk', selector).val())) ? 0 : parseInt($('.Ratk', selector).val()) );
                var Rdef   = ( !Number.isInteger(parseInt($('.Rdef', selector).val())) ? 0 : parseInt($('.Rdef', selector).val()) );
                var Rspd   = ( !Number.isInteger(parseInt($('.Rspd', selector).val())) ? 0 : parseInt($('.Rspd', selector).val()) );

                var crate = ( !Number.isInteger(parseInt($('.Rcrate', selector).val())) ? 0 : parseInt($('.Rcrate', selector).val()) );
                var cdmg  = ( !Number.isInteger(parseInt($('.Rcdmg' , selector).val())) ? 0 : parseInt($('.Rcdmg' , selector).val()) );
                var res   = ( !Number.isInteger(parseInt($('.Rres'  , selector).val())) ? 0 : parseInt($('.Rres'  , selector).val()) );
                var acc   = ( !Number.isInteger(parseInt($('.Racc'  , selector).val())) ? 0 : parseInt($('.Racc'  , selector).val()) );
                
                var skillUpSkill1 = ( !Number.isInteger(parseInt($('.skillUpSkill1', selector).val())) ? 0 : parseInt($('.skillUpSkill1', selector).val()) );
                var skillUpSkill2 = ( !Number.isInteger(parseInt($('.skillUpSkill2', selector).val())) ? 0 : parseInt($('.skillUpSkill2', selector).val()) );
                var skillUpSkill3 = ( !Number.isInteger(parseInt($('.skillUpSkill3', selector).val())) ? 0 : parseInt($('.skillUpSkill3', selector).val()) );

                lStatsMonsters.push({ 
                    "name" : name,

                    "Bhp"  : Bhp , 'Rhp'  : Rhp,
                    "Batk" : Batk, 'Ratk' : Ratk,
                    "Bdef" : Bdef, 'Rdef' : Rdef,
                    "Bspd" : Bspd, 'Rspd' : Rspd,

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
                                "<td>" + (Bhp  + Rhp ) + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>DEF</th>" +
                                "<td>" + (Batk + Ratk) + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>ATK</th>" +
                                "<td>" + (Bdef + Rdef) + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<th>SPD</th>" +
                                "<td>" + (Bspd + Rspd) + "</td>" +
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
            
            lOtherStats = {
                'leaderType' : $('.type-leader').val(), 'leaderValue' : $('.value-leader').val(), 
            }

            var cptFight = 0, limit = 1000; 
            var processor = setInterval(function() { 
                var newFights = new fights();

                newFights.setGloryBuildings({
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
                newFights.setFlagsGvG({
                    flag_of_rage  : 0,
                    flag_of_hope  : 0,
                    flag_of_will  : 0,
                    flag_of_battle: 0
                });
                newFights.setLeaderSkill({ "leaderType" : lOtherStats.leaderType, 'leaderValue': lOtherStats.leaderValue });
                
                for (var i = 0; i < lStatsMonsters.length; i++) {
                    newFights.setAlly( new lClassMonsters[lStatsMonsters[i].name](    
                        /* HP    */ lStatsMonsters[i].Rhp,
                        /* ATK   */ lStatsMonsters[i].Ratk,
                        /* DEF   */ lStatsMonsters[i].Rdef,
                        /* SPD   */ lStatsMonsters[i].Rspd,
                        /* CRATE */ lStatsMonsters[i].crate,
                        /* CDMG  */ lStatsMonsters[i].cdmg,
                        /* RES   */ lStatsMonsters[i].res,
                        /* ACC   */ lStatsMonsters[i].acc,
                        lStatsMonsters[i].skillUpSkill1,
                        lStatsMonsters[i].skillUpSkill2,
                        lStatsMonsters[i].skillUpSkill3
                    ));
                }

                var ennemiesWaves = [];
                for (var i = 0; i < classEnnemiesWaves.length; i++) {
                    var arrayTmp = []
                    for (var j = 0; j < classEnnemiesWaves[i].length; j++) {
                        arrayTmp.push(new classEnnemiesWaves[i][j]);
                    }
                    ennemiesWaves.push(arrayTmp);
                }

                newFights.setEnnemiesWaves(ennemiesWaves);

                var results = newFights.start();
                

                /* LOADING CIRCLE */
                    loadingCircle(Math.round((100/limit)*cptFight));
                /* END LOADING CIRCLE */

                /* WIN RATE */
                    if(results.win) win++;
                    else            lose++;
                /* WIN RATE */

                if(++cptFight == limit)  { 
                    clearInterval(processor); 
                    $('.winRate').text(((100*win)/(win+lose)) + "%");
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