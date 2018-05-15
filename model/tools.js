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

function elementalAdvantage(elem1, elem2) {
    if      (elem1 == 'fire'  && elem2 == "wind" )
        return 1;
    else if (elem1 == 'wind'  && elem2 == "water")
        return 1;
    else if (elem1 == 'water' && elem2 == "fire" )
        return 1;
    else if (elem1 == 'dark'  && elem2 == "light")
        return 1;
    else if (elem1 == 'light' && elem2 == "dark" )
        return 1;
        
    else if (elem1 == 'fire'  && elem2 == "water")
        return 2;
    else if (elem1 == 'water' && elem2 == "wind" )
        return 2;
    else if (elem1 == 'wind'  && elem2 == "fire" )
        return 2;
    else
        return 0;
}