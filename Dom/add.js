console.log("====== Adding Hobbies ====");
const element= document.querySelector("#hobby");
 const elementh1= document.createElement("h3");
 const elementText1 = document.createTextNode("1.dancing");
elementh1.appendChild(elementText1);
document.body.appendChild(element);



const h1Element = document.querySelector("#hobby");
h1Element.addEventListener("click" ,()=>{
    //console.log(`click event.............`);
    const element= document.querySelector("#hobby");
 const elementh1= document.createElement("h3");
 const elementText1 = document.createTextNode("1.dancing");
elementh1.appendChild(elementText1);
document.body.appendChild(element);
    const inputValue = prompt("enter the hobby","hobbies");
console.log(inputValue);
})

 const h2Element= document.querySelector("#no");
 h2Element.addEventListener("click",()=>{
    //console.log(`click event..........`);
    const inputValue= prompt("Please enter number to check..", 0);
    console.log(inputValue);
    
    let isPrime=true;
    for (let index = 2; index < inputValue; index++) { // num = 7 index= 7
       
        if(inputValue%index==0){
            isPrime=false;
            break;
        }
    }
    if (isPrime) {
        console.log(`Given no is prime no`);
    }
    else{
        console.log(`Given no is not prime no`);
    }
})
