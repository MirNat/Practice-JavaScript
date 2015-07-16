(function () {
	'use scrict';
	FunctionalJSModule.sumOfRandomNumbers = function (number) {
		 if (!typeof number === 'number') {
	        throw new TypeError('Incorrect input: argument is not a Number.');
	    }
	    var arrayOfRandomValues = [];

	    for (i = 0; i < number; i++) {
	        arrayOfRandomValues.push(Math.floor(Math.random()*199)-99);// random number between -99 and 99
	    }

	    var sum = FunctionalJSModule.linearFold (arrayOfRandomValues, 0, function (x, y) {
	        return x + y;
	    });
	    
	    return [sum,arrayOfRandomValues];
 	}
})();
