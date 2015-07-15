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

