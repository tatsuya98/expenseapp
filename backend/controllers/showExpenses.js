const showExpenses = (req, res, db) => {
    const { userid } = req.body
    db.select("*").from("expenses").where("user_id", "=", userid)
        .then(expenses =>
            res.json(expenses)
        )
        .catch(err => { console.log(err) })
}

module.exports = {
    showExpenses
}