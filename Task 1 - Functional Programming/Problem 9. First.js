(function () {
	'use scrict';
	FunctionalJSModule.first = function (targetArray, filteringFunction) {
	    if (!Array.isArray(targetArray) || typeof filteringFunction !== 'function') {
	        throw new TypeError('Incorrect input: first argument is not an array or second argument is not a function.');
	    }

	    for (var i = 0; i < targetArray.length; i++) {
	       if (filteringFunction(targetArray[i])) {
	            return targetArray[i] ;
	        }
	    }

	    return null;
 	};
})();
