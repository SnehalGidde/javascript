console.log(`/-----------------1-Find greater number----------------/`);

var greaterFunction = function (num1, num2) {
    var result = num1 >= num2 ? ` 1.1) ${num1} is greater than  ${num2}` : `${num2} is greater`;
    console.log(result);
}
greaterFunction(10, -10)
greaterFunction(899, 800)

console.log(`/-----------------2-Find EVEN or ODD number----------------/`);

var isEvenOrOddNum = function (num) {
    var result = num % 2 == 0 ? true : false
    return result;
}

var result = isEvenOrOddNum(29);
var res = (result == true) ? ` 29 is even number` : `29 is =>  odd number`
console.log(`${res}`);


var result = isEvenOrOddNum(44);
var res = (result == true) ? `44 is =>  even number` : `44 is =>  odd number`
console.log(`${res}`);



var result = isEvenOrOddNum(0);
var res = (result == true) ? `0 is =>   even number` : `0 is =>  odd number`
console.log(`${res}`);



var result = isEvenOrOddNum(101);
var res = (result == true) ? ` 101 is => even number` : `101 is =>  odd number`
console.log(`${res}`);



console.log(`/-----------------3.-Check which word has EVEN or ODD length----------------/`);


var wordLength = function (word) {
    var len = word.length;
    var result = len % 2 == 0 ? "EVEN" : "ODD";
    return result;
}
console.log(`1] Given word are: "javaScript"`);
var returvalue = wordLength("javaScript");

console.log(`javaScript is  ${returvalue} wordLength`);


console.log(`2] Given word are: "developer"`);
var returvalue = wordLength("developer");

console.log(`developer is  ${returvalue} wordLength`);


console.log(`3] Given word are: "Google"`);
var returvalue = wordLength("Google");

console.log(`Google is  ${returvalue} wordLength`);



