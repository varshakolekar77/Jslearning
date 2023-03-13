console.log(`--------------------------- step 1--> class for vechile--------------------------`);
class Vechile {
    constructor(carName,carColour,carModel,carPrize,carEngine){
        this.carName=carName;
        this.carColour=carColour;
        this.carModel=carModel;
        this.carPrize=carPrize;
        this.carEngine=carEngine;
    }

}
const Baleno= new Vechile("Baleno","white","top",650000,"Disel");
console.log(Baleno);
const swift = new Vechile("Swift","Red","Second",950000,"Petrol");
console.log(swift);
const Wagnor = new Vechile("Wagnor","silver","second-top",700000,"Cng");
console.log(Wagnor);
const Breeza  = new Vechile("Breeza","white","top",1000000,"Diesel");
console.log(Breeza);
const Ertiga = new Vechile("Ertiga","white","second",1100000,"petrol");
console.log(Ertiga);

console.log(`------------------add into array--> Traverse it-------------------------`);
arrayOfVechile = [Baleno,swift,Wagnor,Breeza,Ertiga];
for (const element of arrayOfVechile) {
    console.log(`Vechile details : ${element.carName},${element.carColour},${element.carModel},${element.carPrize},${element.carEngine}`);
    
}
console.log(`-----------------------Step 2--> class for college-----------------------`);
class College {
    constructor(collegeName,university,location,department){
       this.collegeName =collegeName;
       this.university = university;
       this.location = location;
       this.department = department;
       
    }

}
 const svpm= new College("Svpm","Pune University","Malegaon","Engineering");
 console.log(svpm);

 const spmm= new College("Spmm","Pune University","Shardanagar","commerce&science");
 console.log(spmm);
 const vp= new College("vp","Pune University","Baramati","Engineering");
 console.log(vp);

 const Ms= new College("Ms","Pune University","someshwar","Pharmacy");
 console.log(Ms);
 console.log(`------------------------step 3--> traverse using for in loop-------------------------`);

 traverseObject = function(value){
    for (const key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
            const element = value[key];
            console.log(`${key} :${element}`);
        }
    }

 }
 traverseObject(svpm);
 console.log(`-------------------------------------------------------`);
 traverseObject(spmm);
 console.log(`-------------------------------------------------------`);
 traverseObject(vp);
 console.log(`--------------------------------------------------------`);
 traverseObject(Ms);
 console.log(`---------------------------------------------------------`);

 