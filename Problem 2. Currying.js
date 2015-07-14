// numArgs lets optionally specify the number of arguments the function being curried needs if it`s not explicitly defined
Function.prototype.curry = function (numberOfArgs) {
    var currentFunction = this;
	numberOfArgs = numberOfArgs || currentFunction.length;
	
    //recursively acquire the arguments
	function subCurry (previous) {
		return function(arg){
			var args = previous.concat(arg);
			if(args.length < numberOfArgs){
				//recursive case: we still need more args
				return subCurry(args);
			}
			else{
				return currentFunction.apply(this, args);
			}
		};
    }
	return subCurry([]);
};

//converts numbers to hecademical values
function numbersToHex () {
     var componentToHex = function (component) {
        var hexadecimal = component.toString(16);
        // make sure the return type is 2 digits
        return (hexadecimal.length === 1)? '0'.concat(hexadecimal) : hexadecimal;
    };
    return Array.prototype.map.call(arguments, componentToHex).join('');
}

//converts rgb to hexadecimal string
function rgbToHex (red,green,blue) {
    if(red < 0  ||  green < 0  ||  blue < 0){
        return 'incorrect input';
    }
    return '#'.concat(numbersToHex(red, green, blue));
}

document.write('<br/>Problem 2. Currying<br/>');

// the function works on any number of inputs
document.write('The function`s work (converts rgb to hexadecimal string) on inputs [10,20,30] and [40,50,60]: ' + rgbToHex(10,20,30) + ', ' + rgbToHex(40,50,60) +'<br/>');// '#0a141e, #28323c'

// use of the currying function to transform function with N arguments into a chain of N functions with 1 argument
var rgbToHexCurry = rgbToHex.curry();//empty string at the beginning
document.write('The currying function`s work: ' + rgbToHexCurry(10)(20)(30) + ', ' + rgbToHexCurry(40)(50)(60) + '<br/>'); // '#0a141e, #28323c'
