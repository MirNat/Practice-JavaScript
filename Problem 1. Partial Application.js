FunctionalJSModule.partialApply = partialApply;
function partialApply (targetFunction) {
    // A reference to the Array#slice method.
    var slice = Array.prototype.slice;
    // Convert arguments object to an array, removing the first argument.
    var argumentsWithoutFirstArgument = slice.call(arguments, 1);
    return function () {
        // Invoke the originally-specified function, passing in all just-
        // specified arguments, followed by any originally-specified arguments.
        return targetFunction.apply(this, argumentsWithoutFirstArgument.concat(slice.call(arguments, 0)));
    };
};
