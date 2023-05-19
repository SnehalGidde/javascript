
// dayNumber
// 1  - Monday
// 2  - Tuesdays
// 3  - Wed
// 4 - Thursday
// 5 - Friday
// 6 - Saturday
// 7 - Sunday

function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`January as month number is:  ${monthNumber}`);
            break;
        case 2:
            console.log(`February as month number is: ${monthNumber}`);
            break;
        case 3: console.log(`March as month number is: ${monthNumber}`);
            break;
        case 4: console.log(`April as month number is: ${monthNumber}`);
            break;
        case 5:
            console.log(`May as month number is:  ${monthNumber}`);
            break;
        case 6:
            console.log(`June as month number is:  ${monthNumber}`);
            break;
        case 7:
            console.log(`July as month number is: ${monthNumber}`);
            break;

        case 8:
            console.log(`August as month number is:  ${monthNumber}`);
            break;

        case 9:
            console.log(`September as month number is:  ${monthNumber}`);
            break;
        case 10:
            console.log(`Octumber as month number is:  ${monthNumber}`);
            break;
        case 11:
            console.log(`November as month number is:  ${monthNumber}`);
            break;
        case 12:
            console.log(`December as month number is:  ${monthNumber}`);
            break;
        
        default:
            console.log(`Invalid input ==>  ${monthNumber}`);
            break;
    }
}
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);

monthOfYear(null);
monthOfYear(undefined);
monthOfYear(NaN);