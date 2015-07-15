FunctionalJSModule.linearFold = linearFold;
function linearFold (targetArray, initialCounterValue, foldedFunction) {
    if( !Array.isArray( targetArray ) || typeof foldedFunction !== 'function' ) {
    	return 'incorrect input';
    }
    var counterValue = initialCounterValue;
    for( var i = 0; i < targetArray.length; i++ ) {
    	counterValue = foldedFunction( counterValue, targetArray[ i ] );
    }

    return counterValue;
 }


