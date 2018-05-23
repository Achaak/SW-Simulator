class fight {
    constructor() {
        this.allies     = new groupMonster();
        this.ennemies   = new groupMonster();

        this.allMonster = new groupMonster();

        this.buildings_and_flags = new buildings_and_flags();

        this.leaderSkill = null;
    }

    setAlly  (monster) { this.allies.setMonster(monster);   this.allMonster.setMonster(monster); }
    setEnnemy(monster) { this.ennemies.setMonster(monster); this.allMonster.setMonster(monster); }

    setGloryBuildings(e) { this.buildings_and_flags.setGloryBuildings(e); }
    setFlagsGvG      (e) { this.buildings_and_flags.setFlagsGvG(e);       }
    setLeaderSkill   (e) { this.leaderSkill = e };

    setEnnemiesAndAlliesToAllMonster() {
        for (var i = 0; i < this.allies.size(); i++) {
            this.allies.getMonster(i).setEnnemies(this.ennemies);
            this.allies.getMonster(i).setAllies(this.allies);
        }
        
        for (var i = 0; i < this.ennemies.size(); i++) {
            this.ennemies.getMonster(i).setEnnemies(this.allies);
            this.ennemies.getMonster(i).setAllies(this.ennemies);
        }
    }
    setBuildingsAndFlagsToAllAllies() {
        for (var i = 0; i < this.allies.size(); i++) {
            this.allies.getMonster(i).setBuildingsAndFlags(this.buildings_and_flags);
        }
    }
    setLeaderSkillToAllAllies() {
        for (var i = 0; i < this.allies.size(); i++) {
            this.allies.getMonster(i).setLeaderSkill(this.leaderSkill);
        }
    }

    start() {
        this.setEnnemiesAndAlliesToAllMonster();
        this.setBuildingsAndFlagsToAllAllies();
        this.setLeaderSkillToAllAllies();

        while(this.getBoolFightFinish()) {
            this.allMonster.atbTick();
            this.allMonster.sortGroup();

            var cptMonster = 0;
            while(cptMonster < this.allMonster.size() && this.getBoolFightFinish()) {
                if(this.allMonster.getMonster(cptMonster).atb > 100) {
                    this.allMonster.getMonster(cptMonster).play();

                    this.verifLifeGroupMonsters();
                    
                    this.allMonster.sortGroup();

                    cptMonster = 0;
                }
                else {
                    cptMonster++;
                }
            }

            this.verifLifeGroupMonsters();
        }
        
        if(this.allies.size() > 0)
            return true;
        else
            return false;
    }

    getBoolFightFinish() {
        return (this.allies.size() > 0 && this.ennemies.size() > 0);
    }

    verifLifeGroupMonsters() {
        this.allies.verifLifeMonsters();
        this.ennemies.verifLifeMonsters();
        this.allMonster.verifLifeMonsters();
    }
}