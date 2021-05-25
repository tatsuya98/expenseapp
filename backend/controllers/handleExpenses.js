const handleExpenses = (req,res,db)=>{
    const {user_id} = req.params
    db.select('amount','expense_type','spend_date','id').from('expense').where('user_id','=',user_id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>console.log(err))
}

module.exports ={
    handleExpenses
}