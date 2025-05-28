const colors = ['red', 'yellow', 'green', 'blue', 'orange']
// reverse = colors.reverse() // must use '()' in reverse 
// console.log(reverse)

// const rev_colors = []
for (let i =colors.length-1; i>=0; i--){
    console.log(colors[i])
}

const rev_colors = []
for(let k=colors.length-1; k>=0; k--){
    rev_colors.push(colors[k])
}
console.log(rev_colors) 

// Reverse the words of a sentence. Only the position of the word will be reversed.

const statement = "I am a hard working person"
    console.log(statement.split(' ').reverse().join(' '))
