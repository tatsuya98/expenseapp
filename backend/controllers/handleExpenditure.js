const handleExpenditure = (req, res, db) => {
    const { amount, expenseName, date, userid } = req.body
    db.insert({
            amount: amount,
            expense_type: expenseName,
            spend_date: date,
            user_id: userid
        })
        .into('expenses')
        .returning(['amount','expense_type','spend_date'])
        .then(expense => {
            return res.json(expense[0])
        })
        .catch(err => { res.json(err) })
}



module.exports = { handleExpenditure }