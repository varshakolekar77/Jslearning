class Bank {
    constructor(bankName,location,accountNo,ifscode,interestRate){
    this.bankName=bankName;
    this.location=location;
    this.accountNo=accountNo;
    this.ifscode= ifscode;
    this.interestRate = interestRate;
    }
}
    const axis_bank = new Bank("axis_bank","pune","axi4567",456789,5);
    console.log(axis_bank);
    const sbi_bank=new Bank("sbi_bank","nagpur","sbi4589",445566,7);
    console.log(sbi_bank);
    const icici_bank=new Bank("icici_bank","solapur","icici7896",995566,9);
    console.log(icici_bank);
    const kotak_bank=new Bank("kotak_bank","baramati","kotak4585",445566,7);
    console.log(kotak_bank);
    const hdfc_bank=new Bank("hdfc_bank","rahuri","hdfc8594",458931,8);
    console.log(hdfc_bank);
    const punjab_bank=new Bank("punjab_bank","malegaon","punjab7895",785412,8);
    console.log(punjab_bank);

const setOfBanks = new Set();
    
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfc_bank);
setOfBanks.add(punjab_bank);
console.log(`-------------------Add all object element in a set-------------`);
console.log(setOfBanks);
console.log(`-------------------Traverse the set using for of loop----------------`);
for (const bank of setOfBanks) {
    console.log(`bankName : ${bank.bankName}`,`location : ${bank.location}`);
}