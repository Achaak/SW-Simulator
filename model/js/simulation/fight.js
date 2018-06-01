class fight {
    constructor() {
        this.allies     = new groupMonster();
        this.ennemies   = new groupMonster();

        this.allMonster = new groupMonster();

        this.buildings_and_flags = null;

        this.leaderSkill = null;
    }

    setAlly  (monster) { this.allies.setMonster(monster);   this.allMonster.setMonster(monster); }
    setEnnemy(monster) { this.ennemies.setMonster(monster); this.allMonster.setMonster(monster); }

    setBuildingsAndFlags(e) { this.buildings_and_flags = e; }
    setLeaderSkill      (e) { this.leaderSkill         = e; }

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

    start() {
        this.setEnnemiesAndAlliesToAllMonster();

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
        
        var win = false;
        if(this.allies.size() > 0)
            win = true;
            
        return {'win' : win};
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