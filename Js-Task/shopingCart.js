const products = [
    {name:'Shampoo', price: 350, quantity:2},
    {name:'Shirt', price: 1200, quantity:4},
    {name:'Pant', price: 600, quantity:3},
    {name:'Headphone', price: 1000, quantity:2},    
]

function cartTotal(products){
    let total =0;
    for(const product of products){
        const totalCost = product.price * product.quantity;
        total = total + totalCost;
    }
    return total;
}

const total = cartTotal(products);
console.log('Total cost of products in the cart is:', total);
