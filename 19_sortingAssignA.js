const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
 console.log(`1. ====================== Reverse the array ====================`);
 arrayRollNumbers.reverse();
 console.log(arrayRollNumbers);

 console.log(`2. ====================== using sort()method without any custom sorting logic ====================`);
 arrayRollNumbers.sort();
 console.log(arrayRollNumbers);

 console.log(`3. ====================== sort the array using custom sorting logic ====================`);
 arrayRollNumbers.sort((a,b)=>{
   return a>b ? 1 :-1 ;
 });
 console.log(arrayRollNumbers);

 console.log(`4. ====================== Greatest no from the array ====================`);
let greatestNO= arrayRollNumbers[arrayRollNumbers.length-1];
console.log(greatestNO);
//console.log(greatestNo);
console.log(`5. ====================== Smallest no from the array ====================`);
let lowestNO= arrayRollNumbers[0];
console.log(lowestNO);
console.log(`6. ====================== Remove duplicate elements from the array ====================`);
const arrayOfUniqueElements =  [...new Set(arrayRollNumbers)];
console.log(arrayOfUniqueElements);
