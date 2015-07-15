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
		return toString.call(obj) === '[object Date]';;
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
		this.array = targetArray;
		this.where = function ( predicate ) {
        	targetArray = where(this.array, predicate);
        	this.array = targetArray;
        	return this;
        };
        this.first = function (predicate) {
        	targetArray = first(this.array, predicate);
        	this.array = targetArray;
        	return this;
        };
        this.last = function (predicate) {
        	targetArray = last(this.array, predicate);
        	this.array = targetArray;
        	return this;
        };
        this.select = function (selector) {
        	targetArray = select(this.array, select);
        	this.array = targetArray;
        	return this;
        };

        if (this instanceof chainAs) {
    		return this.chainAs;	
    	} else {
    		return new chainAs(targetArray);	
   		}
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
	MiniJSLibrary.chainAsas = chainAs;
})();
