const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`**************array element with it's index***********************`);
arrayNumbers.forEach((currentValue,index) => {
    console.log(`Index : ${index}`,`Element : ${currentValue}`);
});

console.log(`**************Positive numbers*****************************`);
arrayNumbers.forEach((element) =>{
    if(element>0){
        console.log(element);
    }
})

console.log(`**************Negative numbers***************************`);
const array2 =[];
arrayNumbers.forEach((element) =>{
    if(element<0){
        array2.push(element)
    }
})
console.log(array2);

console.log(`**************Even numbers***********************`);
const array =[];
arrayNumbers.forEach((element) =>{
    if(element%2 ==0){
        array.push(element);
    }
})
console.log(array);

console.log(`**************Sum of all element from arrayNumbers*************`);
 let sum=0;
arrayNumbers.forEach((element) =>{
    sum = sum +element;
    
})
console.log(sum);

console.log(`*************************Only even index element********************`);
const array1 =[];
arrayNumbers.forEach((element,index)  =>{
    if (index % 2 ==0) {
        array1.push(element)
    }
    
})
console.log(array1);
