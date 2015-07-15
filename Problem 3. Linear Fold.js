(function () {
    'use scrict';
	FunctionalJSModule.linearFold = function (targetArray, initialCounterValue, foldedFunction) {
	    if (!Array.isArray(targetArray) || typeof foldedFunction !== 'function') {
	    	throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a function.');
	    }

	    var counterValue = initialCounterValue;

	    for (var i = 0; i < targetArray.length; i++) {
	    	counterValue = foldedFunction(counterValue, targetArray[i]);
	    }

	    return counterValue;
	 }
})();
