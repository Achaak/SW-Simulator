$(document).ready(function(){
    init_other_monsters();
});

function init_other_monsters() {
    for (var i = 0; i < lClassMonsters.length; i++) {
        var monster = new lClassMonsters[i].class;

        $('.other-monster .monsters').append(
            "<img class='monster'" +
            "name='"  + monster.name   + "'" +
            "hp='"    + monster.Ahp    + "'" +
            "atk='"   + monster.Aatk   + "'" +
            "def='"   + monster.Adef   + "'" +
            "spd='"   + monster.Aspd   + "'" +
            "cRate='" + monster.AcRate + "'" +
            "cDmg='"  + monster.AcDmg  + "'" +
            "res='"   + monster.Ares   + "'" +
            "acc='"   + monster.Aacc   + "'" +
            "src='view/pictures/icons/Test_card.png'>"
        );
    }
}