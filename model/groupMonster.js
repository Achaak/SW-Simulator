class groupMonster {
    constructor() {
        this.group = new Array();
    }

    setMonster(monster) { this.group.push(monster); }

    sortGroup() { this.group.sort(dynamicSort('-atb')); }

    roundUp() {        
        for (var i = 0; i < this.group.length; i++)
            this.group[i].RoundUp();

        this.sortGroup();
    }

    size() {return this.group.length; }

    getMonster(i) { return this.group[i]; }

    verifLifeMonsters() {
        for (var i = this.group.length-1; i>= 0; i--)
            if(this.group[i].Ahp <= 0)
                this.group.splice(i, 1);
    }
}