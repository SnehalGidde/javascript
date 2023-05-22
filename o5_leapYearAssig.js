
console.log(`/---------------------Check Leap Year Or Not-----------------------/`);
var checkLeapYear = function (leapYear) {
    //three conditions to find out the leap year
    if (leapYear == undefined || leapYear == null || isNaN(leapYear)) {
        console.log(` ${leapYear} : This is invalid data. `);
    }
    else if ((leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0) {
        console.log(` ${leapYear} : is a leap year. `);
    } else {
        console.log(` ${leapYear} : is not a leap year. `);
    }

}
checkLeapYear(2020)
checkLeapYear(1999)
checkLeapYear(1600)
checkLeapYear(2022)
checkLeapYear(1945)
checkLeapYear(1750)
checkLeapYear("Twenty Twenty")
checkLeapYear(undefined)
checkLeapYear(null)
checkLeapYear(NaN)



