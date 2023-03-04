function factorialOfNum(str) {
    
    if(str==null||str==undefined||isNaN()&&typeof(str)=="number"){
        console.log(`Given string: ${str}:Invalid data `);
    }
    else{
        var split=str.split(" ");
        
        splitLength=split.length;
        console.log(`Given string : ${str} total word is:`,splitLength);
        let factorial=1;
       
        for (let index = splitLength; index >=1; index--) {
            
            factorial=factorial*index; 
            
        
        }
        console.log(` factorial of given number:`,factorial);
        

    }
    
}
factorialOfNum(`Revision is the mother of success`);
factorialOfNum(`We never fail,we always learn`);
factorialOfNum(null);
factorialOfNum(`""`);
factorialOfNum(undefined);
factorialOfNum(NaN);
factorialOfNum("varsha balasaheb kolekar");

