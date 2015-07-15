FunctionalJSModule.partialApply = partialApply;
function partialApply (targetFunction) {
    // A reference to the Array#slice method.
    var slice = Array.prototype.slice;
    // Convert arguments object to an array, removing the first argument.
    var argumentsWithoutFirstArgument = slice.call(arguments, 1);
    return function() {
        // Invoke the originally-specified function, passing in all just-
        // specified arguments, followed by any originally-specified arguments.
        return targetFunction.apply(this, argumentsWithoutFirstArgument.concat(slice.call(arguments, 0)));
    };
};

//there can be any function, this function converts numbers to hexadecimal values
function numbersToHex () {
    var componentToHex = function (component) {
        var hexadecimal = component.toString(16);
        // make sure the return type is 2 digits
        return (hexadecimal.length === 1)? '0'.concat(hexadecimal) : hexadecimal;
    };
    return Array.prototype.map.call(arguments, componentToHex).join('');
}

document.write('Problem 1. Partial Application<br/>');

// the function works on any number of inputs
document.write('The function`s work (converts numbers to hexadecimal values) on inputs [0], [10,20], [10,20,30,40,50,60]: ' + numbersToHex(0) + ', ' + numbersToHex(10,20) + ', ' + numbersToHex(10,20,30,40,50,60) +'<br/>');// '00, 0a14, 0a141e28323c'

// use of the partial function to partially apply arguments 
var numbersToHexPartial = partialApply(numbersToHex,'');//empty string at the beginning
document.write('The partial function`s work: ' + numbersToHexPartial(0) + ', ' + numbersToHexPartial(10,20) + ', ' + numbersToHexPartial(10,20,30,40,50,60) + '<br/>');// '00, 0a14, 0a141e28323c'

