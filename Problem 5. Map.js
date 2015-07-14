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

componentToHex = function (component) {
    var hexadecimal = component.toString(16);
    // make sure the return type is 2 digits
    return (hexadecimal.length === 1)? '0'.concat(hexadecimal) : hexadecimal;
};

document.write('<br/>Problem 5. Map<br/>');
document.write('My map function`s work (convert number to hexadecimal) on input [10,20,30,40,50,60]: ' + map( [10,20,30,40,50,60], componentToHex) + '<br/>');// '0a,14,1e,28,32,3c'
document.write('Standart Array.prototype.map function`s work: ' + [10,20,30,40,50,60].map(componentToHex) + '<br/>');// '0a,14,1e,28,32,3c'

