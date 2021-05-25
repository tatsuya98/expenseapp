const handleExpense =(req,res,db)=>{
    const {amount,expense_type,spend_date,user_id}=req.body
    db.insert({
        amount:amount,
        expense_type:expense_type,
        spend_date:spend_date,
        user_id:user_id
    })
    .into('expense')
    .returning(['amount','expense_type','spend_date'])
    .then(expense=>{
        res.json(expense[0])
    })
    .catch(err=>console.log(err))
}

module.exports={
    handleExpense
}