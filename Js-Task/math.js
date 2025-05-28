// const math = {
//     min: function num (a,b){
//         return a;
//     }
// }

// console.log(math.min);

// console.log(Math.max);

const min= Math.min(45, 21 , 78, 12, 99, 126,34, -99);
const max= Math.max(45, 21 , 78, 12, 99, 126,34, -99);
console.log("The smallest number of the array:",min);
console.log("The largest number of the array:",max);

console.log("The constant value of PI: ",Math.PI);

// the act of abs function
console.log(Math.abs(-45));
console.log(Math.abs(10-45));
console.log(Math.abs(100-45));


// the act of round, floor, ceil, random function
console.log(Math.round(45.5));
console.log(Math.round(3.1416));
console.log(Math.floor(3.1416));
console.log(Math.ceil(3.1416));
console.log(Math.random());
console.log(Math.random()*10);

const rand = Math.round(Math.random()*10)
console.log(rand);

// Write a function to find the longest word in a given string.
function longestWord(str){
    const words = str.split(" ");
    let longest = " ";
    for(const word of words){
        if(word.length>longest.length){
            longest = word;
        }
    }
    return longest;
}

const string = "I am learning programming to become a programmer";
const string2 = "I am learning web development to become a web developer";
const maxWord = longestWord(string);
const maxWord2 = longestWord(string2);
console.log("The longest word of the string is: ",maxWord);
console.log("The longest word of the string is: ",maxWord2);

// Write a function to find the max number.

const heights = [45, 21 , 78, 62, 99, 126,34, 99];

function getMax(numbers){
    let largeNum = numbers[0];
    for (const num of numbers){
        if(num > largeNum){
            largeNum = num;
        }
    }
    return largeNum;
}

const maxNum = getMax(heights);
console.log("The max number of the array is: ",maxNum);