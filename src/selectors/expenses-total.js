

export default (expenses) =>{
    if(expenses.length === 0){
        return 0;
    }
    let sum=0
    expenses.map((expense)=>{
        sum +=expense.amount
    })
    return sum
}
 
