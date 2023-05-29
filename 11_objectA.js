
professor = {
    name : " Junsin Yi",
    education : " PHD ",
    gender : "Male",
    age : "50",
    subject : "Physics",
    city : "Soul",
    totalExprience : "14 years",
    degrees: {
        engineering : "CSC",
        PHD : "Adv Computing",
        masters : "Computer Science",
        graduation : "Statistics",
   
     certificates : ["Hacker Rank Participation","Certificate in IFF course", "Certificate in Adv Programming"],
     
    addDegrees : function (totalDegree) {
       // `Person Details: Name ${this.name}, City: ${this.city} Age: ${this.age}`
        console.log(
            `4) Teacher Degrees are :--> Engineering: ${this.engineering}, PHD: ${this.PHD}, Masters: ${this.masters}, Graduation: ${this.graduation}`
            );
    
        
    }
},

   
}
professor.degrees.addDegrees();
console.log(professor );
professor.city = "mumbai";
console.log(`6) professor city is : ${professor.city}`);
professor.degrees.certificates.push("Oracle Certified");
console.log(`7) ${professor.degrees.certificates}`);
var arraylength = professor.degrees.certificates.length;
console.log(arraylength);