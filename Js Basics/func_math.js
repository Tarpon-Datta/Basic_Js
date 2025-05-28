function doMath(num1, num2){
    sum = num1 + num2;
    sub = num1 - num2;
    mul = sum * sub;
    result = mul/2;
    return result;
}

const math = doMath(10,5)
console.log('output:', math);

function isEven(num){
    if(num%2===1){
        return 'the value is even';
    }
    else{
        return 'the value is odd';
    }
}
const even =isEven(10);
console.log('even value:', even);

// write a function to give me the sum of all the number of array

function sumOfNumbers(numbers){
    let sum =0;
    for( let i =0; i<numbers.length; i++){
        const element = numbers[i];
        sum+=element;
        
    }
    return sum;
}
const add = sumOfNumbers([10,20,30,40,50]);
console.log('sum of the numbers:', add);

function evenNumber(numb){
    let even = [];
    let sum =0;
    for(let i=0; i<numb.length; i++){
        if(numb[i]%2===0){
            even.push(numb[i]);
        }
    }
    return even;
}

const evens = [0,1,2,3,4,5,6,7,8];

console.log('The even numbers are -->',evenNumber(evens));

function sumOfEvens(evens) {
    let sum =0;
    for (const number of evens){
        if(number%2===0){
            sum+= number;
        }
    }
    return sum;
}
const sumValues = sumOfEvens(evens);
console.log('sum of even numbers:',sumValues);
// console.log('sum of odd numbers:',sumValues);