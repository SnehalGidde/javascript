
function factorialOfNum(number) {
    if (number == null || number == undefined) {
        console.log(`invalid input = ${number} `);
        console.log(`-----------------------------------------`);
    }
    else {
        var factorial = 1;
        for (let index = 1; index <= number; index++) {

            factorial = factorial * index;
        }
        return factorial;
    }

}
var f = factorialOfNum(5)
console.log(`Factorial of 5 is = ${f}`);
console.log(`-----------------------------------------`);
factorialOfNum(5)
var f = factorialOfNum(3)
factorialOfNum(3)
console.log(`Factorial of 3 is = ${f}`);
console.log(`-----------------------------------------`);
factorialOfNum(null)
var f = factorialOfNum(8)
factorialOfNum(8)
console.log(`Factorial of 8 is = ${f}`);
console.log(`-----------------------------------------`);
factorialOfNum(undefined)
var f = factorialOfNum(9)
factorialOfNum(9)
console.log(`Factorial of 9 is = ${f}`);
console.log(`-----------------------------------------`);
var f = factorialOfNum(0)
factorialOfNum(0)
console.log(`Factorial of 0 is = ${f}`);
console.log(`-----------------------------------------`);