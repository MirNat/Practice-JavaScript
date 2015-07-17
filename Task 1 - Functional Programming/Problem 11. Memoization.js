(function () {
    'use scrict';
   FunctionalJSModule.memoization = function (functionToMemoize) {

		  var memoized = {};
		  var slice = Array.prototype.slice;


		return function() {
			var args = slice.call(arguments);
            // works for ojects too
            var index = JSON.stringify(args);

            if (index in memoized) {
                return memoized[index];
            } else {
            // memoized function contents
                return (memoized[index] = functionToMemoize.apply(this, args));
            }
		};
    }
})();
