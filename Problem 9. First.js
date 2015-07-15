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
