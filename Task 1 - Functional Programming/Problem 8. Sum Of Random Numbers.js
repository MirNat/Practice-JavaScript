(function () {
	'use scrict';
	FunctionalJSModule.sumOfRandomNumbers = function (countOfRandomNumbers) {
		 if (!typeof countOfRandomNumbers === 'number') {
	        throw new TypeError('Incorrect input: argument is not a Number.');
	    }
	    var arrayOfRandomValues = [];

	    for (var i = 0; i < countOfRandomNumbers; i++) {
	        arrayOfRandomValues.push(Math.floor(Math.random() * 199) - 99);// random number between -99 and 99
	    }

	    var sum = FunctionalJSModule.linearFold (arrayOfRandomValues, 0, function (x, y) {
	        return x + y;
	    });
	    
	    return [sum,arrayOfRandomValues];
 	}
})();
