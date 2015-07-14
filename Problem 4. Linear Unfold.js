FunctionalJSModule.linearUnfold = linearUnfold;
function linearUnfold (initialCounterValue, unfoldedFunction) {
    if(typeof unfoldedFunction !== 'function'){
        return 'incorrect input';
    }
    var arrayOfValues = [];
    var counterValue = initialCounterValue;
    var endCondition = false;
    while(!endCondition){
        var values = unfoldedFunction(counterValue);
        var nextValue = values[0];
        counterValue = values[1];
        endCondition = values[2];
        arrayOfValues.push(nextValue);
    }

    return arrayOfValues;
 }

 function splitStringWithSpace (stringToParse) {
    var nextValue = stringToParse.split(' ', 1);
    var newStringToParse = stringToParse.substring(nextValue.toString().length + 1);
    var endCondition = newStringToParse==='';
    return [nextValue, newStringToParse, endCondition];
}

var myString = "January February March April";

document.write('<br/>Problem 4. Linear Unfold<br/>');
document.write('The function`s work (splits string with space and return array) on input "January February March April": ' + linearUnfold( myString, splitStringWithSpace) + '<br/>');// 'January,February,March,April'



