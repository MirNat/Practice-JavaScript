Function.prototype.partialApply= function(){
    var func = this;
    args = Array.prototype.slice.call(arguments);
    return function(){
        return func.apply(this,args.concat(Array.prototype.slice.call(arguments)));
    };
};

//there can be any function, this function converts numbers to hexadecimal values
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

console.log('Problem 1. Partial Application');

// the function works on any number of inputs
console.log('The function work (converts numbers to hexadecimal values): ');
console.log(numbersToHex(0));// '00'
console.log(numbersToHex(10,20));// '0a14'
console.log(numbersToHex(10,20,30,40,50,60,70));// '0a141e28323c46'

// use of the partial function to partially apply arguments 
console.log('The partial function work: ');
var numbersToHexPartial = numbersToHex.partialApply('');//empty string at the beginning
console.log(numbersToHexPartial(0));// '00'
console.log(numbersToHexPartial(10,20));// '0a14'
console.log(numbersToHexPartial(10,20,30,40,50,60,70));// '0a141e28323c46'