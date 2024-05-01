"use strict";

//define your inputs (variables)
var fahrenheitTemperature = 77;

//do the calculation C = (°F - 32) × 5/9
var celsiusTempature = ((fahrenheitTemperature - 32) * 5) / 9;
//print the results
console.log(
  "The fahrenheit temperature of " +
    fahrenheitTemperature +
    " is " +
    celsiusTempature +
    " celsius."
);
function covertFtoC (fahrenheitTemperatur) {
    var celsiusTempature = ((fahrenheitTemperature - 32) *5) /9; 
    return celsiusTempature;
}

var f = 77;
 let c = covertFtoC(f);

console.log(
"The fareneit temperature of " +
f +
" is " +
c +
"celcius"

);