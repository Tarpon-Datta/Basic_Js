const Neshakhor = ['Amin', 'Sayem', 'Sayem', 'Sabik', 'Sabik', 'Arifin'];
const numbers = [1, 2, 3, 1, 2, 6, 7, 7, 9, 10, 10, 12, 13, 14, 15];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(Neshakhor);
const numArray = noDuplicate(numbers);
console.log(uniqueArray);
console.log(numArray);