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