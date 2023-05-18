console.log(`Explicit Convertion: Convert number strings and boolean values to numbers in that case we can use Numbers()`);

var num1 = `324`;
var result = Number(num1);
console.log(`${result}`);

var result = Number(`324e-1`);
console.log(`${result}`);

// boolean to number
var result = Number(true);
console.log(`${result}`);

var result = Number(false);
console.log(`${result}`);

console.log(`Explicit Conversion : using string to number`);
var numberInString = "100";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);


console.log(`Explicit Conversion :number to string data type conversion using toString() method`);

var myNumber = 100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);

