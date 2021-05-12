const handleRegister = (req, res, bcrypt, db) => {
    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password)
    db.transaction(trx => {
        trx.insert({
                email: email,
                hash: hash
            })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                    .insert({
                        email: loginEmail[0],
                        name: name
                    })
                    .returning('*')
                    .then(userName => {
                        res.json(userName[0]);
                    })
                    .catch(err => { res.status(400).json("something went wrong when trying to sign with this email") })
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
}

module.exports = {
    handleRegister
}