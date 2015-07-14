FunctionalJSModule.first = first;
function first (targetArray, filteringFunction) {
    if(!Array.isArray( targetArray ) || typeof filteringFunction !== 'function'){
        return 'incorrect input';
    }
    for( var i = 0; i < targetArray.length; i++ ){
       if( filteringFunction( targetArray[i] ) ){
            return targetArray[i] ;
        }
    }

    return 'not found';
 }

positiveNumbersFilter = function (number) {
    return number >= 0;
};

document.write('<br/>Problem 9. First <br/>');
document.write('The function`s work (filter by positive value) on input [-10,-20,30,-40,50,0]: ' + first([-10,-20,30,-40,50,0], positiveNumbersFilter) + '<br/>');// '30'

