//Language
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


function isArray (obj) {
	return Object.prototype.toString.call( obj ) === '[object Array]';
}

function isBoolean (obj) {
	return typeof obj === 'boolean';
}

function isDate (obj) {
	return toString.call(obj) === '[object Date]';;
}

function isNumber (obj) {
	return typeof obj === 'number';
}

function isString (obj) {
	return typeof obj === 'string';
}

function isFunction (obj) {
	return typeof obj === 'function';
}

function isUndefined (obj) {
	return typeof obj === 'undefined';
}
//This test will ONLY pass for null and will not pass for "", undefined, false, 0, or NaN.
function isNull (obj) {
	return typeof obj === null && typeof obj === "object";
}


// working with arrays

function forEach (targetArray, action) {
	if (!Array.isArray( targetArray ) || typeof action !== 'function') {
        return 'incorrect input';
    }
	for (var i = 0; i < targetArray.length; i++) {
		action(targetArray[i]);
	};
}

function where (targetArray, predicate) {
	if (!Array.isArray( targetArray ) || typeof predicate !== 'function') {
        return 'incorrect input';
    }
    var arraySatisfyingPredicate = [];
	for (var i = 0; i < targetArray.length && predicate(targetArray[i]); i++) {
		arraySatisfyingPredicate.push(targetArray[i]);
	};
	return arraySatisfyingPredicate;
}

function first (targetArray, predicate) {
	if (!Array.isArray( targetArray ) || typeof predicate !== 'function') {
        return 'incorrect input';
    }
    var arraySatisfyingPredicate = [];
	var i; 
	for (i = 0; i < targetArray.length && !predicate(targetArray[i]); i++) {
	};
	return targetArray[i];
}

function last (targetArray, predicate) {
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

function select (targetArray, selector) {
	if (!Array.isArray( targetArray ) || typeof selector !== 'function') {
        return 'incorrect input';
    }
    var arraySatisfyingSelector = [];
	for (var i = 0; i < targetArray.length; i++) {
		arraySatisfyingSelector.push(targetArray[i]);
	};
	return arraySatisfyingSelector;
}

function skip (targetArray, number) {
	if (!Array.isArray( targetArray ) || typeof number !== 'number' || number > targetArray.length) {
        return 'incorrect input';
    }
    var skippedArray = [];
	for (var i = number-1; i < targetArray.length; i++) {
		skippedArray.push(targetArray[i]);
	};
	return skippedArray;
}

function take (targetArray, number) {
	if (!Array.isArray( targetArray ) || typeof number !== 'number' || number > targetArray.length) {
        return 'incorrect input';
    }
    var takenArray = [];
	for (var i = 0; i < number; i++) {
		takenArray.push(targetArray[i]);
	};
	return takenArray;
}

