function squareOfWordLength(number, str) {

    var length;
    var result = str.length;
    console.log( `${number}: Length of given string is ${str}:  ${result}`);
    console.log(`. Square of number of characters is : ${result * result} `);
}
squareOfWordLength(1, "javaScript");
squareOfWordLength(2, "Google Chrome");
squareOfWordLength(3, "Developer Smart");

console.log(`/-----------------------------------------------------------/`);

function string() {

    var str = "I am Angular Developer";
    var lengthstr;
    var res = str.length;
    var result = str.split(" ");
    var totalWords = result.length;

    console.log(`Given string:  I am Angular Developer `);

    console.log(`Length of the word in given string: ${totalWords}`);

    console.log(`Total character in the string : ${res}`);


    console.log(` 2.1)Total character divided by total word in string : ${res / totalWords}`);

    console.log(` 2.2)Total character multiply by total word in string : ${res * totalWords}`);
}
string();

