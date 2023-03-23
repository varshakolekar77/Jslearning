
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`************************* Add 10 in each element*******************************`);
const newArray= arrayNumbers.map ((element) => {
    return element + 10;
})
console.log(`Given array : ${arrayNumbers}`);
console.log(newArray);

console.log(`************************ square the each array element ********************************`);
console.log(`Gien array : ${arrayNumbers}`);
const newArray1 =arrayNumbers.map ((element) => {
    return element**2;
})
console.log(newArray1);

console.log(`************************* Adding the index value into each array element *******************************`);
console.log(`Gien array : ${arrayNumbers}`);
const newArray2= arrayNumbers.map((element,index) => {
    return element+index;
})
console.log(newArray2);
