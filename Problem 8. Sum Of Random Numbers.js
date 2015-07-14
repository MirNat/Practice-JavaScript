FunctionalJSModule.sumOfRandomNumbers = sumOfRandomNumbers;
function sumOfRandomNumbers (number) {
    var arrayOfRandomValues = [];
    for(i=0;i<number;i++){
        arrayOfRandomValues.push( Math.floor(Math.random()*199) - 99 );// random number between -99 and 99
    }
    var sum = FunctionalJSModule.linearFold( arrayOfRandomValues, 0, function( x, y ){
        return x + y;
    });
    return [sum,arrayOfRandomValues];
 }

document.write('<br/>Problem 8. Sum of random numbers<br/>');
var callValues = sumOfRandomNumbers(10);
document.write('The function`s work on 10 random numbers: sum = ' + callValues[0] + ', numbers = [' + callValues[1] + ']<br/>');// 'random'

