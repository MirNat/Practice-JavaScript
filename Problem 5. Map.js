(function () {
    'use scrict';
	FunctionalJSModule.map = function (targetArray, mappingFunction) {
	    if (!Array.isArray(targetArray) || typeof mappingFunction !== 'function') {
	        throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a function.');
	    }

	    var arrayOfValues = [];

	    for (var i = 0; i < targetArray.length; i++) {
	       var nextValue = mappingFunction(targetArray[i]);
	       arrayOfValues.push(nextValue);
	    }

	    return arrayOfValues;
	 }
})();