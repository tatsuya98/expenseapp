const handleExpenditure = (req, res, db) => {
    const { amount, expenseName, date, userid } = req.body
    db.insert({
            amount: amount,
            expensetype: expenseName,
            spenddate: date,
            userid: userid
        })
        .into('expenditure')
        .returning('amount', 'expensetype', 'spenddate')
        .then(expense => {
            res.json(expense[0])
        })
        .catch(err => { res.json(err) })
}



module.exports = { handleExpenditure }