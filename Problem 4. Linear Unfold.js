FunctionalJSModule.linearUnfold = linearUnfold;
function linearUnfold (initialCounterValue, unfoldedFunction) {
    if (typeof unfoldedFunction !== 'function') {
        return 'incorrect input';
    }
    var arrayOfValues = [];
    var counterValue = initialCounterValue;
    var endCondition = false;
    while (!endCondition) {
        var values = unfoldedFunction(counterValue);
        var nextValue = values[0];
        counterValue = values[1];
        endCondition = values[2];
        arrayOfValues.push(nextValue);
    }

    return arrayOfValues;
 }
