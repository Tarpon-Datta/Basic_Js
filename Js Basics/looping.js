const numbers = [10, 20, 30, 40, 50]
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}


// for of loops
const friends = ['Sami', 'Samia', 'Sazib', 'Saima']
for(const name of friends){
    console.log(name)

}

// reverse array

// numbers.reverse()
// console.log(numbers)

const rev_numbers = []
for(const numb of numbers){
    // console.log(numb)
    rev_numbers.unshift(numb)
    // rev_numbers.push(numb)
    
}
console.log(rev_numbers)

// reverse in loop
const no = [11, 13, 17, 23, 29, 31, 37, 41,]
for(let i=no.length-1; i>=0; i--){
    console.log(no[i])
}

console.log("even numbers")
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const arr = [12, 98, 5, 41, 23, 78, 46]
for(let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
        console.log(arr[i])
    }
}

// Use a for...of loop to concatenate all the elements of an array into a single string.

let str = ['Tom', 'Tim', 'Tin', 'Tik']
let string= '';
for (const words of str){
    string+= words
}
console.log(string)

// let str = ['Tom', 'Tim', 'Tin', 'Tik']
// let string = str.join('')
// console.log(string) // output: TomTimTinTik

