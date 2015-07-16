(function () {
	'use scrict';
	FunctionalJSModule.lazyEvaluation = function (lazyingFunction) { 
	    if (typeof lazyingFunction !== 'function') {
	        throw new TypeError('Incorrect input : argument is not a function.');
	    }

	    return lazyingFunction.bind.apply(lazyingFunction, arguments);
	 }
})();