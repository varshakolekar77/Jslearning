let sbiBank ={
    bankName : "sbiBank",
    location : "pune",
    accountNo : 1234567,
    ifsc : 456789,
    interestRate : 5,

}
let axisBank = {
  bankName : "axisBank",
  location : "baramati",
  accountNo : 4455662,
  ifsc : 123456,
  interestRate : 4.5,
}
let hdfcBank = {
  bankName : "hdfcBank",
  location : "solapur",
  accountNo : 6578901,
  ifsc : 456789,
  interestRate : 7.5,
}
 let yesBank = {
  bankName : "yesBank",
  location : "nagpur",
  accountNo : 6557781,
  ifsc : 674789,
  interestRate : 10,
}
let showDetails=function(){
  console.log(`bankName : ${sbiBank.bankName} , location : ${sbiBank.location} , accountNo : ${sbiBank.accountNo} , Ifsc : ${sbiBank.ifsc} , interestRate : ${sbiBank.interestRate}`);
  console.log(`bankName : ${axisBank.bankName} , location : ${axisBank.location} , accountNo : ${axisBank.accountNo} , Ifsc : ${axisBank.ifsc} , interestRate : ${axisBank.interestRate}`);
  console.log(`bankName : ${hdfcBank.bankName} , location : ${hdfcBank.location} , accountNo : ${hdfcBank.accountNo} , Ifsc : ${hdfcBank.ifsc} , interestRate : ${hdfcBank.interestRate}`);
  console.log(`bankName : ${yesBank.bankName} , location : ${yesBank.location} , accountNo : ${yesBank.accountNo} , Ifsc : ${yesBank.ifsc} , interestRate : ${yesBank.interestRate}`);
}
showDetails(sbiBank,axisBank,hdfcBank,yesBank);






 
 
