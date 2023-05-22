
console.log(`/-------------1. Count the total number of Vowels available in given String ---------------------/`);

console.log(`Given string is : "I am very good IT Developer"`);
var str = "I am very good IT Developer"
var count = 0;
var result = str.toLowerCase();

for (let index = 0; index < str.length; index++) {
    if (result.charAt(index) == "a" || result.charAt(index) == "e" || result.charAt(index) == "i" || result.charAt(index) == "o" || result.charAt(index) == "u") {
        count++;
    }
}
console.log(`1.2) Total number of Vowels available in given String : `, count);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`/----------------2. Sum of cube of numbers from 1 to 5--------------------------/`);
var number = 1;
var sum = 0;
var sumOfcube = function () {
    var cube = 0;
    for (let index = 1; index <= 5; index++) {
        cube = index * index * index;
        console.log(` Cube of ${number} is = `, cube);
        number++;
        sum = sum + cube;
    }

}
sumOfcube(5)
console.log(`Sum of cube of number fron 1 to 5 is = `, sum);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`/----------------3. Old position character and not consider empty space------------------/`);


function oddPositionedChars(givenstring) {
    var str = "";
    for (let index = 0; index < givenstring.length; index++) {
        console.log(` Given string is = `, givenstring);
        var char = givenstring.charAt(index);


        if (index % 2 != 0 && char != " ") {
            str = str + char;

        }
    }
    
    console.log(`     odd position character =  `, str);
}
oddPositionedChars("Hard work always pays back")


oddPositionedChars("Soon i will be Angular IT champ")

