


console.log(`1) log massege on console inside arrow function`);
let show = () => {
    console.log("1) Good Morning, Today is Monday");
}
show();
console.log(`-----------------------------------------------------------------`);
console.log(`2) with 3 arguments and no return value,performed multiplication `);
console.log(`a) Values to be passed 5, 5, 2`);

let multiplication = (num1, num2, num3 = 1) => {
    let multi = num1 * num2 * num3;

    console.log(`Multiplication is : ${multi}`);

}
multiplication(5, 5, 2);
console.log(`b)Invokke the same Function for value 10, 4`);
multiplication(10, 4);
console.log(`-------------------------------------------------------------------`);
console.log(`3) with 5 args and no return value ,do the addition`);
let addition = (num1, num2, num3, num4, num5) => {
    let add = num1 + num2 + num3 + num4 + num5;
    console.log(`Addition is : ${add}`);
}
addition(100, 100, 200, 349, 756);
addition("I am", " Learning", " ES6", " features", " in depth");