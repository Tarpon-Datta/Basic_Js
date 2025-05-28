function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

function leapyear (year){
    if (year%100 !== 0 && year%4==0){
        return true;
    }
    else if (year%400==0){
        return true;
    }
    else{
        return false;
    }
}

const isLeap = isLeapYear(2049);
console.log(isLeap); 

const isleap2 = leapyear(2052);
console.log(isleap2);