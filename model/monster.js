class Monster {
    constructor(
        name, 
        element, 
        hp, atk, def, spd, 
        cRate, cDmg, res, acc, 
        cdSkill2, cdSkill3, 
        dmgSkillUp1, dmgSkillUp2, dmgSkillUp3, 
        cRateSkillUp1, cRateSkillUp2, cRateSkillUp3
    ) {
        this.name    = name;
        this.element = element;

        /* STATS */
            /* ACTUAL */
                this.Ahp    = hp;
                this.Aatk   = atk;
                this.Adef   = def;
                this.Aspd   = spd;
                this.AcRate = cRate;
                this.AcDmg  = cDmg;
                this.Ares   = res;
                this.Aacc   = acc; 
            /* END ACTUAL */       

            /* TOTAL */
                this.Thp    = hp;
                this.Tatk   = atk;
                this.Tdef   = def;
                this.Tspd   = spd;
                this.TcRate = cRate;
                this.TcDmg  = cDmg;
                this.Tres   = res;
                this.Tacc   = acc;
            /* END TOTAL */

            /* BASE */
                this.Bhp    = hp;
                this.Batk   = atk;
                this.Bdef   = def;
                this.Bspd   = spd;
                this.BcRate = cRate;
                this.BcDmg  = cDmg;
                this.Bres   = res;
                this.Bacc   = acc;
            /* BASE */
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

            this.cRateSkillUp1 = cRateSkillUp1;
            this.cRateSkillUp2 = cRateSkillUp2;
            this.cRateSkillUp3 = cRateSkillUp3;
        /* ENS SKILL */
    
        this.atb = 0;

        this.ennemies = null;
        this.allies   = null;
        this.buildings_and_flags = null;

        /* LEADER SKILL */
            this.leaderSkillAtk   = null;
            this.leaderSkillCRate = null;
            this.leaderSkillCDmg  = null;
            this.leaderSkillSpd   = null;
            this.leaderSkillHp    = null;
            this.leaderSkillDef   = null;
        /* END LEADER SKILL */
    }

    setStatsRune(hp, atk, def, spd, cRate, cDmg, res, acc) {
        /* ACTUAL */
            this.Ahp    += hp;
            this.Aatk   += atk;
            this.Adef   += def;
            this.Aspd   += spd;
            this.AcRate = cRate;
            this.AcDmg  = cDmg;
            this.Ares   = res;
            this.Aacc   = acc; 
        /* END ACTUAL */       

        /* TOTAL */
            this.Thp    += hp;
            this.Tatk   += atk;
            this.Tdef   += def;
            this.Tspd   += spd;
            this.TcRate = cRate;
            this.TcDmg  = cDmg;
            this.Tres   = res;
            this.Tacc   = acc;
        /* END TOTAL */
    }
    setEnnemies(ennemies) { this.ennemies = ennemies; }    
    setAllies  (allies)   { this.allies   = allies;   }
    setBuildingsAndFlags(buildings_and_flags) { this.buildings_and_flags = buildings_and_flags; }   
    setLeaderSkill(leaderSkill) { 
        if(leaderSkill.atk   != undefined) this.leaderSkillAtk   = leaderSkill.atk;
        if(leaderSkill.cRate != undefined) this.leaderSkillCRate = leaderSkill.cRate;
        if(leaderSkill.cDmg  != undefined) this.leaderSkillCDmg  = leaderSkill.cDmg;
        if(leaderSkill.spd   != undefined) this.leaderSkillSpd   = leaderSkill.spd;
        if(leaderSkill.hp    != undefined) this.leaderSkillHp    = leaderSkill.hp;
        if(leaderSkill.def   != undefined) this.leaderSkillDef   = leaderSkill.def;
    }

    setDamage(damage) {
        var hpLost = damage*this.dmgReduction();

        this.Ahp -= hpLost;
        
        return hpLost;
    }
    setHpFlat(hp) {
        this.Ahp += hp;

        if(this.Ahp > this.Bhp) this.Ahp = this.Bhp;
    }

    getTarget() {
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
        
        return prioTarget[0].monster;
    }
    getActualAtk() { 
        var buffAndDebuffAtk  = (this.buffAtk   > 0 ? 0.5 : 0);
            buffAndDebuffAtk -= (this.debuffAtk > 0 ? 0.5 : 0);
            buffAndDebuffAtk  = (buffAndDebuffAtk == 0 ? 1 : buffAndDebuffAtk);

        //var gloryBuilding = (this.buildings_and_flags != null ? this.buildings_and_flags.get : 0);
        
        return (this.Aatk)*buffAndDebuffAtk; 

        //(base atk * (1 + atk% from glory buildings + atk% from leader skills)) 
        // * skill multiplier * 
        // (1 + dmg from skillups% + base cd% + cd% from runes + cd% from glory building + cd% from leader skill)
    }
    getActualSpd() { 
        var buffAndDebuffSpd  = (this.buffAtkSpd   > 0 ? 0.3 : 0);
            buffAndDebuffSpd -= (this.debuffAtkSpd > 0 ? 0.3 : 0);
            buffAndDebuffSpd  = (buffAndDebuffSpd == 0 ? 1 : buffAndDebuffSpd);

        return (this.Aspd)*buffAndDebuffSpd; 
    }
    
    getHasCrit(cRate, damage) {
        var random = Math.random();

        if(random < (cRate/100)) return damage*(1+(this.AcDmg/100));
        else                     return damage;
    }

    RoundUp() {
        this.atb += (this.getActualSpd()*0.7);

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
        return 1000/(this.Adef*3.5+1140);
    }

    resetSkill2() { this.AcdSkill2 = this.AcdSkill2; }
    resetSkill3() { this.AcdSkill3 = this.AcdSkill3; }
}