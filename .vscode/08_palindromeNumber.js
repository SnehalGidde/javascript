function isPalindrome(str) {
    const arrayValues = str.split('');
    const reverseArrayValue = arrayValues.reverse();
    const reverseString = reverseArrayValue.join('');
    if (str == reverseString ) {
        console.log(`Given string is: "${str}"===> It is a palindrome`);
    } else {
        console.log(`Given string is: "${str}"===> It is not a palindrome`);
    }
}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");