FunctionalJSModule.curry = curry;
// transforms function with N arguments into a chain of N functions with 1 argument
// numArgs lets optionally specify the number of arguments the function being curried needs if it`s not explicitly defined
function curry (targetFunction, numberOfArgs) {
    //var currentFunction = this;
	numberOfArgs = numberOfArgs || targetFunction.length;
    //recursively acquire the arguments
	function subCurry (previous) {
		return function (arg) {
			var args = previous.concat(arg);
			if (args.length < numberOfArgs) {
				//recursive case: we still need more args
				return subCurry(args);
			}
			else {
				return targetFunction.apply(this, args);
			}
		};
    }
    
	return subCurry([]);
};
