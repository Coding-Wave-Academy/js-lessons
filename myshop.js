// My Tech Shop
const myShop = 'iTek Gadget Shop'

// Tech Gadgets
const gadget_1 = "iPhone 12";
const gadget_2 = "Samsung S25";
const gadget_3 = "One Plus";

// Gadget's Price
const gadget_1_price = 120000;
const gadget_2_price = 350000;
const gadget_3_price = 100000;

// Order Quantity
const gadget_1_quantity = 2;
const gadget_2_quantity = 1;
const gadget_3_quantity = 5;

// Subtotal

const subTotal = (gadget_1_price * gadget_1_quantity) + (gadget_2_price * gadget_2_quantity) + (gadget_3_price * gadget_3_quantity);

// Service fee
 const serviceFee = subTotal * 0.10;

//  Total
const total = subTotal + serviceFee

console.log(`====== ${myShop} ======`) 
console.log(`${gadget_1_quantity} x ${gadget_1}: ${gadget_1_price * gadget_1_quantity} FCFA`)
console.log(`${gadget_2_quantity} x ${gadget_2}: ${gadget_2_price * gadget_2_quantity} FCFA`)
console.log(`${gadget_3_quantity} x ${gadget_3}: ${gadget_3_price * gadget_3_quantity} FCFA`) 
console.log(`----------------------------------------------------------`)
console.log(`subTotal: ${subTotal}`)
console.log(`service fee(10%): ${serviceFee} FCFA`)
console.log(`Total: ${total}`)
console.log(`Thank you! Come again.`)

