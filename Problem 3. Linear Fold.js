function linearFold( targetArray, initialCounterValue, foldedFunction ) {
    if( !Array.isArray( targetArray ) || typeof foldedFunction !== 'function' ) {
        return 'incorrect input';
    }

     var counterValue = initialCounterValue;

    for( var i = 0; i < targetArray.length; i++ ) {
       counterValue = foldedFunction( counterValue, targetArray[ i ] );
    }

    return counterValue;
 }

 function add( x, y ) {
    return x + y;
}

var numbersArray = [ 10, 20, 30, 40, 50 ];
var stringsArray = [ 'a', 'b', 'c', 'd', 'e' ];

document.write('<br/>Problem 3. Linear Fold<br/>');
document.write('The function`s work (adds values) on numbers input [10, 20, 30, 40, 50] and strings input ["a", "b", "c", "d", "e"]: ' + linearFold( numbersArray, 0, add) +', ' + linearFold( stringsArray,'', add) + '<br/>');// '150, abcde'



