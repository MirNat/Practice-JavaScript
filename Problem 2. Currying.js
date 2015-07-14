// numArgs lets optionally specify the number of arguments the function being curried needs if it`s not explicitly defined
Function.prototype.curry= function(numArgs){
    var func = this;
	numArgs = numArgs || func.length;
	
    //recursively acquire the arguments
	function subCurry(prev){
		return function(arg){
			var args = prev.concat(arg);
			if(args.length < numArgs){
				//recursive case: we still need more args
				return subCurry(args);
			}
			else{
				return func.apply(this, args);
			}
		};
    }
	return subCurry([]);
};

//converts numbers to hecademical values
function numbersToHex(){
    function componentToHex(component){
        var hex = component.toString(16);
        // make sure the return type is 2 digits
        if(hex.length == 1){
            return '0' +  hex;
        }
        else{
            return hex;
        }
    };
    return Array.prototype.map.call(arguments, componentToHex).join('');
}

//converts rgb to hexadecimal string
function rgbToHex(r,g,b){
    return '#' + numbersToHex(r) + numbersToHex(g) + numbersToHex(b);
}

console.log('Problem 2. Currying');

// the function works on any number of inputs
console.log('The function work (converts rgb to hexadecimal string): ');
console.log(rgbToHex(10,20,30));// '#0a141e'
console.log(rgbToHex(40,50,60));// '#28323c'

// use of the partial function to partially apply arguments 
console.log('The currying function work: ');
var rgbToHexCurry = rgbToHex.curry();//empty string at the beginning
console.log(rgbToHexCurry(10)(20)(30));// '#0a141e'
console.log(rgbToHexCurry(40)(50)(60));// '#28323c'