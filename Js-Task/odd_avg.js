function oddAvg(numbers){
    const odd = [];
    for(const number of numbers){
        if(number % 2 === 1){
            //console.log(number);
            odd.push(number);
        }
    }

    let sum = 0;
    for(const number of odd){
        sum += number;
    }
    console.log("The odd numbers are:", odd);
    console.log(sum);
    const count = odd.length;
    const avg =sum/count;   
    return avg;
}

const numbers = [42, 23, 24, 15, 66, 71, 13, 14, 35];
const oddNumbers = oddAvg(numbers);
console.log(oddNumbers);