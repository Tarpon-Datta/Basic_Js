function discount(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity<=200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const total = discount(63);
console.log(total);

const total2 = discount(177);
console.log(total2);

const total3 = discount(500);
console.log(total3);

// Multi-layer discount price calculation
// This function calculates the total price based on quantity with different discount layers
function layerDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }

    else if(quantity <=200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }

    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }    
}

const layerTotal = layerDiscount(63);
const layerTotal2 = layerDiscount(133);
const layerTotal3 = layerDiscount(917);
console.log(layerTotal);
console.log(layerTotal2);
console.log(layerTotal3);