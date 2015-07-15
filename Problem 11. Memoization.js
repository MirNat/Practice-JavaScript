FunctionalJSModule.memoization = memoization;
function memoization (funcToMemoize) {
    if(typeof funcToMemoize !== 'function'){
        return 'incorrect input';
    }
    var result;
    var lazyEvaluation = funcToMemoize.bind.apply(funcToMemoize, arguments);
    return function () {
        if (result) {
            document.write(' I`ve already remembered this one. ');
            return result;
        }
       document.write('Calculate and remember for the first time. ');
            result = lazyEvaluation();
            return result;
      }
 }
