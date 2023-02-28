
console.log(`==============Step 1==========`);
function voteEligibility(age){
    if(age>=18){
        console.log(`she is eligible for voting age is: ${age}`);
    }
    else{
        console.log(`she is not eligible for voting age is: ${age}`);
    }
    if(age<=0 || age>120 || age==undefined || age==null){
        console.log(`invalid data: ${age}`);
    }
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);


   





console.log(`==================Step 2===================`);
function gradeCalculation(marks){
    // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
    // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
    if(marks>=90){
        console.log(`Funtastic marks ${marks} Your grade is A+`); //a
    }
    if(marks>=75 && marks<90){
        console.log(`Excellent marks ${marks} Your grade is A`); //b
    }
    if(marks>=50 && marks<75){
        console.log(`Good marks ${marks} Your grade is B`);  //c
    }
    if(marks>=35 && marks<50){
        console.log(`Marks is ${marks} your grade is C,Need improvement`);  //d
    }
    if(marks==0 || marks<0 || marks>100 || typeof marks!="number"|| marks==null || isNaN(marks)){
        console.log(`Please provide the valid marks:${marks}`);     //e
    }
    
    }
    gradeCalculation(98);
    gradeCalculation(80);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Eighty");
    gradeCalculation(null);
    gradeCalculation(NaN);
    