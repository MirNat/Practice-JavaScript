FunctionalJSModule.memoization = memoization;
function memoization (funcToMemoize) {
    if(typeof funcToMemoize !== 'function'){
        return 'incorrect input';
    }
    var args = arguments;
    var result;
    var lazyEval = funcToMemoize.bind.apply(funcToMemoize, args);
    return function () {
        if (result) {
            document.write(' I`ve already remembered this one. ');
            return result;
        }
       document.write('Calculate and remember for the first time. ');
            result = lazyEval();
            return result;
      }
 }

function add (x, y) {
    document.write('Calculating. ');
    return x + y;
}

document.write('<br/>Problem 11. Memoization<br/>');
document.write('The function`s work (add two big numbers) on input [1234567890321537, 9876543210123159]: <br/>First function`s call: ');
var x1 = 1234567890321537, y1 = 9876543210123159;
var addMemoization = memoization( add, x1, y1);
document.write('Result: ' + addMemoization());
document.write('<br/>Second function`s call: ');
document.write('Result: ' + addMemoization());
//First function`s call: Calculate and remember for the first time. Calculating. Result: 11111111100444696
//Second function`s call: I`ve already remembered this one. Result: 11111111100444696 