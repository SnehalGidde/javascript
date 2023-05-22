console.log(`==============TCS Enterview Eligibility==============`);

var checkEligibility = (gradeScore, hscScore, sscScore, candidateName) =>{
if(gradeScore>=70 || hscScore>=80 || sscScore>90){
    console.log(`Congrats ${candidateName} ==>  You are eligible for TCS interview`);
}
else {
    console.log(`Unfortunately ${candidateName} ==>  You are not eligible for TCS interview`);
}
}
checkEligibility(80, 86, 90, "Snehal")
checkEligibility(70, 65, 55, "Tejasvini")
checkEligibility(60, 79, 88, "Shreya")