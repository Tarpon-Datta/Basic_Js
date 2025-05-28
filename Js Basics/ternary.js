/***
 * TERNARY --> Three parts
 *    ?   :
 * 
 * Condition ? Do something when ture : do something if flase
 */

/*This is normal condition */
// const age =20;
// if(age>=18){
//     console.log('you can vote');
// }
// else{
//     console.log('You may sleep');
// }

/*This is ternary condition 
Simple ternary condition
*/
const age = 18;
age >= 18 ? console.log('You can vote') : console.log('You may sleep or play ')

let price =500;
const leader=false;
ticketPrice = leader === true ? 0 : price+100;
console.log('price:',ticketPrice);

let tprice = 2000;
const isLeader =true;
if(isLeader===false){
    if(tprice>=1000)
    tprice =tprice/2;
    else{
        tprice = 0;
    }
}
console.log('tprice',tprice);

//semi-advance ternary
tprice = isLeader===true?tprice>1000?tprice/2:0:tprice; 

console.log('tprice',tprice);

//Logical NOT Operator
const isPass = true;
//if(isPass===false) equal to if(!isPass)
//if(isPass===true) equal to if(isPass)
if(!isPass){
    console.log("You can enter");
}
else{
    console.log("You may leave");
}