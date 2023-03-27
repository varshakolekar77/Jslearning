const arrayNumbers = [20, 11, 40, 25,  37, 49, 9, 90, 60, 2, 19];

console.log(`Given array : ${arrayNumbers}`);

console.log(`========================= Numbers are greater than 50 ====================`);
const greaterValue= arrayNumbers.filter (currentValue => {
    return currentValue >50;
})
    console.log(greaterValue);

 console.log(`========================= All the even Numbers ====================`);
 const even= arrayNumbers.filter((cueeentValue)  => {
    return cueeentValue%2 == 0;
 })
 console.log(even);

 console.log(`========================= All the odd Numbers ====================`);
 const odd= arrayNumbers.filter((cueeentValue)  => {
    return cueeentValue%2 !== 0;
 })
 console.log(odd);

 console.log(`========================= Numbers multiple of 5 ====================`);
 const multiple= arrayNumbers.filter((cueeentValue)  => {
    return cueeentValue%5 == 0;
 })
 console.log(multiple);

 console.log(`========================= Numbers between 20 and 50 ====================`);
 const numbersBetween= arrayNumbers.filter((cueeentValue)  => {
    return cueeentValue <50 && cueeentValue>20;
 })
 console.log(numbersBetween);




    
