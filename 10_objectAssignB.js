let bankSbi = {
    bankName : "sbiBank",
    location : "pune",
    accountNo : 123569,
    ifscCode : "sbi234",

}
let bankLocation = {
    street : "wakad",
    city : "pune",
    pinCode : 456892,
}
console.log(`-----------------------------clone using object.assign operator-------------`);
const bank = bankSbi;
console.log(bank);

const location = bankLocation;
console.log(location);

console.log("--------------------------- clone using spread operator-----------------------"); 
const newBank ={...bankSbi};
console.log(newBank);
const newLocation = {...bankLocation};
console.log(newLocation);

let rateOfInterest = {
    homeLoanInterest : 9,
    personalLoanInterest : 10,
    dueInterest : 8,

}
const sbiDetails = {};
Object.assign(sbiDetails,bank,location,newBank,newLocation,rateOfInterest);
console.table(sbiDetails);
console.log(`---------------------------travesre the object using for in loop-----------------`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(key,element);
        
    }
}