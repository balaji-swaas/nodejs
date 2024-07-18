// Shopping Portal Cart Value Evaluation

/* Input */
const shoppingCart = [
    { name: "Apple", price: 10, quantity: 4 },
    { name: "Banana", price: 5, quantity: 5 },
    { name: "Orange", price: 15, quantity: 3 },
    { name: "xyz", price: 15, quantity: 1 }
];
/* Input */


/* Logic Implementation Function */
function calculateTotal(cart) {
    let total = 0;
    for(let i=0;i<shoppingCart.length;i++){
       total =total+ shoppingCart[i].price*shoppingCart[i].quantity;  
        }
        return total;

    }

/* Logic Implementation Function */


/* Function Call */
const totalCost = calculateTotal(shoppingCart);
/* Function Call */

/* Output */
console.log('Total cost: Rs.' + totalCost); 
/* Output */

/* Expected Output */
//Total cost: Rs.110
/* Expected Output */