let arraySeasonalFruit = ["Banana","Orange","Apple","Mango","Water Melon"];

let length=arraySeasonalFruit.length;


let firstElement=arraySeasonalFruit[0];
console.log(`First Element of the Given array:${firstElement}`);

let lastElement=arraySeasonalFruit[length-1];
console.log(`Last element of the Given array:${lastElement}`);

console.log(`-----------------Add Element-->papaya before the element Banana---------------`);
arraySeasonalFruit.unshift("Papaya");
console.log(arraySeasonalFruit);

console.log("----------------Removed `Mango` from the given array-----------");
arraySeasonalFruit.splice(4,1);
console.log(arraySeasonalFruit);

console.log("----------------Add element an element `Pineapple` at last position");
arraySeasonalFruit.push('Pineapple');
console.log(arraySeasonalFruit);

console.log("-----------------------Insert an element -->'Dragon Fruit' before 'Water Melon'------------ ");
arraySeasonalFruit.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruit);

console.log("-----------------Replace an element `Orange` with `Kiwi`--------------");
arraySeasonalFruit.splice(2,1,"Kiwi");
console.log(arraySeasonalFruit);

console.log("----------------Elements starting from index 1 to 4");
const arrayFromIndex4 = arraySeasonalFruit.slice(1,4);
console.log(arrayFromIndex4);

console.log("-----------------------Last three elements------------------");
const subArray =arraySeasonalFruit.slice(4);
console.log(subArray);


