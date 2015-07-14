FunctionalJSModule.averageOfEvenNumbers = averageOfEvenNumbers;
function averageOfEvenNumbers (targetArray) {
    if(!Array.isArray( targetArray )){
        return 'incorrect input';
    }
    var arrayOfEvenNumbers = targetArray.filter(function(number){
        return number%2===0;
    });
    var numberOfEvenNumbers = arrayOfEvenNumbers.length;
    var sum = FunctionalJSModule.linearFold( arrayOfEvenNumbers, 0, function( x, y ){
        return x + y;
    });
    return sum/numberOfEvenNumbers;
 }

document.write('<br/>Problem 7. Average of even numbers<br/>');
document.write('The function`s work on input [11,-24,30,-40,51,0,76]: ' + averageOfEvenNumbers([11,-24,30,-40,51,0,76]) + '<br/>');// '8.4'

