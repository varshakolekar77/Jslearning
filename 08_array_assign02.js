let arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]

console.log(`Given array : ${arrayNumbers}`);

console.log(`-------------------step 1------------------`);
let length=arrayNumbers.length;
console.log(` Total length of given array : ${length}`);

console.log(`-------------------step 2------------------`);
let firstElement=arrayNumbers[0];
console.log(`First element of given array : ${firstElement}`);
let lastElement=arrayNumbers[length-1];
console.log(`Last element of given array : ${lastElement}`);

console.log(`-------------------step 3------------------`);
let ThirdlastElement=arrayNumbers[length-3];
console.log(`Thirst last element using length property : ${ThirdlastElement}`);

console.log(`---------------- step 4--> Even numbers from the given array------------------`);

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];    //20 31 40
    if (element%2==0) {
     console.log(element);   
    }
  
}

console.log(`--------------- step 5 -->Odd numbers from the given array------------------`);

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];    //0 1
    if (element%2!==0) {
        console.log(element);
    }
  
}

console.log(`-------------------------step 6 --> Even positional elements from arrayNumbers & Sum-----------------`);
let sum=0;
for (let index = 0; index <arrayNumbers.length; index++) {
        
    if (index%2==0) {
       console.log(arrayNumbers[index]);
       sum=sum+arrayNumbers[index];
    }
  
}
console.log(`sum of even positional element : ${sum}`);

console.log(`-------------------------step 7--> Odd positional elements from arrayNumbers & Sum-----------------`);
let sum1=0;
for (let index = 0; index <arrayNumbers.length; index++) {
        
    if (index%2!==0) {
        console.log(arrayNumbers[index]);
       
       sum1=sum1+arrayNumbers[index];
    }
  
}

console.log(`sum of Odd positional element : ${sum1}`);

console.log(`--------------------step 8--> sum of all elements from arrayNumbers------------------`);
let sum2=0; 
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
   sum2 = sum2 + element;
   
}
console.log(sum2);

console.log(`-------------------step 9--> find the numbers which are multiple of 5--------------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        
        console.log(element);
    }
}

console.log(`--------------------------step 10--> is number 115 available in arrayNumbers-----------------------`);
let is115Available=arrayNumbers.includes(115);
console.log(`is 115 available : ${is115Available}`);

console.log(`--------------------------step 11--> is number 23 available in arrayNumbers-----------------------`);
let is23Available=arrayNumbers.includes(23);
console.log(`is 23 available : ${is23Available}`);

console.log(`-------------------step 12--> insert numbers-->55,66 before index 3-----------------------`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`--------------step 13--> Delete 3 elements starting from index 4-----------------`);
let removeElement=arrayNumbers.splice(4,3);
console.log(`Removed elements : ${removeElement}`);
console.log(arrayNumbers);





