/*var year = 1700;

if(year%400 ==0 || year%4==0 && year%100!=0){
    console.log("LeapYear")
}
else{
    console.log(" Not LeapYear")
}*/

function isLeapYear(year){
    if(year%400==0 || year%4==0 && year%100!=0){
        return 'LeapYear';
    }
    else{
        return 'Not LeapYear';
    }
}

var check1700 = isLeapYear(1700);
console.log(check1700);