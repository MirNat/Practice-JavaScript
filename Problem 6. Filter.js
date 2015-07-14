function filter (targetArray, filteringFunction) {
    if(!Array.isArray( targetArray ) || typeof filteringFunction !== 'function'){
        return 'incorrect input';
    }
    var arrayOfValues = [];
    for( var i = 0; i < targetArray.length; i++ ){
       if( filteringFunction( targetArray[i] ) ){
            arrayOfValues.push( targetArray[i] );
        }
    }

    return arrayOfValues;
 }

positiveNumbersFilter = function (number) {
    return number>=0;
};

document.write('<br/>Problem 6. Filter<br/>');
document.write('My filter function`s work (convert number to hexadecimal) on input [10,-20,30,-40,50,0]: ' + filter( [10,-20,30,-40,50,0], positiveNumbersFilter) + '<br/>');// '0a,14,1e,28,32,3c'
document.write('Standart Array.prototype.filter function`s work: ' + [10,-20,30,-40,50,0].filter(positiveNumbersFilter) + '<br/>');// '0a,14,1e,28,32,3c'

