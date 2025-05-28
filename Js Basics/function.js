// function declare
function func(){
    console.log('get up and and stand actively');
    console.log('walk around the room');
    console.log('sit down and start codding');
}

// function call
func();

// function declare with parameter
function square(number /* here number ---> parameter */){
    console.log('value of the number parameter is', number);
    console.log('here the value of square is', number*number);
}
// function call with argument
square(11 /* here 11 ---> argument */);
square(13)
square(17)

// function declaration with return
function tenTimes(num){
    const result = num * 10;
    return result;
}
tenTimes(29);

const output = tenTimes(29);
console.log('output', output);

const bigNumber = tenTimes(99);
console.log('bigNumber', bigNumber);