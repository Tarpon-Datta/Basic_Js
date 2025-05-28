// while loop
let num1 = 2;
while (num1 < 10){
    console.log(num1);
    num1++;
}

// calculate sum
let num2 = 1
let sum = 0
while(num2<=10){
    // console.log(num2)
    sum = sum +num2
    num2++
    console.log("Result: ",sum)
}

// give odd number only
let num3 = 1;
while (num3 <= 20) {
    if (num3 % 2 !== 0) {
        console.log("even number:", num3);
    }
    num3++;
}

// For Loop
let string;
// // Outer loop for rows
for(let i=0; i<=5 ; i++){
    //  // Inner loop for characters in each row
     for(let j=0; j<i; j++){
        // // Accumulate(store) asterisks in the 'string' variable
        string =string + ("o")
    }
    // // Print the accumulated characters for the current row
    console.log(string)
    // // Reset the 'string' variable for the next row
    string = ""
}
