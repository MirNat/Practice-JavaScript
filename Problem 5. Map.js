FunctionalJSModule.map = map;
function map (targetArray, mappingFunction) {
    if(!Array.isArray( targetArray ) || typeof mappingFunction !== 'function'){
        return 'incorrect input';
    }
    var arrayOfValues = [];
    for( var i = 0; i < targetArray.length; i++ ) {
       var nextValue = mappingFunction(targetArray[i]);
       arrayOfValues.push(nextValue);
    }

    return arrayOfValues;
 }
