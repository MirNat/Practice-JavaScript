function add (x, y) {
  return x + y;
}

function addWithWriteToConsole (x, y) {
    document.write('Calculating. ');
    return x + y;
}

function addStrings (string1, string2) {
  return string1.concat(string2);
}

function positiveNumbersFilter (number) {
    return number >= 0;
};

function componentToHex (component) {
    var hexadecimal = component.toString(16);
    // make sure the return type is 2 digits
    return (hexadecimal.length === 1)? '0'.concat(hexadecimal) : hexadecimal;
};

//converts numbers to hecademical values
function numbersToHex () {
    return Array.prototype.map.call(arguments, componentToHex).join('');
}

//converts rgb to hexadecimal string
function rgbToHex (red,green,blue) {
    if(red < 0  ||  green < 0  ||  blue < 0){
        return 'incorrect input';
    }
    return '#'.concat(numbersToHex(red, green, blue));
}

function separateStringBeforeSpace (stringToParse) {
    var nextValue = stringToParse.split(' ', 1);
    var newStringToParse = stringToParse.substring(nextValue.toString().length + 1);
    var endCondition = newStringToParse === '';
    return [nextValue, newStringToParse, endCondition];
}


//1
document.write('Problem 1. Partial Application<br/>');
document.write('The function`s work (converts numbers to hexadecimal values) on inputs [0], [10,20], [10,20,30,40,50,60]: ' + numbersToHex(0) + ', ' + numbersToHex(10,20) + ', ' + numbersToHex(10,20,30,40,50,60) +'<br/>');// '00, 0a14, 0a141e28323c'
var numbersToHexPartial = partialApply(numbersToHex,'');//empty string at the beginning
document.write('The partial function`s work: ' + numbersToHexPartial(0) + ', ' + numbersToHexPartial(10,20) + ', ' + numbersToHexPartial(10,20,30,40,50,60) + '<br/>');// '00, 0a14, 0a141e28323c'


//2
document.write('<br/>Problem 2. Currying<br/>');
document.write('The function`s work (converts rgb to hexadecimal string) on inputs [10,20,30] and [40,50,60]: ' + rgbToHex(10,20,30) + ', ' + rgbToHex(40,50,60) +'<br/>');// '#0a141e, #28323c'
var rgbToHexCurry = curry(rgbToHex);//empty string at the beginning
document.write('The currying function`s work: ' + rgbToHexCurry(10)(20)(30) + ', ' + rgbToHexCurry(40)(50)(60) + '<br/>'); // '#0a141e, #28323c'


//3
var numbersArray = [ 10, 20, 30, 40, 50 ];
var stringsArray = [ 'a', 'b', 'c', 'd', 'e' ];
document.write('<br/>Problem 3. Linear Fold<br/>');
document.write('The function`s work (adds values) on numbers input [10, 20, 30, 40, 50] and strings input ["a", "b", "c", "d", "e"]: ' + FunctionalJSModule.linearFold( numbersArray, 0, add) +', ' + FunctionalJSModule.linearFold( stringsArray,'', addStrings) + '<br/>');// '150, abcde'


//4
var myString = "January February March April";
document.write('<br/>Problem 4. Linear Unfold<br/>');
document.write('The function`s work (splits string with space and return array) on input "January February March April": ' + FunctionalJSModule.linearUnfold( myString, separateStringBeforeSpace) + '<br/>');// 'January,February,March,April'


//5
document.write('<br/>Problem 5. Map<br/>');
document.write('My map function`s work (convert number to hexadecimal) on input [10,20,30,40,50,60]: ' + FunctionalJSModule.map( [10,20,30,40,50,60], componentToHex) + '<br/>');// '0a,14,1e,28,32,3c'
document.write('Standart Array.prototype.map function`s work: ' + [10,20,30,40,50,60].map(componentToHex) + '<br/>');// '0a,14,1e,28,32,3c'


//6
document.write('<br/>Problem 6. Filter<br/>');
document.write('My filter function`s work (convert number to hexadecimal) on input [10,-20,30,-40,50,0]: ' + FunctionalJSModule.filter( [10,-20,30,-40,50,0], positiveNumbersFilter) + '<br/>');// '0a,14,1e,28,32,3c'
document.write('Standart Array.prototype.filter function`s work: ' + [10,-20,30,-40,50,0].filter(positiveNumbersFilter) + '<br/>');// '0a,14,1e,28,32,3c'


//7
document.write('<br/>Problem 7. Average of even numbers<br/>');
document.write('The function`s work on input [11,-24,30,-40,51,0,76]: ' + FunctionalJSModule.averageOfEvenNumbers([11,-24,30,-40,51,0,76]) + '<br/>');// '8.4'


//8
document.write('<br/>Problem 8. Sum of random numbers<br/>');
var callValues = FunctionalJSModule.sumOfRandomNumbers(10);
document.write('The function`s work on 10 random numbers: sum = ' + callValues[0] + ', numbers = [' + callValues[1] + ']<br/>');// 'random'


//9
document.write('<br/>Problem 9. First <br/>');
document.write('The function`s work (filter by positive value) on input [-10,-20,30,-40,50,0]: ' + FunctionalJSModule.first([-10,-20,30,-40,50,0], positiveNumbersFilter) + '<br/>');// '30'


//10
var bigNumber1 = 1234567890321537, bigNumber2 = 9876543210123159;
var addThisLater = FunctionalJSModule.lazyEvaluation( add, bigNumber1, bigNumber2);
document.write('<br/>Problem 10. Lazy evaluation<br/>');
document.write('The function`s work (add two big numbers) on input [1234567890321537, 9876543210123159]: ' + addThisLater() + '<br/>');// '11111111100444696'


//11
document.write('<br/>Problem 11. Memoization<br/>');
document.write('The function`s work (add two big numbers) on input [1234567890321537, 9876543210123159]: <br/>First function`s call: ');
var addMemoization = FunctionalJSModule.memoization( addWithWriteToConsole, bigNumber1, bigNumber2);
document.write('Result: ' + addMemoization());
document.write('<br/>Second function`s call: ');
document.write('Result: ' + addMemoization());
//First function`s call: Calculate and remember for the first time. Calculating. Result: 11111111100444696
//Second function`s call: I`ve already remembered this one. Result: 11111111100444696 