class Monster {
    constructor(
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
        cdSkill2, cdSkill3, 
        dmgSkillUp1, dmgSkillUp2, dmgSkillUp3, 
        effectRateSkillUp1, effectRateSkillUp2, effectRateSkillUp3
    ) {
        this.name    = name;
        this.element = element;

        /* STATS */
            /* BASE */
                this.Bhp    = hp;
                this.Batk   = atk;
                this.Bdef   = def;
                this.Bspd   = spd;
                this.BcRate = cRate;
                this.BcDmg  = cDmg;
                this.Bres   = res;
                this.Bacc   = acc;
            /* END BASE */

            /* ACTUAL */
                this.Ahp    = hp  + (Rhp    != undefined ? Rhp    : 0    );
                this.Aatk   = atk + (Ratk   != undefined ? Ratk   : 0    );
                this.Adef   = def + (Rdef   != undefined ? Rdef   : 0    );
                this.Aspd   = spd + (Rspd   != undefined ? Rspd   : 0    );
                this.AcRate =       (RcRate != undefined ? RcRate : cRate);
                this.AcDmg  =       (RcDmg  != undefined ? RcDmg  : cDmg );
                this.Ares   =       (Rres   != undefined ? Rres   : res  );
                this.Aacc   =       (Racc   != undefined ? Racc   : acc  );
            /* END ACTUAL */
            
            /* TOTAL */
                this.Thp    = this.Ahp;
                this.Tatk   = this.Aatk;
                this.Tdef   = this.Adef;
                this.Tspd   = this.Aspd;
                this.TcRate = this.AcRate;
                this.TcDmg  = this.AcDmg;
                this.Tres   = this.Ares;
                this.Tacc   = this.Aacc;
            /* END TOTAL */
        /* END STATS */

        /* BUFF */
            this.buffAtk         = 0;
            this.buffDef         = 0;
            this.buffCRate       = 0;
            this.buffCRes        = 0;
            this.buffAtkSpd      = 0;
            this.buffRecovery    = 0;
            this.buffCounter     = 0;
            this.buffImmunity    = 0;
            this.buffInvincible  = 0;
            this.buffReflectDmg  = 0;
            this.buffShieldDome  = 0;
            this.buffEndure      = 0;
            this.buffDefend      = 0;
            this.buffProtectSoul = 0;
            this.buffShield      = 0;
            this.buffThreat      = 0;
        /* END BUFF */

        /* DEBUFF */
            this.debuffChancesOfMissing    = 0;
            this.debuffAtk                 = 0;
            this.debuffDef                 = 0;
            this.debuffAtkSpd              = 0;
            this.debuffBenefEffectsBlocked = 0;
            this.debuffBomb                = 0;
            this.debuffProvoke             = 0;
            this.debuffSleep               = 0;
            this.debuffContinuousDmg       = 0;
            this.debuffFreeze              = 0;
            this.debuffStun                = 0;
            this.debuffUncoverable         = 0;
            this.debuffSilence             = 0;
            this.debuffBrand               = 0;
            this.debuffOblivion            = 0;
        /* END DEBUFF */
        
        /* SKILL */
            this.AcdSkill2 = 0;
            this.AcdSkill3 = 0;

            this.BcdSkill2 = cdSkill2;
            this.BcdSkill3 = cdSkill3;

            
            this.dmgSkillUp1   = dmgSkillUp1;
            this.dmgSkillUp2   = dmgSkillUp2;
            this.dmgSkillUp3   = dmgSkillUp3;

            this.effectRateSkillUp1 = effectRateSkillUp1;
            this.effectRateSkillUp2 = effectRateSkillUp2;
            this.effectRateSkillUp3 = effectRateSkillUp3;
        /* ENS SKILL */
    
        this.atb = 0;

        this.target   = null;
        this.ennemies = null;
        this.allies   = null;
        this.buildings_and_flags = null;

        /* LEADER SKILL */
            this.leaderSkillAtk   = 0;
            this.leaderSkillCRate = 0;
            this.leaderSkillCDmg  = 0;
            this.leaderSkillSpd   = 0;
            this.leaderSkillHp    = 0;
            this.leaderSkillDef   = 0;
        /* END LEADER SKILL */
    }
    
    setEnnemies(ennemies) { this.ennemies = ennemies; }    
    setAllies  (allies)   { this.allies   = allies;   }
    setBuildingsAndFlags(buildings_and_flags) { this.buildings_and_flags = buildings_and_flags; }   
    setLeaderSkill(leaderSkill) { 
        if(leaderSkill.leaderType == 'atk'  ) this.leaderSkillAtk   = leaderSkill.leaderValue/100;
        if(leaderSkill.leaderType == 'cRate') this.leaderSkillCRate = leaderSkill.leaderValue/100;
        if(leaderSkill.leaderType == 'cDmg' ) this.leaderSkillCDmg  = leaderSkill.leaderValue/100;
        if(leaderSkill.leaderType == 'spd'  ) this.leaderSkillSpd   = leaderSkill.leaderValue/100;
        if(leaderSkill.leaderType == 'hp'   ) this.leaderSkillHp    = leaderSkill.leaderValue/100;
        if(leaderSkill.leaderType == 'def'  ) this.leaderSkillDef   = leaderSkill.leaderValue/100;
        
        this.setAtkStartBattle();
        this.setCRateStartBattle();
        this.setCDmgStartBattle();
        this.setSpdStartBattle();
        this.setHpStartBattle();
        this.setDefStartBattle();
    }

    setDamage(damage) {
        var debuffBrand = (this.debuffBrand > 0 ? 1.3 : 1);

        var hpLost = (damage*debuffBrand)*this.dmgReduction();

        this.Ahp -= hpLost;
        
        return hpLost;
    }
    setHpFlat(hp) {
        this.Ahp += hp;

        if(this.Ahp > this.Thp) this.Ahp = this.Thp;
    }
    setAtb(atbValue) { this.atb += atbValue; }

    newTarget() {
        var prioTarget = new Array();

        for (var i = 0; i < this.ennemies.size(); i++) {
            var valPrio = 0

            if(this.ennemies.getMonster(i).debuffDef > 0)
                valPrio += 20;
            if(this.ennemies.getMonster(i).debuffBrand > 0)
                valPrio += 20;

            if(elementalAdvantage(this.element, this.ennemies.getMonster(i).element) == 1)
                valPrio += 10;
            else if(elementalAdvantage(this.element, this.ennemies.getMonster(i).element) == 2)
                valPrio += 9;
            else
                valPrio += 8;

            if(
                this.ennemies.getMonster(i).debuffFreeze > 0 ||
                this.ennemies.getMonster(i).debuffStun   > 0 ||
                this.ennemies.getMonster(i).debuffSleep  > 0
            )
                valPrio -= 3;
        
            prioTarget.push({monster: this.ennemies.getMonster(i), val: valPrio});
        }

        prioTarget.sort(dynamicSort('-val'));
        
        this.target = prioTarget[0].monster;
    }
    setTarget(target) {
        this.target = target;
    }

    setAtkStartBattle() { 
        //(base atk * (1 + atk% from glory buildings + atk% from leader skills)) 
        // * skill multiplier * 
        // (1 + dmg from skillups% + base cd% + cd% from runes + cd% from glory building + cd% from leader skill)

        var atkBuildingsAndFlags = 0;
        if(this.buildings_and_flags != null) {
            atkBuildingsAndFlags += this.buildings_and_flags.getAncient_sword();

            switch (this.element) {
                case 'water': atkBuildingsAndFlags += this.buildings_and_flags.getWater_sanctuary(); break;
                case 'fire' : atkBuildingsAndFlags += this.buildings_and_flags.getFire_sanctuary() ; break;
                case 'wind' : atkBuildingsAndFlags += this.buildings_and_flags.getWind_sanctuary() ; break;
                case 'light': atkBuildingsAndFlags += this.buildings_and_flags.getLight_sanctuary(); break;
                case 'dark' : atkBuildingsAndFlags += this.buildings_and_flags.getDark_sanctuary() ; break;
            }
            
            atkBuildingsAndFlags += this.buildings_and_flags.getFlag_of_battle();
        }
        
        this.Aatk = this.Tatk = (this.Batk*(1 + atkBuildingsAndFlags + this.leaderSkillAtk)+(this.Tatk-this.Batk));
    }
    setCRateStartBattle() {
        this.TcRate += this.leaderSkillCRate*100;
        if(this.TcRate > 100) this.TcRate = 100;

        this.AcRate = this.TcRate;
    }
    setCDmgStartBattle() {
        var cDmgBuildingsAndFlags = 0;
        if(this.buildings_and_flags != null) {
            cDmgBuildingsAndFlags += this.buildings_and_flags.getFallen_Ancient_Guardian();            
            cDmgBuildingsAndFlags += this.buildings_and_flags.getFlag_of_rage();
        }
        
        this.AcDmg = this.TcDmg = (this.BcDmg*(1 + cDmgBuildingsAndFlags + this.leaderSkillCDmg)+(this.TcDmg-this.BcDmg));
    }
    setSpdStartBattle() { 
        var spdBuildingsAndFlags = 0;
        if(this.buildings_and_flags != null) {
            spdBuildingsAndFlags += this.buildings_and_flags.getAncient_sword();            
            spdBuildingsAndFlags += this.buildings_and_flags.getFlag_of_battle();
        }

        this.Aspd = this.Tspd = (this.Bspd*(1 + spdBuildingsAndFlags + this.leaderSkillSpd)+(this.Tspd-this.Bspd));
    }
    setHpStartBattle() {
        var hpBuildingsAndFlags = 0;
        if(this.buildings_and_flags != null) {
            hpBuildingsAndFlags += this.buildings_and_flags.getCrystal_Altar();            
            hpBuildingsAndFlags += this.buildings_and_flags.getFlag_of_hope();
        }
        
        this.Ahp = this.Thp = (this.Bhp*(1 + hpBuildingsAndFlags + this.leaderSkillHp)+(this.Thp-this.Bhp));
    }
    setDefStartBattle() {
        var defBuildingsAndFlags = 0;
        if(this.buildings_and_flags != null) {
            defBuildingsAndFlags += this.buildings_and_flags.getGuardstone();            
            defBuildingsAndFlags += this.buildings_and_flags.getFlag_of_will();
        }
        
        this.Adef = this.Tdef = (this.Bdef*(1 + defBuildingsAndFlags + this.leaderSkillDef)+(this.Tdef-this.Bdef));
    }

    getActualAtk() {
        var buffAndDebuffAtk  = 1;
            buffAndDebuffAtk += (this.buffAtk   > 0 ? 0.5 : 0);
            buffAndDebuffAtk -= (this.debuffAtk > 0 ? 0.5 : 0);

        return this.Aatk*buffAndDebuffAtk;
    }
    getActualCRate () {
        var buffCRate  = (this.buffCRate > 0 ? 30 : 0) + this.AcRate;
        if(buffCRate > 100) buffCRate = 100;

        if      (elementalAdvantage(this.element, this.target.element) == 1) buffCRate+= 15;
        else if (elementalAdvantage(this.element, this.target.element) == 2) buffCRate-= 15;
        if(buffCRate > 100) buffCRate = 100;
        
        return buffCRate;
    }
    getActualCDmg () {
        return this.AcDmg;
    }
    getActualSpd() { 
        var buffAndDebuffSpd = 1;
            buffAndDebuffSpd += (this.buffAtkSpd   > 0 ? 0.3 : 0);
            buffAndDebuffSpd -= (this.debuffAtkSpd > 0 ? 0.3 : 0);

        return this.Aspd*buffAndDebuffSpd; 
    }
    getActualHp () {
        return this.Ahp;
    }
    getActualDef() {
        var buffAndDebuffDef  = 1;
            buffAndDebuffDef += (this.buffDef   > 0 ? 0.7 : 0);
            buffAndDebuffDef -= (this.debuffDef > 0 ? 0.7 : 0);
            
        return this.Adef*buffAndDebuffDef;
    }
    
    getHasCrit(cRate, damage, dmgSkillUp) {
        // (base atk * (1 + atk% from glory buildings + atk% from leader skills)) 
        // * skill multiplier * 
        // (1 + dmg from skillups% + base cd% + cd% from runes + cd% from glory building + cd% from leader skill)

        var random = Math.random();

        var dmgSkillUp = dmgSkillUp/100;

        if(random < (cRate/100)) return damage*(1 + dmgSkillUp + (this.getActualCDmg()/100));
        else                     return damage*(1 + dmgSkillUp);
    }

    getHasAcc(rateSkillUp, rateSkill) {
        var avantageElemental = 0;
        if      (elementalAdvantage(this.element, this.target.element) == 1) avantageElemental += 15;
        else if (elementalAdvantage(this.element, this.target.element) == 2) avantageElemental -= 15;

        var chance = this.target.Tres - (this.Tacc+avantageElemental);
        if(chance < 15) chance = 15;


        var fRateSkill = rateSkill + rateSkillUp;
        

        if(getRandomInt(0, 100) >= chance && getRandomInt(0, 100) <= fRateSkill)
            return true;
        else
            return false;
    }

    atbTick() {
       // console.log(this.atb);
        this.atb += (this.getActualSpd()*0.07);
    }

    RoundUp() {
        /* REDUC CD BUFF */
            this.buffAtk         = (this.buffAtk         > 0 ? this.buffAtk--         : 0);
            this.buffDef         = (this.buffDef         > 0 ? this.buffDef--         : 0);
            this.buffCRate       = (this.buffCRate       > 0 ? this.buffCRate--       : 0);
            this.buffCRes        = (this.buffCRes        > 0 ? this.buffCRes--        : 0);
            this.buffAtkSpd      = (this.buffAtkSpd      > 0 ? this.buffAtkSpd--      : 0);
            this.buffRecovery    = (this.buffRecovery    > 0 ? this.buffRecovery--    : 0);
            this.buffCounter     = (this.buffCounter     > 0 ? this.buffCounter--     : 0);
            this.buffImmunity    = (this.buffImmunity    > 0 ? this.buffImmunity--    : 0);
            this.buffInvincible  = (this.buffInvincible  > 0 ? this.buffInvincible--  : 0);
            this.buffReflectDmg  = (this.buffReflectDmg  > 0 ? this.buffReflectDmg--  : 0);
            this.buffShieldDome  = (this.buffShieldDome  > 0 ? this.buffShieldDome--  : 0);
            this.buffEndure      = (this.buffEndure      > 0 ? this.buffEndure--      : 0);
            this.buffDefend      = (this.buffDefend      > 0 ? this.buffDefend--      : 0);
            this.buffProtectSoul = (this.buffProtectSoul > 0 ? this.buffProtectSoul-- : 0);
            this.buffShield      = (this.buffShield      > 0 ? this.buffShield--      : 0);
            this.buffThreat      = (this.buffThreat      > 0 ? this.buffThreat--      : 0);
        /* END REDUC CD BUFF */

        /* REDUC CD DEBUFF */
            this.debuffChancesOfMissing    = (this.debuffChancesOfMissing    > 0 ? this.debuffChancesOfMissing--    : 0);
            this.debuffAtk                 = (this.debuffAtk                 > 0 ? this.debuffAtk--                 : 0);
            this.debuffDef                 = (this.debuffDef                 > 0 ? this.debuffDef--                 : 0);
            this.debuffAtkSpd              = (this.debuffAtkSpd              > 0 ? this.debuffAtkSpd--              : 0);
            this.debuffBenefEffectsBlocked = (this.debuffBenefEffectsBlocked > 0 ? this.debuffBenefEffectsBlocked-- : 0);
            this.debuffBomb                = (this.debuffBomb                > 0 ? this.debuffBomb--                : 0);
            this.debuffProvoke             = (this.debuffProvoke             > 0 ? this.debuffProvoke--             : 0);
            this.debuffSleep               = (this.debuffSleep               > 0 ? this.debuffSleep--               : 0);
            this.debuffContinuousDmg       = (this.debuffContinuousDmg       > 0 ? this.debuffContinuousDmg--       : 0);
            this.debuffFreeze              = (this.debuffFreeze              > 0 ? this.debuffFreeze--              : 0);
            this.debuffStun                = (this.debuffStun                > 0 ? this.debuffStun--                : 0);
            this.debuffUncoverable         = (this.debuffUncoverable         > 0 ? this.debuffUncoverable--         : 0);
            this.debuffSilence             = (this.debuffSilence             > 0 ? this.debuffSilence--             : 0);
            this.debuffBrand               = (this.debuffBrand               > 0 ? this.debuffBrand--               : 0);
            this.debuffOblivion            = (this.debuffOblivion            > 0 ? this.debuffOblivion--            : 0);
        /* END REDUC CD DEBUFF */

        /* SKILL */
            if(this.AcdSkill2 > 0) this.AcdSkill2--;
            if(this.AcdSkill3 > 0) this.AcdSkill3--;
        /* END SKILL */
    }

    setBuffAtk        (val) { this.buffAtk         = val; }
    setBuffDef        (val) { this.buffDef         = val; }
    setBuffCRate      (val) { this.buffCRate       = val; }
    setBuffCRes       (val) { this.buffCRes        = val; }
    setBuffAtkSpd     (val) { this.buffAtkSpd      = val; }
    setBuffRecovery   (val) { this.buffRecovery    = val; }
    setBuffCounter    (val) { this.buffCounter     = val; }
    setBuffImmunity   (val) { this.buffImmunity    = val; }
    setBuffInvincible (val) { this.buffInvincible  = val; }
    setBuffReflectDmg (val) { this.buffReflectDmg  = val; }
    setBuffShieldDome (val) { this.buffShieldDome  = val; }
    setBuffEndure     (val) { this.buffEndure      = val; }
    setBuffDefend     (val) { this.buffDefend      = val; }
    setBuffProtectSoul(val) { this.buffProtectSoul = val; }
    setBuffShield     (val) { this.buffShield      = val; }
    setBuffThreat     (val) { this.buffThreat      = val; }
    
    setDebuffChancesOfMissing    (val) { this.debuffChancesOfMissing    = val; }
    setDebuffAtk                 (val) { this.debuffAtk                 = val; }
    setDebuffDef                 (val) { this.debuffDef                 = val; }
    setDebuffAtkSpd              (val) { this.debuffAtkSpd              = val; }
    setDebuffBenefEffectsBlocked (val) { this.debuffBenefEffectsBlocked = val; }
    setDebuffBomb                (val) { this.debuffBomb                = val; }
    setDebuffProvoke             (val) { this.debuffProvoke             = val; }
    setDebuffSleep               (val) { this.debuffSleep               = val; }
    setDebuffContinuousDmg       (val) { this.debuffContinuousDmg       = val; }
    setDebuffFreeze              (val) { this.debuffFreeze              = val; }
    setDebuffStun                (val) { this.debuffStun                = val; }
    setDebuffUncoverable         (val) { this.debuffUncoverable         = val; }
    setDebuffSilence             (val) { this.debuffSilence             = val; }
    setDebuffBrand               (val) { this.debuffBrand               = val; }
    setDebuffOblivion            (val) { this.debuffOblivion            = val; }

    dmgReduction() {
        return 1000/(this.getActualDef()*3.5+1140);
    }

    resetSkill2() { this.AcdSkill2 = this.AcdSkill2; }
    resetSkill3() { this.AcdSkill3 = this.AcdSkill3; }
}