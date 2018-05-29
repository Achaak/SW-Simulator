<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Summoner's War Simulator</title>
</head>

<body>
    <script src="../model/monster.js"></script>
    <script src="../model/monsters.js"></script>
    <script src="../model/fight.js"></script>
    <script src="../model/groupMonster.js"></script>
    <script src="../model/tools.js"></script>
    <script src="../model/buildings_and_flags.js"></script>

    <script type="text/javascript">
        var gagne = 0;
        var perd = 0;
        

        for (let index = 0; index < 1000; index++) {
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
        }
        
        console.log(((100*gagne)/(gagne+perd)) + "% de victoire");
    </script>
</body>
</html>