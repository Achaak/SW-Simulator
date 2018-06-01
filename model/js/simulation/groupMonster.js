class groupMonster {
    constructor() {
        this.group = new Array();
    }

    setMonster(monster)   { this.group.push(monster); }
    setMonsters(monsters) { 
        for (var i = 0; i < monsters.length; i++) {
            this.group.push(monsters[i]); 
        }
    }

    sortGroup() { this.group.sort(dynamicSort('-atb')); }

    atbTick() {        
        for (var i = 0; i < this.group.length; i++)
            this.group[i].atbTick();

        this.sortGroup();
    }

    size() {return this.group.length; }

    getMonster(i) { return this.group[i]; }
    getMonsters() { return this.group;    }

    getMonstersWithoutHim(monsters, nb) {
        var withoutMonsters = Array();

        var cpt = 0;
        while (cpt != nb) {
            var random = getRandomInt(0, this.group.length);

            if(!withoutMonsters.includes(this.group[random]) && !monsters.includes(this.group[random])) {
                withoutMonsters.push(this.group[random]);
                cpt++;
            }
        }
        return withoutMonsters; 
    }

    verifLifeMonsters() {
        for (var i = this.group.length-1; i>= 0; i--)
            if(this.group[i].Ahp <= 0)
                this.group.splice(i, 1);
    }
}