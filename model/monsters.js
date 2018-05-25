/* Assassin */
    /* Stella */
        class Stella extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Stella';
                /* ELEMENT    */ var element  = 'water';
                /* HP         */ var hp       = 10050;
                /* ATK        */ var atk      = 648;
                /* DEF        */ var def      = 494;
                /* SPD        */ var spd      = 101;
                /* CRATE      */ var cRate    = 15;
                /* CDMG       */ var cDmg     = 50;
                /* RES        */ var res      = 15;
                /* ACC        */ var acc      = 0;
                /* CD SKILL 2 */ var cdSkill2 = 4;
                /* CD SKILL 3 */ var cdSkill3 = 6;

                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;

                    /* SKILL 1 */
                        if(nbSkillUp1 >= 1) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 2) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 3) effectRateSkillUp1 += 10;
                        if(nbSkillUp1 >= 4) dmgSkillUp1 += 10;
                        if(nbSkillUp1 >= 5) effectRateSkillUp1 += 15;
                    /* END SKILL 1 */
                    
                    /* SKILL 2 */
                        if(nbSkillUp2 >= 1) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 2) effectRateSkillUp2 += 10;
                        if(nbSkillUp2 >= 3) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 4) effectRateSkillUp2 += 15;
                        if(nbSkillUp2 >= 5) cdSkill2--;
                    /* END SKILL 2 */
                    
                    /* SKILL 3 */
                        if(nbSkillUp3 >= 1) dmgSkillUp3 += 10;
                        if(nbSkillUp3 >= 2) dmgSkillUp3 += 10;
                        if(nbSkillUp3 >= 3) cdSkill3--;
                        if(nbSkillUp3 >= 4) cdSkill3--;
                    /* END SKILL 3 */
                /* AND SKILL UP */
        
                super(
                    name,
                    element,

                    hp,    Rhp,
                    atk,   Ratk,
                    def,   Rdef,
                    spd,   Rspd,
                    cRate, RcRate,
                    cDmg,  RcDmg,
                    res,   Rres,
                    acc,   Racc,

                    cdSkill2,
                    cdSkill3,
                    dmgSkillUp1,
                    dmgSkillUp2,
                    dmgSkillUp3,
                    effectRateSkillUp1,
                    effectRateSkillUp2,
                    effectRateSkillUp3
                );
            }

            play() {
                this.atb = 0;

                this.ai();
            }
        
            ai() {
                this.newTarget();

                var random = Math.random();
        
                if      (this.AcdSkill2 == 0 && this.AcdSkill3 == 0) {
                    if      (random <= 0.165)                  this.skill1();
                    else if (random > 0.165 && random <= 0.33) this.skill2();
                    else                                       this.skill3();
                }
                else if (this.AcdSkill2 == 0 && this.AcdSkill3 != 0) {
                    if (random <= 0.33) this.skill1();
                    else                this.skill2();
                }
                else if (this.AcdSkill2 != 0 && this.AcdSkill3 == 0) {            
                    if (random <= 0.33) this.skill1();
                    else                this.skill3();
                }
                else {
                    this.skill1();
                }
            }

            skill1() {
                // Attacks an enemy and looks for its weakness. This attack decreases the enemy's Defense for 2 turns with a 50% chance.
                // 3.8*{ATK}        

                var damage = 3.8*this.getActualAtk();    
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);
                
                this.target.setDamage(damage);
            }
            skill2() {
                // Attacks the enemy 2 times. Each attack has a 75% chance to leave a Brand and Silence the target for 2 turns. (Reusable in 4 turns).
                // 3.0*{ATK} x2

                this.resetSkill2();
            }
            skill3() {
                // Attacks an enemy and decreases its Attack Bar by 10% for each attack. The number of strikes will increase up to 7 hits accordingly to your Attack Speed. (Reusable in 6 turns).
                // 1.8*{ATK} x7
                
                this.resetSkill3();
            }
        }
    /* END Stella */
/* END Assassin */

/* Hellhound */
    /* Tarq */
        class Tarq extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Tarq';
                /* ELEMENT    */ var element  = 'water';
                /* HP         */ var hp       = 8565;
                /* ATK        */ var atk      = 714;
                /* DEF        */ var def      = 362;
                /* SPD        */ var spd      = 115;
                /* CRATE      */ var cRate    = 15;
                /* CDMG       */ var cDmg     = 50;
                /* RES        */ var res      = 15;
                /* ACC        */ var acc      = 0;
                /* CD SKILL 2 */ var cdSkill2 = 3;
                /* CD SKILL 3 */ var cdSkill3 = 6;

                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;

                    /* SKILL 1 */
                        if(nbSkillUp1 >= 1) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 2) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 3) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 4) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 5) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 6) dmgSkillUp1 += 15;
                    /* END SKILL 1 */
                    
                    /* SKILL 2 */
                        if(nbSkillUp2 >= 1) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 2) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 3) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 4) cdSkill2--;
                    /* END SKILL 2 */
                    
                    /* SKILL 3 */
                        if(nbSkillUp3 >= 1) cdSkill3--;
                        if(nbSkillUp3 >= 2) cdSkill3--;
                    /* END SKILL 3 */
                /* AND SKILL UP */


                super(
                    name,
                    element,

                    hp,    Rhp,
                    atk,   Ratk,
                    def,   Rdef,
                    spd,   Rspd,
                    cRate, RcRate,
                    cDmg,  RcDmg,
                    res,   Rres,
                    acc,   Racc,

                    cdSkill2,
                    cdSkill3,
                    dmgSkillUp1,
                    dmgSkillUp2,
                    dmgSkillUp3,
                    effectRateSkillUp1,
                    effectRateSkillUp2,
                    effectRateSkillUp3
                );
            }

            play() {
                this.atb = 0;

                this.ai();
            }

            ai() {
                this.newTarget();

                var random = Math.random();

                if      (this.AcdSkill2 == 0 && this.AcdSkill3 == 0 && this.allies.size() > 2) {
                    if      (random <= 0.165)                  this.skill1();
                    else if (random > 0.165 && random <= 0.33) this.skill2();
                    else                                       this.skill3();
                }
                else if (
                    (this.AcdSkill2 == 0 && this.AcdSkill3 != 0) ||
                    (this.AcdSkill2 == 0 && this.allies.size() == 1)
                ) {
                    if (random <= 0.33) this.skill1();
                    else                this.skill2();
                }
                else if (this.AcdSkill2 != 0 && this.AcdSkill3 == 0) {    
                    if (random <= 0.33) this.skill1();
                    else                this.skill3();
                }
                else {
                    this.skill1();
                }
            }

            skill1() {
                // Bite your enemy and recover 30% of the inflicted damage as HP.
                // 3.6*{ATK}

                var damage = 3.6*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);
                
                this.setHpFlat(this.target.setDamage(damage)*0.3);
            }
            skill2() {
                // Attacks the enemy and increases your Attack Speed for 2 turns. Damage increases according to your Attack Speed. (Reusable in 3 turns).
                // {ATK}*({SPD} + 140)/50

                var damage = this.getActualAtk()*(this.getActualSpd()+140)/50;
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp2);
                
                this.target.setDamage(damage);

                this.buffAtkSpd = 2;

                this.resetSkill2();
            }
            skill3() {
                // Perform a fierce cooperative attack with two fellow allies. (Reusable in 6 turns).
                // 4.1*{ATK} x3

                var monsters = this.allies.getMonstersWithoutHim([this], 2);
                monsters.forEach(monster => {
                    monster.setTarget(this.target);
                    monster.skill1();
                    monster.RoundUp();
                });

                var damage = 4.1*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp3);
                
                this.target.setDamage(damage);


                this.resetSkill3();
            }
        }
    /* END Tarq */

    /* Sieq */
        class Sieq extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Sieq';
                /* ELEMENT    */ var element  = 'fire';
                /* HP         */ var hp       = 6255;
                /* ATK        */ var atk      = 823;
                /* DEF        */ var def      = 406;
                /* SPD        */ var spd      = 110;
                /* CRATE      */ var cRate    = 15;
                /* CDMG       */ var cDmg     = 50;
                /* RES        */ var res      = 15;
                /* ACC        */ var acc      = 0;
                /* CD SKILL 2 */ var cdSkill2 = 3;
                /* CD SKILL 3 */ var cdSkill3 = 5;

                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;

                    /* SKILL 1 */
                        if(nbSkillUp1 >= 1) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 2) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 3) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 4) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 5) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 6) dmgSkillUp1 += 15;
                    /* END SKILL 1 */
                    
                    /* SKILL 2 */
                        if(nbSkillUp2 >= 1) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 2) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 3) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 4) cdSkill2--;
                    /* END SKILL 2 */
                    
                    /* SKILL 3 */
                        if(nbSkillUp3 >= 1) cdSkill3--;
                        if(nbSkillUp3 >= 2) cdSkill3--;
                    /* END SKILL 3 */
                /* AND SKILL UP */
        
                super(
                    name,
                    element,

                    hp,    Rhp,
                    atk,   Ratk,
                    def,   Rdef,
                    spd,   Rspd,
                    cRate, RcRate,
                    cDmg,  RcDmg,
                    res,   Rres,
                    acc,   Racc,

                    cdSkill2,
                    cdSkill3,
                    dmgSkillUp1,
                    dmgSkillUp2,
                    dmgSkillUp3,
                    effectRateSkillUp1,
                    effectRateSkillUp2,
                    effectRateSkillUp3
                );
            }

            play() {
                this.atb = 0;

                this.ai();
            }
        
            ai() {
                this.newTarget();

                var random = Math.random();
        
                if      (this.AcdSkill2 == 0 && this.AcdSkill3 == 0) {
                    if      (random <= 0.165)                  this.skill1();
                    else if (random > 0.165 && random <= 0.33) this.skill2();
                    else                                       this.skill3();
                }
                else if (this.AcdSkill2 == 0 && this.AcdSkill3 != 0) {
                    if (random <= 0.33) this.skill1();
                    else                this.skill2();
                }
                else if (this.AcdSkill2 != 0 && this.AcdSkill3 == 0) {            
                    if (random <= 0.33) this.skill1();
                    else                this.skill3();
                }
                else {
                    this.skill1();
                }
            }

            skill1() {
                // Bite your enemy and recover 30% of the inflicted damage as HP.
                // 3.6*{ATK}

                var damage = 3.6*this.getActualAtk();    
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);
        
                this.setHpFlat(this.target.setDamage(damage)*0.3);
            }
            skill2() {
                // Bite your enemy continuously to inflict great damage. (Reusable in 3 turns).
                // 3.7*{ATK} x2

                for (var i = 0; i < 2; i++) {
                    var damage = 3.7*this.getActualAtk();
                        damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp2);

                    this.target.setDamage(damage);
                }
                
                this.resetSkill2();
            }
            skill3() {
                // Increases the Attack Power and Critical Rate of all allies for 3 turns. (Reusable in 5 turns).

                this.allies.getMonsters().forEach(monster => {
                    monster.setBuffAtk(3);
                    monster.setBuffCRate(3);
                });

                this.resetSkill3();
            }
        }
    /* END Sieq */
/* END Hellhound */

/* Vampire */
    /* Verdehile */
        class Verdehile extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Verdehile';
                /* ELEMENT    */ var element  = 'fire';
                /* HP         */ var hp       = 9885;
                /* ATK        */ var atk      = 812;
                /* DEF        */ var def      = 505;
                /* SPD        */ var spd      = 99;
                /* CRATE      */ var cRate    = 15;
                /* CDMG       */ var cDmg     = 50;
                /* RES        */ var res      = 15;
                /* ACC        */ var acc      = 0;
                /* CD SKILL 2 */ var cdSkill2 = 3;
                /* CD SKILL 3 */ var cdSkill3 = null;

                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;

                    /* SKILL 1 */
                        if(nbSkillUp1 >= 1) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 2) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 3) dmgSkillUp1 += 5;
                        if(nbSkillUp1 >= 4) dmgSkillUp1 += 15;
                    /* END SKILL 1 */
                    
                    /* SKILL 2 */
                        if(nbSkillUp2 >= 1) dmgSkillUp2 += 5;
                        if(nbSkillUp2 >= 2) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 3) dmgSkillUp2 += 10;
                        if(nbSkillUp2 >= 4) cdSkill2--;
                    /* END SKILL 2 */
                /* AND SKILL UP */
        
                super(
                    name,
                    element,

                    hp,    Rhp,
                    atk,   Ratk,
                    def,   Rdef,
                    spd,   Rspd,
                    cRate, RcRate,
                    cDmg,  RcDmg,
                    res,   Rres,
                    acc,   Racc,

                    cdSkill2,
                    cdSkill3,
                    dmgSkillUp1,
                    dmgSkillUp2,
                    dmgSkillUp3,
                    effectRateSkillUp1,
                    effectRateSkillUp2,
                    effectRateSkillUp3
                );
            }

            play() {
                this.atb = 0;

                this.ai();
            }
        
            ai() {
                this.newTarget();

                var random = Math.random();
        
                if (this.AcdSkill2 == 0) {           
                    if (random <= 0.33) this.skill1();
                    else                this.skill2();
                }
                else {
                    this.skill1();
                }
            }

            skill1() {
                // Attacks 2 times with a vampire bat and recovers HP by 30% of the inflicted damage.
                // 2.0*{ATK} x2       


                for (var i = 0; i < 2; i++) {
                    var damage = 2*this.getActualAtk();
                        damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);

                    this.setHpFlat(this.target.setDamage(damage)*0.3);

                    this.skill3();
                }
            }
            skill2() {
                // Strikes a strong blow with a surprise attack. This attack receives a 30% Critical Rate bonus. (Reusable in 3 turns).
                // 5.9*{ATK}

                var damage = 5.9*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp2);

                this.target.setDamage(damage);

                this.skill3();

                this.resetSkill2();
            }
            skill3() {
                // Your Critical Hits increase the Attack Bars of all allies by 20%. This effect does not have effect on allies that have similar skill effects. [Automatic Effect]
                
                this.allies.getMonsters().forEach(monster => {
                    monster.setAtb(20);
                });
            }
        }
    /* END Verdehile */
/* END Vampire */

var lClassMonsters = [
    { 'class': Stella   , 'Stella'   : Stella    },
    { 'class': Tarq     , 'Tarq'     : Tarq      }, 
    { 'class': Sieq     , 'Sieq'     : Sieq      },
    { 'class': Verdehile, 'Verdehile': Verdehile }
];