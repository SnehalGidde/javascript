



sbiBank = {
    bankName: "SBI Bank",
    location: " Hinjawadi Main Branch",
    accountNo: " 123654789",
    ifsc: "sbiB00000057",
    interestRate: " 10% ",
    showDetails: function (totalDetails) {
        // `Person Details: Name ${this.name}, City: ${this.city} Age: ${this.age}`
        console.log(
            `1) Bank Details :=> BankName: ${this.bankName},Location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, InterestRate: ${this.interestRate}`
        );
    }

}

axisBank = {
    bankName: "Axis Bank",
    location: " Hadapsar Main Branch",
    accountNo: " 123645689",
    ifsc: "axisB00000037",
    interestRate: " 9% ",
    showDetails: function (totalDetails) {
        // `Person Details: Name ${this.name}, City: ${this.city} Age: ${this.age}`
        console.log(
            `2) Bank Details :=> BankName: ${this.bankName},Location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, InterestRate: ${this.interestRate}`
        );
    }
}

hdfcBank = {
    bankName : "HDFC Bank",
    location : " Gandhi Chauk ,Pandharpur",
    accountNo : " 1278954789",
    ifsc :" hdfcB00000067",
    interestRate :" 11% ",
    showDetails : function (totalDetails){
        // `Person Details: Name ${this.name}, City: ${this.city} Age: ${this.age}`
       console.log(
           `3) Bank Details :=> BankName: ${this.bankName},Location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, InterestRate: ${this.interestRate}`
           );
   }
}
yesBank = {
    bankName : "YES Bank",
    location : " Ambedkar Chauk ,Pandharpur",
    accountNo : " 123654789",
    ifsc : "yesB00000087" ,
    interestRate :" 13% ",
    showDetails : function (totalDetails){
         // `Person Details: Name ${this.name}, City: ${this.city} Age: ${this.age}`
        console.log(
            `4) Bank Details :=> BankName: ${this.bankName},Location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, InterestRate: ${this.interestRate}`
            );
    }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();