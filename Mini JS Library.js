(function () {
    'use scrict';

	//Language


	var isArray = function (obj) {
		return Object.prototype.toString.call( obj ) === '[object Array]';
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
	//This test will ONLY pass for null and will not pass for "", undefined, false, 0, or NaN.
	var isNull = function (obj) {
		return typeof obj === null && typeof obj === "object";
	}


	// working with arrays


	var forEach = function (targetArray, action) {
		if (!Array.isArray( targetArray ) || typeof action !== 'function') {
	        return 'incorrect input';
	    }
		for (var i = 0; i < targetArray.length; i++) {
			action(targetArray[i]);
		};
	}

	var where = function (targetArray, predicate) {
		if (!Array.isArray( targetArray ) || typeof predicate !== 'function') {
	        return 'incorrect input';
	    }
	    var arraySatisfyingPredicate = [];
		for (var i = 0; i < targetArray.length && predicate(targetArray[i]); i++) {
			arraySatisfyingPredicate.push(targetArray[i]);
		};
		return arraySatisfyingPredicate;
	}

	 var first = function (targetArray, predicate) {
		if (!Array.isArray( targetArray ) || typeof predicate !== 'function') {
	        return 'incorrect input';
	    }
	    var arraySatisfyingPredicate = [];
		var i; 
		for (i = 0; i < targetArray.length && !predicate(targetArray[i]); i++) {
		};
		return targetArray[i];
	}

	var last = function (targetArray, predicate) {
		if (!Array.isArray( targetArray ) || typeof predicate !== 'function') {
	        return 'incorrect input';
	    }
	    var lastFoundValueSatisfyingPredicate;
	    for (var i = 0; i < targetArray.length; i++) {
			if (predicate(targetArray[i])) {
				lastFoundValueSatisfyingPredicate = targetArray[i];
			}
		};
		return lastFoundValueSatisfyingPredicate;
	}

	var select = function (targetArray, selector) {
		if (!Array.isArray( targetArray ) || typeof selector !== 'function') {
	        return 'incorrect input';
	    }
	    var arraySatisfyingSelector = [];
		for (var i = 0; i < targetArray.length; i++) {
			arraySatisfyingSelector.push(targetArray[i]);
		};
		return arraySatisfyingSelector;
	}

	var skip = function (targetArray, number) {
		if (!Array.isArray( targetArray ) || typeof number !== 'number' || number > targetArray.length) {
	        return 'incorrect input';
	    }
	    var skippedArray = [];
		for (var i = number-1; i < targetArray.length; i++) {
			skippedArray.push(targetArray[i]);
		};
		return skippedArray;
	}

	var take = function (targetArray, number) {
		if (!Array.isArray( targetArray ) || typeof number !== 'number' || number > targetArray.length) {
	        return 'incorrect input';
	    }
	    var takenArray = [];
		for (var i = 0; i < number; i++) {
			takenArray.push(targetArray[i]);
		};
		return takenArray;
	}

	var chainAs = function (targetArray){
		var arrayForReturn = targetArray;
		return{
			forEach: function (action) {
                this.arrayForReturn = workWithArrays.forEach(arrayForReturn, action);
                return this;
            },
			where: function (predicate) {
	        	this.arrayForReturn = where(arrayForReturn, predicate);
	        	return this;
	        },
	        first: function (predicate) {
	        	this.arrayForReturn = first(arrayForReturn, predicate);
	        	return this;
	        },
	        last: function (predicate) {
	        	this.arrayForReturn = last(arrayForReturn, predicate);
	        	return this;
	        },
	        select: function (selector) {
	        	this.arrayForReturn = select(arrayForReturn, selector);
	        	return this;
	        },

            skip: function(count) {
                this.arrayForReturn = skip(arrayForReturn, count);
                return this;
            },

            take: function(count) {
                this.arrayForReturn = take(arrayForReturn, count);
                return this;
            },

            result: function() {
                return this.arrayForReturn;
            }
        };
    }

    MiniJSLibrary.isArray = isArray;
	MiniJSLibrary.isBoolean = isBoolean;
	MiniJSLibrary.isDate = isDate;
	MiniJSLibrary.isNumber = isNumber;
	MiniJSLibrary.isString = isString;
	MiniJSLibrary.isFunction = isFunction;
	MiniJSLibrary.isUndefined = isUndefined;
	MiniJSLibrary.isNull = isNull;
	MiniJSLibrary.forEach = forEach;
	MiniJSLibrary.first = first;
	MiniJSLibrary.last = last;
	MiniJSLibrary.select = select;
	MiniJSLibrary.skip = skip;
	MiniJSLibrary.take = take;
	MiniJSLibrary.chainAs = chainAs;
})();
