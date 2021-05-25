const handleRegister = (req,res,db,bcrypt)=>{
    const {email,first_name,last_name,password}=req.body
    const hash = bcrypt.hashSync(password)
    db.transaction(trx=>{
        trx.insert({
            email:email,
            hash:hash
        })
        .into('login')
        .returning('email')
        .then(loginEmail=>{
            return trx('users')
            .insert({
                email:loginEmail[0],
                first_name:first_name,
                last_name:last_name
            })
            .returning(['first_name','user_id'])
            .then(user=>{
                res.json(user[0])
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err=>console.log(err))
}

module.exports={
    handleRegister
}