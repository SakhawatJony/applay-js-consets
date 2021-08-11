function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}




var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my inches in feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log(feet);

var naniInches = 156;
var feet = naniInches / 12;
// console.log(feet);


// mile to km

function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km', marathon);

var barazerRamdohail = mileToKilometer(30.2);
console.log('bazare amar jaite tokohon somoy lagbe', barazerRamdohail);
