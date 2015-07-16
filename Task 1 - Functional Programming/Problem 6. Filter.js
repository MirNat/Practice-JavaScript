(function () {
    'use scrict';
    FunctionalJSModule.filter = function (targetArray, filteringFunction) {
        if (!Array.isArray(targetArray) || typeof filteringFunction !== 'function') {
           throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a function.');
        }

        var arrayOfValues = [];

        for (var i = 0; i < targetArray.length; i++) {
           if (filteringFunction(targetArray[i])) {
                arrayOfValues.push(targetArray[i]);
            }
        }

        return arrayOfValues;
    }
})();