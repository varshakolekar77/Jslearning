function stringHandsOn(){
    var givenString="     Hey you are doing good,keep it up       ";
    console.log("***********first step***************");
    console.log("string as it is:");
    console.log(givenString);
    
    console.log("***********second step****************");
    console.log("Length of string:");
    var stringLength=givenString.length;
    console.log("length of given string is:",stringLength);
    

    console.log("*************third step****************");
    console.log("Extra spaces removed that count:");
    var stringTrim=givenString.trim();
    console.log("Remove the leading and trailing extra spaces:",stringTrim ,"string length:",stringTrim.length);

    console.log("****************fourth step**********************");
    console.log("Total number of extra spaces count:",givenString.length-stringTrim.length);
    
    console.log("************fifth step**************");
    console.log("first and last character on the same line:");
    var stringChar=stringTrim.charAt(0);
    console.log("first character is:",stringChar);
    var stringChar=stringTrim.charAt(stringTrim.length-1)
     console.log("last character is:",stringChar);

     console.log("************sixthth step*****************");

     var splitResult =givenString.split(" ");
     console.log("total words available in the string:",splitResult.length);
    
     console.log("************seventh step*****************");
     console.log("find the index by string value:");
     var indexOfgood=givenString.indexOf('good')
     console.log("index of word good is:",indexOfgood);
    
    console.log("*********** eighth step*****************************");
    var sliceResult = givenString.slice(22);
    console.log(sliceResult);
    
    var subStringResult = givenString.substring(22);
    console.log(subStringResult);

    console.log("****************** nineth step**********************************");
    console.log("Is substring up includes in the string or not: ", givenString.includes("up"));

   console.log("**************************tenth step***************************");
   console.log("Is substring Hey includes in the string or not: ", givenString.includes("Hey"));



}
stringHandsOn();
