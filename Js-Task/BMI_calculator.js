let weight, height, bmi;
const isTarpon = true;
// Your weight in kg and height in meters
weight = 76.5
height = 1.63
if(isTarpon === true){
    bmi = weight / (height **2)
    console.log(bmi);

    if(bmi < 18.5){
        console.log("you are underweight")
    }
    else if(bmi>=18.5 && bmi<=24.9){
        console.log("you are normal")
    }
    else if(bmi>=25  && bmi<= 29.9){
        console.log("you are overweight")
    }
    else{
        console.log("you are obese")
    }

}