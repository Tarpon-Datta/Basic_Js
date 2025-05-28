// inch to feet
// we know 12 inches = 1 feet

function inchTofeet(inch){
    const feet = inch / 12;
    return feet;
}

function inchTofeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " feet " +  inchRemaining +  " inches.";
    return result;
}

function mileTokilometer(mile){
    const km = mile*1.60934;
    return km;
}

const myHeight =inchTofeet(73);
console.log(myHeight);

const myHeight2 = inchTofeet2(75);
console.log(myHeight2);


const milestone = mileTokilometer(5);
console.log(milestone);

// Write a function to convert temperature from Celsius to Fahrenheit.

function celciusTofarhenheit(celcius){
    const farhenheit = (celcius* 9/5) +32;
    return farhenheit;
}

const temp = celciusTofarhenheit(33);
console.log("The celcius to farhenheit",temp);