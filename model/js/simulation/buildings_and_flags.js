class buildings_and_flags {
    constructor() {
        this.crystal_Rock	         = 0; // ARCANE TOWER DMG
        this.guardstone	             = 0; // DEF
        this.water_sanctuary	     = 0; // WATER ATK
        this.fire_sanctuary	         = 0; // FIRE  ATK
        this.wind_sanctuary	         = 0; // WIND  ATK
        this.light_sanctuary	     = 0; // LIGHT ATK
        this.dark_sanctuary          = 0; // DARK  ATK
        this.ancient_sword           = 0; // ATK
        this.crystal_Altar           = 0; // HP
        this.sky_tribe_totem         = 0; // SPD
        this.arcane_Booster_Tower    = 0; // ARCANE TOWER SPD
        this.fallen_Ancient_Guardian = 0; // CDMG

        this.flag_of_rage   = 0; // CDMG GVG
        this.flag_of_hope   = 0; // HP   GVG
        this.flag_of_will   = 0; // DEF  GVG
        this.flag_of_battle = 0; // ATK  GVG
    }

    getCrystal_Rock()            { return this.crystal_Rock;            } // ARCANE TOWER DMG
    getGuardstone()              { return this.guardstone;              } // DEF
    getWater_sanctuary()         { return this.water_sanctuary;         } // WATER ATK
    getFire_sanctuary()          { return this.fire_sanctuary;          } // FIRE  ATK
    getWind_sanctuary()          { return this.wind_sanctuary;          } // WIND  ATK
    getLight_sanctuary()         { return this.light_sanctuary;         } // LIGHT ATK
    getDark_sanctuary()          { return this.dark_sanctuary;          } // DARK  ATK
    getAncient_sword()           { return this.ancient_sword;           } // ATK
    getCrystal_Altar()           { return this.crystal_Altar;           } // HP
    getSky_tribe_totem()         { return this.sky_tribe_totem;         } // SPD
    getArcane_Booster_Tower()    { return this.arcane_Booster_Tower;    } // ARCANE TOWER SPD
    getFallen_Ancient_Guardian() { return this.fallen_Ancient_Guardian; } // CDMG

    getFlag_of_rage()            { return this.flag_of_rage;            } // CDMG GVG
    getFlag_of_hope()            { return this.flag_of_hope;            } // HP   GVG
    getFlag_of_will()            { return this.flag_of_will;            } // DEF  GVG
    getFlag_of_battle()          { return this.flag_of_battle;          } // ATK  GVG

    setGloryBuildings(e) {
        switch(e.crystal_Rock) {
            case 1  : this.crystal_Rock = 0.01; break;
            case 2  : this.crystal_Rock = 0.02; break;
            case 3  : this.crystal_Rock = 0.03; break;
            case 4  : this.crystal_Rock = 0.04; break;
            case 5  : this.crystal_Rock = 0.05; break;
            case 6  : this.crystal_Rock = 0.06; break;
            case 7  : this.crystal_Rock = 0.07; break;
            case 8  : this.crystal_Rock = 0.08; break;
            case 9  : this.crystal_Rock = 0.09; break;
            case 10 : this.crystal_Rock = 0.10; break;
            default: this.crystal_Rock = 0; break;
        }
        switch(e.guardstone) {
            case 1  : this.guardstone = 0.02; break;
            case 2  : this.guardstone = 0.04; break;
            case 3  : this.guardstone = 0.06; break;
            case 4  : this.guardstone = 0.08; break;
            case 5  : this.guardstone = 0.10; break;
            case 6  : this.guardstone = 0.12; break;
            case 7  : this.guardstone = 0.14; break;
            case 8  : this.guardstone = 0.16; break;
            case 9  : this.guardstone = 0.18; break;
            case 10 : this.guardstone = 0.20; break;
            default: this.guardstone = 0; break;
        }
        switch(e.water_sanctuary) {
            case 1  : this.water_sanctuary = 0.03; break;
            case 2  : this.water_sanctuary = 0.05; break;
            case 3  : this.water_sanctuary = 0.07; break;
            case 4  : this.water_sanctuary = 0.09; break;
            case 5  : this.water_sanctuary = 0.11; break;
            case 6  : this.water_sanctuary = 0.13; break;
            case 7  : this.water_sanctuary = 0.15; break;
            case 8  : this.water_sanctuary = 0.17; break;
            case 9  : this.water_sanctuary = 0.19; break;
            case 10 : this.water_sanctuary = 0.21; break;
            default: this.water_sanctuary = 0; break;
        }
        switch(e.fire_sanctuary) {
            case 1  : this.fire_sanctuary = 0.03; break;
            case 2  : this.fire_sanctuary = 0.05; break;
            case 3  : this.fire_sanctuary = 0.07; break;
            case 4  : this.fire_sanctuary = 0.09; break;
            case 5  : this.fire_sanctuary = 0.11; break;
            case 6  : this.fire_sanctuary = 0.13; break;
            case 7  : this.fire_sanctuary = 0.15; break;
            case 8  : this.fire_sanctuary = 0.17; break;
            case 9  : this.fire_sanctuary = 0.19; break;
            case 10 : this.fire_sanctuary = 0.21; break;
            default: this.fire_sanctuary = 0; break;
        }
        switch(e.wind_sanctuary) {
            case 1  : this.wind_sanctuary = 0.03; break;
            case 2  : this.wind_sanctuary = 0.05; break;
            case 3  : this.wind_sanctuary = 0.07; break;
            case 4  : this.wind_sanctuary = 0.09; break;
            case 5  : this.wind_sanctuary = 0.11; break;
            case 6  : this.wind_sanctuary = 0.13; break;
            case 7  : this.wind_sanctuary = 0.15; break;
            case 8  : this.wind_sanctuary = 0.17; break;
            case 9  : this.wind_sanctuary = 0.19; break;
            case 10 : this.wind_sanctuary = 0.21; break;
            default: this.wind_sanctuary = 0; break;
        }
        switch(e.light_sanctuary) {
            case 1  : this.light_sanctuary = 0.03; break;
            case 2  : this.light_sanctuary = 0.05; break;
            case 3  : this.light_sanctuary = 0.07; break;
            case 4  : this.light_sanctuary = 0.09; break;
            case 5  : this.light_sanctuary = 0.11; break;
            case 6  : this.light_sanctuary = 0.13; break;
            case 7  : this.light_sanctuary = 0.15; break;
            case 8  : this.light_sanctuary = 0.17; break;
            case 9  : this.light_sanctuary = 0.19; break;
            case 10 : this.light_sanctuary = 0.21; break;
            default: this.light_sanctuary = 0; break;
        }
        switch(e.dark_sanctuary) {
            case 1  : this.dark_sanctuary = 0.03; break;
            case 2  : this.dark_sanctuary = 0.05; break;
            case 3  : this.dark_sanctuary = 0.07; break;
            case 4  : this.dark_sanctuary = 0.09; break;
            case 5  : this.dark_sanctuary = 0.11; break;
            case 6  : this.dark_sanctuary = 0.13; break;
            case 7  : this.dark_sanctuary = 0.15; break;
            case 8  : this.dark_sanctuary = 0.17; break;
            case 9  : this.dark_sanctuary = 0.19; break;
            case 10 : this.dark_sanctuary = 0.21; break;
            default: this.dark_sanctuary = 0; break;
        }
        switch(e.ancient_sword) {
            case 1  : this.ancient_sword = 0.02; break;
            case 2  : this.ancient_sword = 0.04; break;
            case 3  : this.ancient_sword = 0.06; break;
            case 4  : this.ancient_sword = 0.08; break;
            case 5  : this.ancient_sword = 0.10; break;
            case 6  : this.ancient_sword = 0.12; break;
            case 7  : this.ancient_sword = 0.14; break;
            case 8  : this.ancient_sword = 0.16; break;
            case 9  : this.ancient_sword = 0.18; break;
            case 10 : this.ancient_sword = 0.20; break;
            default: this.ancient_sword = 0; break;
        }
        switch(e.crystal_Altar) {
            case 1  : this.crystal_Altar = 0.02; break;
            case 2  : this.crystal_Altar = 0.04; break;
            case 3  : this.crystal_Altar = 0.06; break;
            case 4  : this.crystal_Altar = 0.08; break;
            case 5  : this.crystal_Altar = 0.10; break;
            case 6  : this.crystal_Altar = 0.12; break;
            case 7  : this.crystal_Altar = 0.14; break;
            case 8  : this.crystal_Altar = 0.16; break;
            case 9  : this.crystal_Altar = 0.18; break;
            case 10 : this.crystal_Altar = 0.20; break;
            default: this.crystal_Altar = 0; break;
        }
        switch(e.sky_tribe_totem) {
            case 1  : this.sky_tribe_totem = 0.02; break;
            case 2  : this.sky_tribe_totem = 0.03; break;
            case 3  : this.sky_tribe_totem = 0.05; break;
            case 4  : this.sky_tribe_totem = 0.06; break;
            case 5  : this.sky_tribe_totem = 0.08; break;
            case 6  : this.sky_tribe_totem = 0.09; break;
            case 7  : this.sky_tribe_totem = 0.11; break;
            case 8  : this.sky_tribe_totem = 0.12; break;
            case 9  : this.sky_tribe_totem = 0.14; break;
            case 10 : this.sky_tribe_totem = 0.15; break;
            default: this.sky_tribe_totem = 0; break;
        }
        switch(e.arcane_Booster_Tower) {
            case 1  : this.arcane_Booster_Tower = 0.02; break;
            case 2  : this.arcane_Booster_Tower = 0.04; break;
            case 3  : this.arcane_Booster_Tower = 0.06; break;
            case 4  : this.arcane_Booster_Tower = 0.08; break;
            case 5  : this.arcane_Booster_Tower = 0.10; break;
            case 6  : this.arcane_Booster_Tower = 0.12; break;
            case 7  : this.arcane_Booster_Tower = 0.14; break;
            case 8  : this.arcane_Booster_Tower = 0.16; break;
            case 9  : this.arcane_Booster_Tower = 0.18; break;
            case 10 : this.arcane_Booster_Tower = 0.20; break;
            default: this.arcane_Booster_Tower = 0; break;
        }
        switch(e.fallen_Ancient_Guardian) {
            case 1  : this.fallen_Ancient_Guardian = 0.02; break;
            case 2  : this.fallen_Ancient_Guardian = 0.05; break;
            case 3  : this.fallen_Ancient_Guardian = 0.07; break;
            case 4  : this.fallen_Ancient_Guardian = 0.10; break;
            case 5  : this.fallen_Ancient_Guardian = 0.12; break;
            case 6  : this.fallen_Ancient_Guardian = 0.15; break;
            case 7  : this.fallen_Ancient_Guardian = 0.17; break;
            case 8  : this.fallen_Ancient_Guardian = 0.20; break;
            case 9  : this.fallen_Ancient_Guardian = 0.22; break;
            case 10 : this.fallen_Ancient_Guardian = 0.25; break;
            default: this.fallen_Ancient_Guardian = 0; break;
        }
    }
    
    setFlagsGvG(e) {    
        switch(e.flag_of_rage) {
            case 1  : this.flag_of_rage = 0.02; break;
            case 2  : this.flag_of_rage = 0.05; break;
            case 3  : this.flag_of_rage = 0.07; break;
            case 4  : this.flag_of_rage = 0.09; break;
            case 5  : this.flag_of_rage = 0.12; break;
            case 6  : this.flag_of_rage = 0.15; break;
            case 7  : this.flag_of_rage = 0.17; break;
            case 8  : this.flag_of_rage = 0.20; break;
            case 9  : this.flag_of_rage = 0.22; break;
            case 10 : this.flag_of_rage = 0.25; break;
            default: this.flag_of_rage = 0; break;
        }
        switch(e.flag_of_hope) {
            case 1  : this.flag_of_hope = 0.02; break;
            case 2  : this.flag_of_hope = 0.04; break;
            case 3  : this.flag_of_hope = 0.06; break;
            case 4  : this.flag_of_hope = 0.08; break;
            case 5  : this.flag_of_hope = 0.10; break;
            case 6  : this.flag_of_hope = 0.12; break;
            case 7  : this.flag_of_hope = 0.14; break;
            case 8  : this.flag_of_hope = 0.16; break;
            case 9  : this.flag_of_hope = 0.18; break;
            case 10 : this.flag_of_hope = 0.20; break;
            default: this.flag_of_hope = 0; break;
        }
        switch(e.flag_of_will) {
            case 1  : this.flag_of_will = 0.02; break;
            case 2  : this.flag_of_will = 0.04; break;
            case 3  : this.flag_of_will = 0.06; break;
            case 4  : this.flag_of_will = 0.08; break;
            case 5  : this.flag_of_will = 0.10; break;
            case 6  : this.flag_of_will = 0.12; break;
            case 7  : this.flag_of_will = 0.14; break;
            case 8  : this.flag_of_will = 0.16; break;
            case 9  : this.flag_of_will = 0.18; break;
            case 10 : this.flag_of_will = 0.20; break;
            default: this.flag_of_will = 0; break;
        }
        switch(e.flag_of_battle) {
            case 1  : this.flag_of_battle = 0.02; break;
            case 2  : this.flag_of_battle = 0.04; break;
            case 3  : this.flag_of_battle = 0.06; break;
            case 4  : this.flag_of_battle = 0.08; break;
            case 5  : this.flag_of_battle = 0.10; break;
            case 6  : this.flag_of_battle = 0.12; break;
            case 7  : this.flag_of_battle = 0.14; break;
            case 8  : this.flag_of_battle = 0.16; break;
            case 9  : this.flag_of_battle = 0.18; break;
            case 10 : this.flag_of_battle = 0.20; break;
            default: this.flag_of_battle = 0; break;
        }
    }
}