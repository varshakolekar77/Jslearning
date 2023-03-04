function factorialOfNum(num){
    let factorial=1;
    if(num==null||num==undefined||isNaN(num)){
        console.log(`Given number:${num} is invalid data `);

    }else{
    for (let index = num; index >=1; index--) {
        factorial=factorial*index;
        
    }
    console.log(`Given number:${num} Factorial of given number:${factorial}`);
    
    }
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
factorialOfNum(NaN);
