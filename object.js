const transactionHistory = [
    {
        sender: "Kandi", 
        amount: 15000, 
        reciever: "Ribert", 
        status: "sent"
},
    {
        sender: "Kandi",
        amount: 1000, 
        reciever: "Adekunle", 
        status: "cancelled"},
    {
        sender: "Kandi", 
        amount: 15000, 
        reciever: "Owoyele", 
        status: "sent"}
]

 console.log("##### Transaction History #####")

for( let transaction of transactionHistory){
   

    console.log('-------------------------------')
    console.log(`sender: ${transaction.sender} Reciever: ${transaction.reciever} Amount: ${transaction.amount} Status: ${transaction.status}`)
    console.log('-------------------------------')
}