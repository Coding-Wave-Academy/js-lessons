
// Create a function to calculate the fee based on the amount provided.
function calculateFee(amount)
{
    if(amount <= 5000){ return 50}
    else if(amount <= 50000){ return 250}
    return 500
  
}


// Create an arrow function to check if the user can afford something based on the balance

const canAfford = (balance, amount) => {
    const total = amount + calculateFee(amount);

    const balaceEnough = balance >= total;


// Tenary Operator
     balaceEnough ? console.log(`You can afford this item, your balance is ${balance}`) : console.log(`You can't afford this item, your balance is ${balance}`)

    return balaceEnough 
}


// Print the values
console.log(canAfford(1000, 3000))