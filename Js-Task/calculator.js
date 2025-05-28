function add(num1, num2){
    const addTotal = num1 + num2;
    return addTotal;
}

function subtract (num1, num2){
    const subtractTotal = num1 - num2;
    return subtractTotal;
}

function multiply(num1, num2){
    const multiplyTotal = num1 * num2;
    return multiplyTotal;
}

function divide(num1, num2){
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    const divideTotal = num1 / num2;
    return divideTotal;
}

function calculator(a, b, operation){
    if(operation === "add"){
        const result = add(a,b);
        return result;
    }
    else if(operation === "subtract"){
        const result = subtract(a,b);
        return result;    
    }
    else if(operation === "multiply"){
        const result = multiply(a,b);
        return result;
    }
    else if (operation === "divide"){
        const result = divide(a,b);
        return result;
    }
    else{
        return "Error: Invalid operation";
    }
}

const result=calculator(10, 5, "add");
console.log("Result:", result);
const result2=calculator(10, 5, "subtract");
console.log("Result:", result2);
const result3=calculator(10, 5, "multiply");
console.log("Result:", result3);
const result4=calculator(10, 5, "divide");
console.log("Result:", result4);