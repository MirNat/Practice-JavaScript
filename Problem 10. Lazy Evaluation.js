FunctionalJSModule.lazyEvaluation = lazyEvaluation;
function lazyEvaluation(lazyingFunction) { 
    if (typeof lazyingFunction !== 'function') {
        return 'incorrect input';
    }

    return lazyingFunction.bind.apply(lazyingFunction, arguments);
 }
