function interview(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congrats ${candidateName} you are eligible for TCS interview`:`${candidateName}  unfortunetly! you are not eligible for interview`;
    console.log(result);
}
interview(80,86,90,"varsha");
interview(70,65,55,"Gauri");
interview(60,79,88,"vrushali");
