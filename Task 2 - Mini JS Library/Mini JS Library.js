MiniJSLibrary = (function () {
    'use scrict';
    var miniJSLibrary = {};
	//Language

	miniJSLibrary.isArray = function (obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	};

	miniJSLibrary.isBoolean = function (obj) {
		return typeof obj === 'boolean';
	};

	miniJSLibrary.isDate = function (obj) {
		return obj instanceof Date && !isNaN(obj.valueOf());
	};

	miniJSLibrary.isNumber = function (obj) {
		return typeof obj === 'number';
	};

	miniJSLibrary.isString = function (obj) {
		return typeof obj === 'string';
	};

	miniJSLibrary.isFunction = function (obj) {
		return typeof obj === 'function';
	};

	miniJSLibrary.isUndefined = function (obj) {
		return typeof obj === 'undefined';
	};

	miniJSLibrary.isNull = function (obj) {
		return  obj === null;
	};


	// working with arrays


	miniJSLibrary.forEach = function (targetArray, action) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: first argument is not an Array.');
	    } else {
	    	if (typeof action !== 'function') {
	    		throw new TypeError('Incorrect input: second argument is not a function.');
	    	}
	    }

		for (var i = 0; i < targetArray.length; i++) {
			action(targetArray[i]);
		}
	};

	miniJSLibrary.where = function (targetArray, predicate) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: first argument is not an Array.');
	    } else {
	    	if (typeof predicate !== 'function') {
	    		throw new TypeError('Incorrect input: second argument is not a function.');
	    	}
	    }
	    var arraySatisfyingPredicate = [];

		for (var i = 0; i < targetArray.length && predicate(targetArray[i]); i++) {
			arraySatisfyingPredicate.push(targetArray[i]);
		}

		return arraySatisfyingPredicate;
	};

	miniJSLibrary.first = function (targetArray, predicate) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: first argument is not an Array.');
	    } else {
	    	if (typeof predicate !== 'function') {
	    		throw new TypeError('Incorrect input: second argument is not a function.');
	    	}
	    }

		for (var i = 0; i < targetArray.length && !predicate(targetArray[i]); i++) {
		}

		return targetArray[i];
	};

	miniJSLibrary.last = function (targetArray, predicate) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: first argument is not an Array.');
	    } else {
	    	if (typeof predicate !== 'function') {
	    		throw new TypeError('Incorrect input: second argument is not a function.');
	    	}
	    }
	    var lastFoundValueSatisfyingPredicate;

	    for (var i = 0; i < targetArray.length; i++) {
			if (predicate(targetArray[i])) {
				lastFoundValueSatisfyingPredicate = targetArray[i];
			}
		}

		return lastFoundValueSatisfyingPredicate;
	};

	miniJSLibrary.select = function (targetArray, selector) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: first argument is not an Array.');
	    } else {
	    	if (typeof selector !== 'function') {
	    		throw new TypeError('Incorrect input: second argument is not a function.');
	    	}
	    }
	    var arraySatisfyingSelector = [];

		for (var i = 0; i < targetArray.length; i++) {
			if (selector(targetArray[i])) {
				arraySatisfyingSelector.push(targetArray[i]);
			}
		}

		return arraySatisfyingSelector;
	};

	miniJSLibrary.skip = function (targetArray, number) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: first argument is not an Array.');
	    } else {
	    	if (typeof number !== 'number'){
	    		throw new TypeError('Incorrect input: second argument is not a Number.');
	    	} else {
	    		if (number > targetArray.length){
	    			throw new TypeError('Incorrect input: number > length of Array.');
	    		}
	    	}
	    }
	    var skippedArray = [];

		for (var i = number; i < targetArray.length; i++) {
			skippedArray.push(targetArray[i]);
		}

		return skippedArray;
	};

	miniJSLibrary.take = function (targetArray, number) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: first argument is not an Array.');
	    } else {
	    	if (typeof number !== 'number'){
	    		throw new TypeError('Incorrect input: second argument is not a Number.');
	    	} else {
	    		if (number > targetArray.length){
	    			throw new TypeError('Incorrect input: number > length of Array.');
	    		}
	    	}
	    }
	    var takenArray = [];

		for (var i = 0; i < number; i++) {
			takenArray.push(targetArray[i]);
		}

		return takenArray;
	};

	miniJSLibrary.asChain = function (targetArray) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: argument is not an Array.');
	    }
		var arrayForReturn = targetArray;

		return {
			forEach: function (action) {
                arrayForReturn = miniJSLibrary.forEach(arrayForReturn, action);
                return this;
            },
			where: function (predicate) {
	        	arrayForReturn = miniJSLibrary.where(arrayForReturn, predicate);
	        	return this;
	        },
	        first: function (predicate) {
	        	arrayForReturn = miniJSLibrary.first(arrayForReturn, predicate);
	        	return this;
	        },
	        last: function (predicate) {
	        	arrayForReturn = miniJSLibrary.last(arrayForReturn, predicate);
	        	return this;
	        },
	        select: function (selector) {
	        	arrayForReturn = miniJSLibrary.select(arrayForReturn, selector);
	        	return this;
	        },

            skip: function(count) {
                arrayForReturn = miniJSLibrary.skip(arrayForReturn, count);
                return this;
            },

            take: function(count) {
                arrayForReturn = miniJSLibrary.take(arrayForReturn, count);
                return this;
            },

            result: function() {
                return arrayForReturn;
            }
        };
    };

    return miniJSLibrary;
})();
