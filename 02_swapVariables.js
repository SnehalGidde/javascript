console.log('--------------Swap two Variables--------------');
var Name1 = "Sweety";
var Name2 = "Cutie";

console.log("Before Swap=->", "Name1: ", Name1, " Name2: ", Name2);
console.log("\n");

var temp = Name1;
Name1 = Name2;
Name2 = temp;
console.log("After Swap=->", "Name1:", Name1, " Name2:", Name2);
console.log("\n");
console.log('******************************************************');

console.log('--------------Swap three Variables--------------');
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("Before Swap=->", "num1: ", num1, " num2: ", num2, "num3:", num3);
console.log("\n");

var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log("After Swap=->", "num1: ", num1, " num2: ", num2, "num3:", num3);