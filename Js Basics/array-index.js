const array = [88, 77, 99, 421, 54, 63]
//     index  [ 0,  1,  2,   3,  4,  5 ]

//  get element value by index
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[5])

const fourth = array[3];
console.log(fourth)

// set or update the element value by index
let abc = 45

array[4] = abc
console.log(array)

array[2] = 100
console.log(array)

// add element at the end of the array
array.push(110)
console.log(array)

array.push(19, 41, 47)
console.log(array)

const friends =  ['Tarpon', 'Topu', 'Sayem', 'Amin', 'Haider', 'Sazib']
console.log(friends)
friends.push('Rakib', 'Benoy')
console.log(friends)

// remove last element from end of the array
friends.pop()
console.log(friends)

friends.pop(6)
console.log(friends)

// if I want to keep the data
const back1 = friends.pop()
const back2 = friends.pop()
console.log(back1, back2)

// add element at the beginning of the array
friends.unshift("Benoy",'Rakib')
console.log(friends)

// remove element at the beginning of the array
friends.shift()
console.log(friends)


