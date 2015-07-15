(function () {
    'use scrict';
    FunctionalJSModule.averageOfEvenNumbers = function (targetArray) {
        if (!Array.isArray(targetArray)) {
            throw new TypeError('Incorrect input: first argument is not an Array.');
        }

        var arrayOfEvenNumbers = targetArray.filter(function (number) {
            return number%2 === 0;
        });
        var numberOfEvenNumbers = arrayOfEvenNumbers.length;
        var sum = FunctionalJSModule.linearFold(arrayOfEvenNumbers, 0, function (x, y) {
            return x + y;
        });

        return sum/numberOfEvenNumbers;
    }
})();