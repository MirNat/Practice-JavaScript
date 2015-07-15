FunctionalJSModule.lazyEvaluation = lazyEvaluation;
function lazyEvaluation(lazyingFunction) { 
    if (typeof lazyingFunction !== 'function') {
        return 'incorrect input';
    }

    return lazyingFunction.bind.apply(lazyingFunction, arguments);
 }

function add (x, y) {
  return x + y;
}

var x = 1234567890321537, y = 9876543210123159;
var addThisLater = lazyEvaluation( add, x, y);

document.write('<br/>Problem 10. Lazy evaluation<br/>');
document.write('The function`s work (add two big numbers) on input [1234567890321537, 9876543210123159]: ' + addThisLater() + '<br/>');// '11111111100444696'

