(function () {
    'use scrict';
    FunctionalJSModule.linearUnfold = function (initialCounterValue, unfoldedFunction) {
        if (typeof unfoldedFunction !== 'function') {
            throw new TypeError('Incorrect input: argument is not a function.');
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
})();