function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function elementalAdvantage(attacker, defender) {
    if      (attacker == 'fire'  && defender == "wind" )
        return 1;
    else if (attacker == 'wind'  && defender == "water")
        return 1;
    else if (attacker == 'water' && defender == "fire" )
        return 1;
    else if (attacker == 'dark'  && defender == "light")
        return 1;
    else if (attacker == 'light' && defender == "dark" )
        return 1;
        
    else if (attacker == 'fire'  && defender == "water")
        return 2;
    else if (attacker == 'water' && defender == "wind" )
        return 2;
    else if (attacker == 'wind'  && defender == "fire" )
        return 2;
    else
        return 0;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }