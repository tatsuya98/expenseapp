const handleRegister = (req, res, bcrypt, db) => {
    const { email, first_name,last_name, password } = req.body;
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
                        first_name: first_name,
                        last_name:last_name
                    })
                    .returning(['user_id','first_name'])
                    .then(userName => {
                        res.json(userName[0]);
                    })
                    .catch(err => { res.status(400).json(err) })
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
}

module.exports = {
    handleRegister
}