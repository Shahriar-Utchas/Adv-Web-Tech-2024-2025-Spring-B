"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.20462;
    else
        return parseFloat(weight) * 2.20462;
}
kgToLbs(100);
kgToLbs('100');
