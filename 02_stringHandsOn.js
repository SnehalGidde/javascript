function stringHandsOn() {

    var givenString = "   Hey you are doing good, keep it up   ";
    console.log(" 1. Given string as it is -->    Hey you are doing good,  keep it up ");

    console.log(" 2. Length of the given string is--> ", givenString.length);


    var trimmedgivenString = givenString.trim();

    console.log(" 3. After remove loading and travelling extra spaes length is--> ", trimmedgivenString.length);

    console.log(" 4. Total no of removed extra spaces count are -->", givenString.length - trimmedgivenString.length);


    var givenString1 = "Hey you are doing good, keep it up";
    var charAtZeroIndex = givenString1.charAt(0);

    var charAtLastIndex = givenString1.charAt(givenString1.length - 1);

    console.log(" 5. First and last character of given string after remove extra spaces -->", charAtZeroIndex, charAtLastIndex);
    var resultSplit = givenString1.split(" ");

    console.log(" 6. Total number of words available in the string: ", resultSplit.length);
    var indexOfgood = givenString1.indexOf("good");
    console.log(" 7. Index of word good is: ", indexOfgood);
    var givenString1Slice = givenString1.slice(22);
    console.log(" 8 a). Print the substring starting from index 22 using slice method: ", givenString1Slice);

    var a = givenString1.substring(22);
    console.log(" 8 b). Print the substring starting from index 22 using substring method: ", a);

    var result = givenString1.endsWith("up");
    console.log(` 9. String is ends with word "up" : ${result}`);


    var result = givenString1.startsWith("Hey");
    console.log(` 10. String is starts with word "Hey" : ${result}`);



}
stringHandsOn();