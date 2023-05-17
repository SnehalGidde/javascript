
console.log(`==================TCS interview eligiblity==================`);
  var count =1;
function tscEligibility(gradScore, hscScore, sscScore, candidateName ) {
    var result = (gradScore >= 70) || (hscScore >= 80) || (sscScore > 90) ? ` Congrats ${candidateName} you are eligible for TCS interview` : ` Unfortunatly ${candidateName} you are not eligible for interview`;
    console.log(` 1.3.${count++})${result}`);
    console.log(`/--------------------------------------------------------/`);
}
tscEligibility(80, 86, 90, "Snehal")
tscEligibility(70, 65, 55, "Tejasvini")
tscEligibility(60, 79, 88, "Sukanya")