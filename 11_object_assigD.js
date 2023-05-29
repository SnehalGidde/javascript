

let professor = {
    name: "Ganesh",
    age: "28",
    qualification: "M.sc PHD",
    subject: "Physics",
    degree: {
        Engineering: 'CSC',
        PHD: 'Adv Computing',
        Graduation: 'B.sc Physics',
        PostGraduation: 'M.sc Physics',

    },
    certificates: ['Hacker Rank Participation', 'Certificates in IFE course', 'Certificates in Adv Programming'],
    getDegree: function () {
        console.log(`Teacher Degrees are :--> Engineering:${this.degree.Engineering}, PHD: ${this.degree.PHD},  Graduation: ${this.degree.Graduation}, PostGraduation: ${this.degree.PostGraduation}`);    
    },
}
console.log(`1]  Accessing object properties`);

console.log(professor);

console.log(`-------------------------------------------------------------------------------------------------------`)
console.log(`2]  Include Nested Object Degree`);
let professordegree = professor.degree;


console.log(professordegree);


console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`3] Adding one Array `);

let Professorcertificates = professor.certificates
console.log(`Professor Certificates are : ${Professorcertificates}`);

console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`4] Professor Total Degrees are `);

professor.getDegree();

console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(` 5] Professor Total Experiance `);
let professorExperiance = "14 years";
console.log("Total Experiance is :", professorExperiance);

console.log(`----------------------------------------------------------------------------------------------------------`);

console.log(`6] Modified  and Existing  property `);
console.log("Existing object :",professor);
professor.qualification = 'B.sc'
console.log(professor);

console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`7] Add One New  Certificate `);

professor.certificates.push("Oracle Certified");
console.log(professor.certificates);


console.log(`--------------------------------------------------------------------------------------------------------------`);
console.log(`8] Last Element Of the Array Certificate `);
var arraylength = professor.certificates[professor.certificates.length-1];
console.log("Last Element is :",arraylength);