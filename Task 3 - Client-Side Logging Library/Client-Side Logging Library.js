(function () {
    'use scrict';

	//Language


	var isArray = function (obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}

	var isBoolean = function (obj) {
		return typeof obj === 'boolean';
	}

	var isDate = function (obj) {
		return obj instanceof Date && !isNaN(obj.valueOf());
	}

	var isNumber = function (obj) {
		return typeof obj === 'number';
	}

	var isString = function (obj) {
		return typeof obj === 'string';
	}

	var isFunction = function (obj) {
		return typeof obj === 'function';
	}

	var isUndefined = function (obj) {
		return typeof obj === 'undefined';
	}

	var isNull = function (obj) {
		return  obj === null;
	}


	// working with arrays


	var forEach = function (targetArray, action) {
		if (!Array.isArray(targetArray) || typeof action !== 'function') {
	        throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a function.');
	    }

		for (var i = 0; i < targetArray.length; i++) {
			action(targetArray[i]);
		};
	};

	var where = function (targetArray, predicate) {
		if (!Array.isArray(targetArray) || typeof predicate !== 'function') {
	        throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a function.');
	    }
	    var arraySatisfyingPredicate = [];

		for (var i = 0; i < targetArray.length && predicate(targetArray[i]); i++) {
			arraySatisfyingPredicate.push(targetArray[i]);
		};

		return arraySatisfyingPredicate;
	};

	var first = function (targetArray, predicate) {
		if (!Array.isArray(targetArray) || typeof predicate !== 'function') {
	       throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a function.');
	    }
	    var arraySatisfyingPredicate = [];
		var i; 

		for (i = 0; i < targetArray.length && !predicate(targetArray[i]); i++) {
		};

		return targetArray[i];
	};

	var last = function (targetArray, predicate) {
		if (!Array.isArray(targetArray) || typeof predicate !== 'function') {
	        throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a function.');
	    }
	    var lastFoundValueSatisfyingPredicate;

	    for (var i = 0; i < targetArray.length; i++) {
			if (predicate(targetArray[i])) {
				lastFoundValueSatisfyingPredicate = targetArray[i];
			}
		};

		return lastFoundValueSatisfyingPredicate;
	};

	var select = function (targetArray, selector) {
		if (!Array.isArray(targetArray) || typeof selector !== 'function') {
	        throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a function.');
	    }
	    var arraySatisfyingSelector = [];

		for (var i = 0; i < targetArray.length; i++) {
			if (selector(targetArray[i])) {
				arraySatisfyingSelector.push(targetArray[i]);
			}
		};

		return arraySatisfyingSelector;
	};

	var skip = function (targetArray, number) {
		if (!Array.isArray(targetArray) || typeof number !== 'number' || number > targetArray.length) {
	        throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a Number or number > length of Array.');
	    }
	    var skippedArray = [];

		for (var i = number; i < targetArray.length; i++) {
			skippedArray.push(targetArray[i]);
		};

		return skippedArray;
	};

	var take = function (targetArray, number) {
		if (!Array.isArray(targetArray) || typeof number !== 'number' || number > targetArray.length) {
	        throw new TypeError('Incorrect input: first argument is not an Array or second argument is not a Number or number > length of Array.');
	    }
	    var takenArray = [];

		for (var i = 0; i < number; i++) {
			takenArray.push(targetArray[i]);
		};

		return takenArray;
	};

	var asChain = function (targetArray) {
		if (!Array.isArray(targetArray)) {
	        throw new TypeError('Incorrect input: argument is not an Array.');
	    }
		var arrayForReturn = targetArray;

		return{
			forEach: function (action) {
                arrayForReturn = workWithArrays.forEach(arrayForReturn, action);
                return this;
            },
			where: function (predicate) {
	        	arrayForReturn = where(arrayForReturn, predicate);
	        	return this;
	        },
	        first: function (predicate) {
	        	arrayForReturn = first(arrayForReturn, predicate);
	        	return this;
	        },
	        last: function (predicate) {
	        	arrayForReturn = last(arrayForReturn, predicate);
	        	return this;
	        },
	        select: function (selector) {
	        	arrayForReturn = select(arrayForReturn, selector);
	        	return this;
	        },

            skip: function(count) {
                arrayForReturn = skip(arrayForReturn, count);
                return this;
            },

            take: function(count) {
                arrayForReturn = take(arrayForReturn, count);
                return this;
            },

            result: function() {
                return arrayForReturn;
            }
        };
    };

    MiniJSLibrary.isArray = isArray;
	MiniJSLibrary.isBoolean = isBoolean;
	MiniJSLibrary.isDate = isDate;
	MiniJSLibrary.isNumber = isNumber;
	MiniJSLibrary.isString = isString;
	MiniJSLibrary.isFunction = isFunction;
	MiniJSLibrary.isUndefined = isUndefined;
	MiniJSLibrary.isNull = isNull;
	MiniJSLibrary.forEach = forEach;
	MiniJSLibrary.where = where;
	MiniJSLibrary.first = first;
	MiniJSLibrary.last = last;
	MiniJSLibrary.select = select;
	MiniJSLibrary.skip = skip;
	MiniJSLibrary.take = take;
	MiniJSLibrary.asChain = asChain;
})();
