FunctionalJSModule.filter = filter;
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
