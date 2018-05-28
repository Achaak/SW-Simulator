$(document).ready(function(){
    init_other_monsters();
});

function init_other_monsters() {
    for (var i = 0; i < lClassMonsters.length; i++) {
        var monster = new lClassMonsters[i].class;

        $('.other-monster .monsters').append(
            "<div class='b-monster'>" +
                "<span>" + monster.name + "</span>" +
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
                "skillUpSkill1='" + 0 + "'" +
                "skillUpSkill2='" + 0 + "'" +
                "skillUpSkill3='" + 0 + "'" +
                "src='view/pictures/icons/Test_card.png'>" +
            "</div>"
        );
    }
}