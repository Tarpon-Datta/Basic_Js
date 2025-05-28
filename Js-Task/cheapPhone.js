const prices = [20000, 16000, 50000, 120000, 80000, 30000, 70000, 90000, 40000, 60000];

function getMin(numbers){
    let cheapest = numbers[0];
    for(const num of numbers){
        if(num <cheapest){
            cheapest  = num;
        }

    }
    return cheapest;
}

const minPrice = getMin(prices);
console.log("The cheapest phone is:", minPrice);

// find best mobile with the lowest price of an objects

const phones = [
    {name: "Samsung", price: 20000, camera: "12 mp", color: "black"},
    {name: "Nokia", price: 16000, camera: "8 mp", color: "blue"},
    {name: "Apple", price: 50000, camera: "12 mp", color: "white"},
    {name: "Oppo", price: 120000, camera: "12 mp", color: "red"},
    {name: "Vivo", price: 80000, camera: "12 mp", color: "green"},
    {name: "Xiaomi", price: 30000, camera: "12 mp", color: "yellow"},
    {name: "Realme", price: 70000, camera: "12 mp", color: "purple"},
    {name: "OnePlus", price: 90000, camera: "12 mp", color: "pink"},
    {name: "Huawei", price: 40000, camera: "12 mp", color: "grey"},
    {name: "Sony", price: 60000, camera: "12 mp", color: "orange"},
]

function getCheapestPhone(phones){
    let cheapestPhone = phones[0];
    for (const phone of phones){
        if(phone.price<cheapestPhone.price){
            cheapestPhone = phone;
        }
    }
    return cheapestPhone;
}

const cheapestPhone = getCheapestPhone(phones);
console.log("The best mobile with the lowest cost is: ",cheapestPhone.name);