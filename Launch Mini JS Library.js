document.write('Mini JS Library<br/><br/>Language<br/>');

//1
document.write('<br/>1. bool isArray(obj)<br/>');
document.write('The function`s work on inputs [], [1], new Array(), Array.prototype, EMPTY CALL, {}, null, undefined, 1, "Array", true, false, { __proto__: Array.prototype }: ' + '<br/>' +
   MiniJSLibrary.isArray([]) + ', ' + MiniJSLibrary.isArray([1]) + ', ' + MiniJSLibrary.isArray(new Array()) + ', ' + MiniJSLibrary.isArray(Array.prototype) + ', ' + 
   MiniJSLibrary.isArray() + ', ' + MiniJSLibrary.isArray({}) + ', ' + MiniJSLibrary.isArray(null) + ', ' + MiniJSLibrary.isArray(undefined) + ', ' + MiniJSLibrary.isArray(1) + ', ' + 
   MiniJSLibrary.isArray("Array") + ', ' + MiniJSLibrary.isArray(true) + ', ' + MiniJSLibrary.isArray(false) + ', ' + MiniJSLibrary.isArray({ __proto__: Array.prototype }) + '<br/>');
//true, true, true, true, false, false, false, false, false, false, false, false, false


//2
document.write('<br/>2. bool isBoolean(obj)<br/>');
document.write('The function`s work on inputs true, false, null, 0, NaN, undefined,"","Boolean", new Boolean(), new Boolean(false), new Boolean(true), Boolean.prototype, { __proto__: Boolean.prototype }: ' + '<br/>' +
   MiniJSLibrary.isBoolean(true) + ', ' + MiniJSLibrary.isBoolean(false) + ', ' + MiniJSLibrary.isBoolean(null) + ', ' + MiniJSLibrary.isBoolean(0) + ', ' + 
   MiniJSLibrary.isBoolean(NaN) + ', ' + MiniJSLibrary.isBoolean(undefined) + ', ' + MiniJSLibrary.isBoolean(null) + ', ' + MiniJSLibrary.isBoolean(undefined) + ', ' + 
   MiniJSLibrary.isBoolean("") + ', ' + MiniJSLibrary.isBoolean("Boolean") + ', ' + MiniJSLibrary.isBoolean(new Boolean()) + ', ' + MiniJSLibrary.isBoolean(new Boolean(false)) + 
   ', ' + MiniJSLibrary.isBoolean(new Boolean(true)) + ', ' + MiniJSLibrary.isBoolean(Boolean.prototype) + ', ' + MiniJSLibrary.isBoolean({__proto__: Boolean.prototype}) + '<br/>');
//true, true, false, false, false, false, false, false, false, false, false, false, false, false, false


//3
document.write('<br/>3. bool isDate(obj)<br/>');
document.write('The function`s work on inputs  null, "", new Date() <br/>' +
   MiniJSLibrary.isDate(null) + ', ' + MiniJSLibrary.isDate('') + ', ' + MiniJSLibrary.isDate(new Date()) + '<br/>');
//false, false, true


//4
document.write('<br/>4. bool isNumber(obj)<br/>');
document.write('The function`s work on inputs null, 1, -1, NaN, Infinity, -Infinity, "1", 2e63, new Number(), new Number("1"), Number.prototype, { __proto__: Number.prototype } ' + '<br/>' +
   MiniJSLibrary.isNumber(null) + ', ' + MiniJSLibrary.isNumber(1) + ', ' + MiniJSLibrary.isNumber(-1) + ', ' + MiniJSLibrary.isNumber(NaN) + ', ' + 
   MiniJSLibrary.isNumber(Infinity) + ', ' + MiniJSLibrary.isNumber(-Infinity) + ', ' + MiniJSLibrary.isNumber("1") + ', ' + MiniJSLibrary.isNumber(2e63) + ', ' + 
   MiniJSLibrary.isNumber(new Number()) + ', ' + MiniJSLibrary.isNumber(new Number("1")) + ', ' + MiniJSLibrary.isNumber(Number.prototype) + ', ' + MiniJSLibrary.isNumber({ __proto__: Number.prototype }) + '<br/>');
//false, true, true, true, true, true, false, true, false, false, false, false


//5
document.write('<br/>5. bool isString(obj)<br/>');
document.write('The function`s work on inputs  null, "", "abc", 1, new String(), new String(5), new String("abc") <br/>' +
   MiniJSLibrary.isString(null) + ', ' + MiniJSLibrary.isString("") + ', ' + MiniJSLibrary.isString("abc") + ', ' + MiniJSLibrary.isString(1) + ', ' + 
   MiniJSLibrary.isString(new String()) + ', ' + MiniJSLibrary.isString(new String(5)) + ', ' + MiniJSLibrary.isNumber(new String("abc")) + '<br/>');
//false, true, true, false, false, false, false


//6
document.write('<br/>6. bool isFunction(obj)<br/>');
document.write('The function`s work on inputs  null, valueOf, "abc", 1, toString <br/>' +
   MiniJSLibrary.isFunction(null) + ', ' + MiniJSLibrary.isFunction(valueOf) + ', ' + MiniJSLibrary.isFunction("abc") + ', ' + MiniJSLibrary.isFunction(1) + ', ' + 
   MiniJSLibrary.isFunction(toString) + '<br/>');
//false, true, false, false, true


//7
document.write('<br/>7. bool isUndefined(obj)<br/>');
document.write('The function`s work on inputs  null, "", undefined, NaN, Infinity <br/>' +
   MiniJSLibrary.isUndefined(null) + ', ' + MiniJSLibrary.isUndefined("") + ', ' + MiniJSLibrary.isUndefined(undefined) + ', ' + MiniJSLibrary.isUndefined(NaN) + ', ' + 
   MiniJSLibrary.isUndefined(Infinity) + '<br/>');
//false, false, true, false, false


//8
document.write('<br/>8. bool isNull(obj)<br/>');
document.write('The function`s work on inputs  null, "", 0, undefined, NaN, Infinity <br/>' +
   MiniJSLibrary.isNull(null) + ', ' + MiniJSLibrary.isNull("") + ', ' + MiniJSLibrary.isNull(0) + ', ' + MiniJSLibrary.isNull(undefined) + ', ' + 
   MiniJSLibrary.isNull(NaN) + ', ' + MiniJSLibrary.isNull(Infinity) + '<br/>');
//false, false, false, false, false, false

//chain of calls
document.write('<br/>chain of calls<br/>');
document.write('The function`s work on input chainAs([1,2,3,4,5,6,7,8,9]).take(6).take(3) <br/>' + MiniJSLibrary.chainAs([1,2,3,4,5,6,7,8,9]).take(6).take(3).result() + '<br/>');