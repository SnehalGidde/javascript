function stringHandsOn() {
    var givenString = "   Hey you are doing good, keep it up   ";
    console.log(" 1. Given string as it is -->    Hey you are doing good,  keep it up ");

    console.log(" 2. Length of the given string is--> ", givenString.length);


    var trimmedgivenString = givenString.trim();

    console.log(" 3. After remove loading and travelling extra spaes length is--> ", trimmedgivenString.length);

    console.log(" 4. Total no of removed extra spaces count are -->", givenString.length - trimmedgivenString.length);


    var givenString1 = "Hey you are doing good,keep it up";
    var charAtZeroIndex = givenString1.charAt(0);

    var charAtLastIndex = givenString1.charAt(givenString1.length - 1);

    console.log(" 5. First and last character of given string after remove extra spaces -->", charAtZeroIndex, charAtLastIndex);
}
stringHandsOn();

