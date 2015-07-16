(function () {
    'use scrict';
   FunctionalJSModule.memoization = function (funcToMemoize) {
        if (typeof funcToMemoize !== 'function') {
            throw new TypeError('Incorrect input : argument is not a function.');
        }
        var result;
        var lazyEvaluation = funcToMemoize.bind.apply(funcToMemoize, arguments);

        return function () {
            if (result) {
                //document.write(' I`ve already remembered this one. ');
                return result;
            }
           //document.write('Calculate and remember for the first time. ');
            result = lazyEvaluation();
            return result;
        }
    }
})();