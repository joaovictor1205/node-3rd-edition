const name = 'Andrew';
const userAge = 27;

const user = {
    name,
    userAge,
    location:'Philadelphia'
};

console.log(user);


const product = {
    label: "Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
};

const { label: productLabel, stock, rating = 5 } = product;
console.log(productLabel);
console.log(stock);
console.log(rating);