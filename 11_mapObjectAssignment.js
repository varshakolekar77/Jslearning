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
    const Sbi_bank=new Bank("sbi_bank","nagpur","sbi4589",445566,7);
    console.log(Sbi_bank);
    const icici_bank=new Bank("icici_bank","solapur","icici7896",995566,9);
    console.log(icici_bank);
    const kotak_bank=new Bank("kotak_bank","baramati","kotak4585",445566,7);
    console.log(kotak_bank);
    const hdfc_bank=new Bank("hdfc_bank","rahuri","hdfc8594",458931,8);
    console.log(hdfc_bank);
    const punjab_bank=new Bank("punjab_bank","malegaon","punjab7895",785412,8);
    console.log(punjab_bank);

   const mapOfBank= new Map();
   
   mapOfBank.set("axis_bank",axis_bank);         //set the vaue on the form of key and value
   mapOfBank.set("sbi_bank",Sbi_bank);
   mapOfBank.set("icici_bank",axis_bank);
   mapOfBank.set("kotak_bank",axis_bank);
   mapOfBank.set("hdfc_bank",axis_bank);
   mapOfBank.set("punjab_bank",Sbi_bank);
   

   //console.log(`-----------------Map-->key :accountNo and value is object-------------------------`);
 //const element = mapOfBank.get(accountNo);
 //console.log(mapOfBank,element);

console.log(`-------------------------------Travesre the map using for of loop-------------`);

 const keysOfMap = mapOfBank.keys();
for (const key of keysOfMap) {
    const element = mapOfBank.get(key);
    console.log(`bankName : ${key}  ,accountNo : ${element.accountNo},interasteRate : ${element.interestRate}`);
}