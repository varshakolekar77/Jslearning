function Bank(bankName,location,ifscCode,branchCode){
       this.bankName = bankName;
       this.location = location;
       this.ifscCode = ifscCode;
       this.branchCode= branchCode;
       this.show = function(){
              console.log(`bankName : ${this.bankName}, location : ${this.location}, ifscCode : ${this.ifscCode}, branchCode : ${this.branchCode}`);
       }
}
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.time = "6 PM IST";


const yesBank= new Bank("yesBank","pune","Yes000123",445566);
yesBank.show();


const sbiBank = new Bank("sbiBank","nagpur","sbi000456",332277);
sbiBank.show();
const mahBank = new Bank("mahBank","solapur","mah000852",336699);
mahBank.show();
const axisBank = new Bank("axisBank","baramati","axis000779",115588);
axisBank.show();
console.log(`----------------prototype object---------------`);

console.log(`open time of sbiBank :`,sbiBank.openTime,`and close time of sbiBank :`,sbiBank.time);
console.log(`bankName : ${yesBank.bankName},open time of axisBank :`,axisBank.openTime,`and close time of axisBank :`,axisBank.time);
console.log(`bankName : ${yesBank.bankName}, branchCode : ${yesBank.branchCode},`,`open time of yesBank :`,yesBank.openTime);






