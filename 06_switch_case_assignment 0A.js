function monthOfYear(monthNumber){
 switch (monthNumber) {
    case 1:
        console.log(`Name of month ${monthNumber}:january`);
        break;
    case 2:
        console.log(`Name of month ${monthNumber}:february`);
        break;
    case 3:
        console.log(`Name of month ${monthNumber}:march`);
        break;
    case 4:
        console.log(`Name of month ${monthNumber}:april`);
        break;
    case 5:
        console.log(`Name of month ${monthNumber}:may`);
        break;
    case 6:
        console.log(`Name of month ${monthNumber}:june`);
        break;
    case 7:
        console.log(`Name of month ${monthNumber}:july`);
        break;
    case 8:
        console.log(`Name of month ${monthNumber}:august`);
        break;
        case 9:
        console.log(`Name of month ${monthNumber}:september`);
        break;
        case 10:
        console.log(`Name of month ${monthNumber}:octomber`);
        break;
    case 11:
        console.log(`Name of month ${monthNumber}:november`);
        break; 
    case 12:
        console.log(`Name of month ${monthNumber}:December`);
        break;                                                           
 
    default:
        console.log(`Name of month is Invalid: ${monthNumber}`);
        break;
 }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);