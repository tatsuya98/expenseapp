const showExpenses = (req, res, db) => {
    const { userid } = req.body
    db.select("*").from("expenditure").where("userid", "=", userid)
        .then(expenses =>
            res.json(expenses)
        )
        .catch(err => { console.log(err) })
}

module.exports = {
    showExpenses
}