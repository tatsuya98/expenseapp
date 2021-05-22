const handleSignin = (req, res, db, bcrypt) => {
    const { email, password } = req.body
    db.select("hash", "email").from("login").where("email", "=", email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash)
            if (isValid) {
                db.select("first_name", "user_id").from("users").where("email", "=", email)
                    .then(user => {
                        return res.json(user[0])
                    })
                    .catch(err => { res.status(400).json(err) })
            } else {
                res.json("wrong credentials")
            }
        })
        .catch(err => { res.status(400).json(err) })
}

module.exports = { handleSignin }