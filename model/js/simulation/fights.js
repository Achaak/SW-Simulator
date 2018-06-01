class fights {
    constructor() {
        this.allies     = new Array();
        this.ennemies   = new Array();

        this.buildings_and_flags = new buildings_and_flags();

        this.leaderSkill = null;
    }

    setAlly    (monster)  { this.allies.push(monster); }
    setEnnemiesWaves(waves) { 
        this.ennemies = waves;    
    }

    setGloryBuildings(e) { this.buildings_and_flags.setGloryBuildings(e); }
    setFlagsGvG      (e) { this.buildings_and_flags.setFlagsGvG(e);       }
    setLeaderSkill   (e) { this.leaderSkill = e };

    setBuildingsAndFlagsToAllAllies() {
        for (var i = 0; i < this.allies.length; i++) {
            this.allies[i].setBuildingsAndFlags(this.buildings_and_flags);
        }
    }
    setLeaderSkillToAllAllies() {
        for (var i = 0; i < this.allies.length; i++) {
            this.allies[i].setLeaderSkill(this.leaderSkill);
        }
    }

    start() {
        var win = true;
        this.setBuildingsAndFlagsToAllAllies();
        this.setLeaderSkillToAllAllies();

        for (var i = 0; i < this.ennemies.length; i++) {
            var newFight = new fight();
                newFight.setBuildingsAndFlags(this.buildings_and_flags);
                newFight.setLeaderSkill(this.leaderSkill);

            for (var j = 0; j < this.allies.length; j++) {
                newFight.setAlly(this.allies[j]);
            }

            for (var j = 0; j < this.ennemies[i].length; j++) {
                newFight.setEnnemy(this.ennemies[i][j]);
            }

            var results = newFight.start();

            if(!results.win) win = false;
        }
        
        return {'win' : win};
    }
}