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
            var cRateSkillUp1 = 0;
            var cRateSkillUp2 = 0;
            var cRateSkillUp3 = 0;

            /* SKILL 1 */
                switch (nbSkillUp1) {
                    case 1: dmgSkillUp1 += 5;
                        break;
                    case 2: dmgSkillUp1 += 5;
                        break;
                    case 3: dmgSkillUp1 += 5;
                        break;
                    case 4: dmgSkillUp1 += 5;
                        break;
                    case 5: dmgSkillUp1 += 5;
                        break;
                    case 6: dmgSkillUp1 += 15;
                        break;
                }
            /* END SKILL 1 */
            
            /* SKILL 1 */
                switch (nbSkillUp2) {
                    case 1: dmgSkillUp2 += 10;
                        break;
                    case 2: dmgSkillUp2 += 10;
                        break;
                    case 3: dmgSkillUp2 += 10;
                        break;
                    case 4: cdSkill2--;
                        break;
                }
            /* END SKILL 1 */
            
            /* SKILL 1 */
                switch (nbSkillUp3) {
                    case 1: cdSkill3--;
                        break;
                    case 2: cdSkill3--;
                        break;
                }
            /* END SKILL 1 */
        /* AND SKILL UP */


        super(
            name,
            element,
            (Rhp  != undefined ? Rhp  : 0 ) + hp,
            (Ratk != undefined ? Ratk : 0 ) + atk,
            (Rdef != undefined ? Rdef : 0 ) + def,
            (Rspd != undefined ? Rspd : 0 ) + spd,
            (RcRate != undefined ? RcRate : cRate),
            (RcDmg  != undefined ? RcDmg  : cDmg ),
            (Rres   != undefined ? Rres   : res  ),
            (Racc   != undefined ? Racc   : acc  ),
            cdSkill2,
            cdSkill3,
            dmgSkillUp1,
            dmgSkillUp2,
            dmgSkillUp3,
            cRateSkillUp1,
            cRateSkillUp2,
            cRateSkillUp3
        );
    }

    play() {
        this.atb = 0;

        this.ai();
    }

    ai() {
        var random = Math.random();

        if      (this.AcdSkill2 == 0 && this.AcdSkill3 == 0 && this.allies.size() > 1) {
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

        damage = this.getHasCrit(this.AcRate, damage);
        
        this.setHpFlat(this.getTarget().setDamage(damage)*0.3);
    }
    skill2() {
        // Attacks the enemy and increases your Attack Speed for 2 turns. Damage increases according to your Attack Speed. (Reusable in 3 turns).
        // {ATK}*({SPD} + 140)/50
        var damage = this.getActualAtk()*(this.getActualSpd()+140)/50;

        damage = this.getHasCrit(this.AcRate, damage);
        
        this.getTarget().setDamage(damage);

        this.buffAtkSpd = 2;

        this.resetSkill2();
    }
    skill3() {
        // Perform a fierce cooperative attack with two fellow allies. (Reusable in 6 turns).
        // 4.1*{ATK} x3

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
                var cRateSkillUp1 = 0;
                var cRateSkillUp2 = 0;
                var cRateSkillUp3 = 0;

                /* SKILL 1 */
                    switch (nbSkillUp1) {
                        case 1: dmgSkillUp1 += 5;
                            break;
                        case 2: dmgSkillUp1 += 5;
                            break;
                        case 3: dmgSkillUp1 += 5;
                            break;
                        case 4: dmgSkillUp1 += 5;
                            break;
                        case 5: dmgSkillUp1 += 5;
                            break;
                        case 6: dmgSkillUp1 += 15;
                            break;
                    }
                /* END SKILL 1 */
                
                /* SKILL 1 */
                    switch (nbSkillUp2) {
                        case 1: dmgSkillUp2 += 10;
                            break;
                        case 2: dmgSkillUp2 += 10;
                            break;
                        case 3: dmgSkillUp2 += 10;
                            break;
                        case 4: cdSkill2--;
                            break;
                    }
                /* END SKILL 1 */
                
                /* SKILL 1 */
                    switch (nbSkillUp3) {
                        case 1: cdSkill3--;
                            break;
                        case 2: cdSkill3--;
                            break;
                    }
                /* END SKILL 1 */
            /* AND SKILL UP */
    
            super(
                name,
                element,
                (Rhp  != undefined ? Rhp  : 0 ) + hp,
                (Ratk != undefined ? Ratk : 0 ) + atk,
                (Rdef != undefined ? Rdef : 0 ) + def,
                (Rspd != undefined ? Rspd : 0 ) + spd,
                (RcRate != undefined ? RcRate : cRate),
                (RcDmg  != undefined ? RcDmg  : cDmg ),
                (Rres   != undefined ? Rres   : res  ),
                (Racc   != undefined ? Racc   : acc  ),
                cdSkill2,
                cdSkill3,
                dmgSkillUp1,
                dmgSkillUp2,
                dmgSkillUp3,
                cRateSkillUp1,
                cRateSkillUp2,
                cRateSkillUp3
            );
        }

        play() {
            this.atb = 0;

            this.ai();
        }
    
        ai() {
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
    
            damage = this.getHasCrit(this.AcRate, damage);
    
            this.setHpFlat(this.getTarget().setDamage(damage)*0.3);
        }
        skill2() {
            // Bite your enemy continuously to inflict great damage. (Reusable in 3 turns).
            // 3.7*{ATK} x2
            var damage = damage = 3.7*this.getActualAtk();

            damage = this.getHasCrit(this.AcRate, damage);

            for (var i = 0; i < 2; i++) 
                this.getTarget().setDamage(damage);
            
            this.resetSkill2();
        }
        skill3() {
            // Increases the Attack Power and Critical Rate of all allies for 3 turns. (Reusable in 5 turns).
            // 4.1*{ATK} x3

            this.resetSkill3();
        }
    }
/* END Sieq */


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
                var cRateSkillUp1 = 0;
                var cRateSkillUp2 = 0;
                var cRateSkillUp3 = 0;

                /* SKILL 1 */
                    switch (nbSkillUp1) {
                        case 1: dmgSkillUp1 += 5;
                            break;
                        case 2: dmgSkillUp1 += 5;
                            break;
                        case 3: cRateSkillUp1 += 10;
                            break;
                        case 4: dmgSkillUp1 += 10;
                            break;
                        case 5: cRateSkillUp1 += 15;
                            break;
                    }
                /* END SKILL 1 */
                
                /* SKILL 1 */
                    switch (nbSkillUp2) {
                        case 1: dmgSkillUp2 += 10;
                            break;
                        case 2: cRateSkillUp2 += 10;
                            break;
                        case 3: dmgSkillUp2 += 10;
                            break;
                        case 4: cRateSkillUp2 += 15;
                            break;
                        case 5: cdSkill2--;
                            break;
                    }
                /* END SKILL 1 */
                
                /* SKILL 1 */
                    switch (nbSkillUp3) {
                        case 1: dmgSkillUp3 += 10;
                            break;
                        case 2: dmgSkillUp3 += 10;
                            break;
                        case 3: cdSkill3--;
                            break;
                        case 4: cdSkill3--;
                            break;
                    }
                /* END SKILL 1 */
            /* AND SKILL UP */
    
            super(
                name,
                element,
                (Rhp  != undefined ? Rhp  : 0 ) + hp,
                (Ratk != undefined ? Ratk : 0 ) + atk,
                (Rdef != undefined ? Rdef : 0 ) + def,
                (Rspd != undefined ? Rspd : 0 ) + spd,
                (RcRate != undefined ? RcRate : cRate),
                (RcDmg  != undefined ? RcDmg  : cDmg ),
                (Rres   != undefined ? Rres   : res  ),
                (Racc   != undefined ? Racc   : acc  ),
                cdSkill2,
                cdSkill3,
                dmgSkillUp1,
                dmgSkillUp2,
                dmgSkillUp3,
                cRateSkillUp1,
                cRateSkillUp2,
                cRateSkillUp3
            );
        }

        play() {
            this.atb = 0;

            this.ai();
        }
    
        ai() {
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
            var damage = 3.8*this.getActualAtk();
    
            damage = this.getHasCrit(this.AcRate, damage);
            
            this.getTarget().setDamage(damage);
        }
        skill2() {
            //{ATK}*({SPD} + 140)/50

            this.resetSkill2();
        }
        skill3() {
            //4.1*{ATK} x3

            this.resetSkill3();
        }
    }
/* END Stella */