class fight {
    constructor() {
        this.allies     = new groupMonster();
        this.ennemies   = new groupMonster();

        this.allMonster = new groupMonster();

        this.buildings_and_flags = new buildings_and_flags();
    }

    setAlly  (monster) { this.allies.setMonster(monster);   this.allMonster.setMonster(monster); }
    setEnnemy(monster) { this.ennemies.setMonster(monster); this.allMonster.setMonster(monster); }

    setGloryBuildings(e) { this.buildings_and_flags.setGloryBuildings(e); }
    setFlagsGvG      (e) { this.buildings_and_flags.setFlagsGvG(e);       }

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

    start() {
        this.setEnnemiesAndAlliesToAllMonster();
        this.setBuildingsAndFlagsToAllAllies();
        this.allMonster.roundUp();


        while(this.getBoolFightFinish()) {
            this.allMonster.roundUp();
            this.allMonster.sortGroup();

            for (var i = 0; i < this.allMonster.size() && this.getBoolFightFinish(); i++) {
                if(this.allMonster.getMonster(i).atb > 0) {
                    this.allMonster.getMonster(i).play();

                    this.verifLifeGroupMonsters();

                    this.allMonster.sortGroup();

                    
                    /*console.log(this.allMonster.getMonster(i).name + " " + this.allMonster.getMonster(i).Ahp);
                    console.log(this.allies);
                    console.log(this.ennemies);
                    console.log(this.allMonster);*/
                }
            }

            this.verifLifeGroupMonsters();

            //sleep(1);
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