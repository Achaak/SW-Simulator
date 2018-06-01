/* DB10 */
    /* SMALL CRYSTAL */
        class Small_Crystal extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Small Crystal';
                /* ELEMENT    */ var element  = 'neutral';
                /* HP         */ var hp       = 13170;
                /* ATK        */ var atk      = 1477;
                /* DEF        */ var def      = 1097;
                /* SPD        */ var spd      = 109;
                /* CRATE      */ var cRate    = 0;
                /* CDMG       */ var cDmg     = 0;
                /* RES        */ var res      = 60;
                /* ACC        */ var acc      = 15;
                /* CD SKILL 2 */ var cdSkill2 = null;
                /* CD SKILL 3 */ var cdSkill3 = null;

                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;
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
        
                this.skill1();
            }

            skill1() {
                var damage = 2*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);

                this.target.setDamage(damage)*0.3;
            }
            skill2() {}
            skill3() {}
        }
    /* END SMALL CRYSTAL */

    /* BIG CRYSTAL */
        class Big_Crystal extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Big Crystal';
                /* ELEMENT    */ var element  = 'neutral';
                /* HP         */ var hp       = 18165;
                /* ATK        */ var atk      = 1477;
                /* DEF        */ var def      = 1197;
                /* SPD        */ var spd      = 94;
                /* CRATE      */ var cRate    = 0;
                /* CDMG       */ var cDmg     = 0;
                /* RES        */ var res      = 60;
                /* ACC        */ var acc      = 15;
                /* CD SKILL 2 */ var cdSkill2 = null;
                /* CD SKILL 3 */ var cdSkill3 = null;
                
                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;
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
        
                this.skill1();
            }

            skill1() {
                var damage = 2*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);

                this.target.setDamage(damage)*0.3;
            }
            skill2() {}
            skill3() {}
        }
    /* END BIG CRYSTAL */

    /* CRYSTAL WAVE 3 */
        class Crystal_W3 extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Crystal';
                /* ELEMENT    */ var element  = 'neutral';
                /* HP         */ var hp       = 21750;
                /* ATK        */ var atk      = 1921;
                /* DEF        */ var def      = 1443;
                /* SPD        */ var spd      = 133;
                /* CRATE      */ var cRate    = 0;
                /* CDMG       */ var cDmg     = 0;
                /* RES        */ var res      = 70;
                /* ACC        */ var acc      = 25;
                /* CD SKILL 2 */ var cdSkill2 = null;
                /* CD SKILL 3 */ var cdSkill3 = null;
                
                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;
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
        
                this.skill1();
            }

            skill1() {
                var damage = 2*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);

                this.target.setDamage(damage)*0.3;
            }
            skill2() {}
            skill3() {}
        }
    /* END CRYSTAL WAVE 3 */

    /* L. CRYSTAL WAVE 5 */
        class L_Crystal_W5 extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Crystal';
                /* ELEMENT    */ var element  = 'neutral';
                /* HP         */ var hp       = 84930;
                /* ATK        */ var atk      = 1203;
                /* DEF        */ var def      = 1002;
                /* SPD        */ var spd      = 135;
                /* CRATE      */ var cRate    = 15;
                /* CDMG       */ var cDmg     = 0;
                /* RES        */ var res      = 70;
                /* ACC        */ var acc      = 30;
                /* CD SKILL 2 */ var cdSkill2 = null;
                /* CD SKILL 3 */ var cdSkill3 = null;
                
                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;
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
        
                this.skill1();
            }

            skill1() {
                var damage = 2*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);

                this.target.setDamage(damage)*0.3;
            }
            skill2() {}
            skill3() {}
        }
    /* END L. CRYSTAL WAVE 5 */

    /* R. CRYSTAL WAVE 5 */
        class R_Crystal_W5 extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Crystal';
                /* ELEMENT    */ var element  = 'neutral';
                /* HP         */ var hp       = 299955;
                /* ATK        */ var atk      = 1496;
                /* DEF        */ var def      = 1002;
                /* SPD        */ var spd      = 99;
                /* CRATE      */ var cRate    = 15;
                /* CDMG       */ var cDmg     = 0;
                /* RES        */ var res      = 70;
                /* ACC        */ var acc      = 20;
                /* CD SKILL 2 */ var cdSkill2 = null;
                /* CD SKILL 3 */ var cdSkill3 = null;
                
                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;
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
        
                this.skill1();
            }

            skill1() {
                var damage = 2*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);

                this.target.setDamage(damage)*0.3;
            }
            skill2() {}
            skill3() {}
        }
    /* END R. CRYSTAL WAVE 5 */

    
    /* MINI BOSS */
        class Mini_Boss extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Mini Boss';
                /* ELEMENT    */ var element  = 'fire';
                /* HP         */ var hp       = 76500;
                /* ATK        */ var atk      = 3608;
                /* DEF        */ var def      = 2117;
                /* SPD        */ var spd      = 125;
                /* CRATE      */ var cRate    = 15;
                /* CDMG       */ var cDmg     = 0;
                /* RES        */ var res      = 70;
                /* ACC        */ var acc      = 20;
                /* CD SKILL 2 */ var cdSkill2 = null;
                /* CD SKILL 3 */ var cdSkill3 = null;
                
                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;
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
        
                this.skill1();
            }

            skill1() {
                var damage = 2*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);

                this.target.setDamage(damage)*0.3;
            }
            skill2() {}
            skill3() {}
        }
    /* END MINI BOSS */

    /* BOSS */
        class Boss extends Monster{
            constructor(Rhp, Ratk, Rdef, Rspd, RcRate, RcDmg, Rres, Racc, nbSkillUp1, nbSkillUp2, nbSkillUp3) {
                /* NAME       */ var name     = 'Boss';
                /* ELEMENT    */ var element  = 'fire';
                /* HP         */ var hp       = 169995;
                /* ATK        */ var atk      = 5062;
                /* DEF        */ var def      = 2502;
                /* SPD        */ var spd      = 135;
                /* CRATE      */ var cRate    = 15;
                /* CDMG       */ var cDmg     = 0;
                /* RES        */ var res      = 69;
                /* ACC        */ var acc      = 20;
                /* CD SKILL 2 */ var cdSkill2 = null;
                /* CD SKILL 3 */ var cdSkill3 = null;
                
                /* SKILL UP */
                    var dmgSkillUp1   = 0;
                    var dmgSkillUp2   = 0;
                    var dmgSkillUp3   = 0;
                    var effectRateSkillUp1 = 0;
                    var effectRateSkillUp2 = 0;
                    var effectRateSkillUp3 = 0;
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
        
                this.skill1();
            }

            skill1() {
                var damage = 2*this.getActualAtk();
                    damage = this.getHasCrit(this.getActualCRate(), damage, this.dmgSkillUp1);

                this.target.setDamage(damage)*0.3;
            }
            skill2() {}
            skill3() {}
        }
    /* END BOSS */
/* END DB10 */

var db10 = [
    [ Small_Crystal, Big_Crystal, Big_Crystal, Small_Crystal ],
    [ Big_Crystal  , Big_Crystal, Big_Crystal  ],
    [ Crystal_W3   , Mini_Boss  , Crystal_W3   ],
    [ Small_Crystal, Big_Crystal, Big_Crystal, Big_Crystal, Small_Crystal ],
    [ L_Crystal_W5 , Boss       , R_Crystal_W5 ]
];