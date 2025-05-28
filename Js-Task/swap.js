let a = 7;
let b = 6;

console.log(a, b);
// Swap the values of a and b
const temp = a;
a = b;
b = temp;
console.log(a,b);

// -------------------------------
let x = 5;
let y = 10;
console.log(x,y);
[x,y] = [y, x];
console.log(x,y);