console.log(`================= Grade Calculation ===================`);
function gradeCalculation(marks) {
    if (marks <= 0 || marks > 100 || isNaN(marks)) {
        console.log(`Marks is:  ${marks} => This is invalid `);
    }
    else if (marks >= 90) {
        console.log(`Fantastic marks: ${marks} => Your grade is A+`);
    }
    else if (marks >= 75) {
        console.log(`Excellent marks:  ${marks} => Your grade is A `);
    }
    else if (marks >= 50) {
        console.log(`Good marks: ${marks} => Your grade is B `);
    }
    else if (marks >= 35) {
        console.log(`Marks is:  ${marks} => Your grade is c, Need improvement `);
    }

}


gradeCalculation(98)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(-7)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(64)
gradeCalculation(49)
gradeCalculation("91")
gradeCalculation("Eighty")
gradeCalculation(undefined)
gradeCalculation(null)
