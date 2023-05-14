var num1 = 5;
var num2 = 6;
var num3 = 25;
var num4 = 100;


var square = function (num1, num2, num3, num4) {
    var result1 = num1 * num1;
    console.log(`Square of 5 is: ${result1}`)
    var result2 = num2 * num2;
    console.log(`Square of 6 is: ${result2}`)
    var result3 = num3 * num3;
    console.log(`Square of 25 is: ${result3}`)
    var result4 = num4 * num4;
    console.log(`Square of 100 is: ${result4}`)
    var typeOfsquqre = typeof square;
    console.log(`Type of function is: ${typeOfsquqre}`);
}
square(5, 6, 25, 100);
var length = 499;
var width = 917;
var area = function (value1, value2) {
    var result = value1 * value2;
    console.log(`Area og rectangle is: ${result} `);
}
area(length, width);
var first = "Virat";
var second = "Anushka";
var num1 = 1000;
var num2 = 2000;
var swapValue = function (value1, value2) {
    console.log(`Before swap value: "firstName" ${first},"secondName" ${second}`);
    var temp = first;
    first = second;
    second = temp;
    console.log(`After swap value: "firstName" ${first},"secondName" ${second}`);


    console.log(`Before swap value: "firstNumber" ${num1},"secondNumber" ${num2}`);
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`After swap value: "firstNumber" ${num1},"secondNumber" ${num2}`);
}

var stringlength = 7;
swapValue(first, second);

var string = "JS the most popular language of internet";
var method = function (num) {
    var resultSplit = num.length;

    console.log(`A. Total character available in the string: ${resultSplit}`);

    var charAtIndexSix = num.charAt(6);
    console.log(`B.Char at index 6 is: ${charAtIndexSix}`);


    var charAtIndexEleven = num.charAt(11);
    console.log(`C.Char at index 11 is: ${charAtIndexEleven}`);


    var charAtLastIndex = num.charAt(num.length - 1);
    console.log(`D.Last character using length property: ${charAtLastIndex}`);

    var charAtFirstIndex = num.charAt(0);
    console.log(`E.First character of given string: ${charAtFirstIndex}`);

    var resultsplit = num.split(" ");
    console.log(`F a).Total number words of given string: ${resultsplit.length}`);
    console.log(`  b).Square of total number words of given string: ${resultsplit.length*resultsplit.length} `);
}
method(string);


