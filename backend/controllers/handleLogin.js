const handleLogin = (req,res,db,bcrypt)=>{
    const {email,password}=req.body
    db.select('email','hash').from('login').where('email','=',email)
    .then(data=>{
    const isValid=bcrypt.compareSync(password,data[0].hash)
    if(isValid){
    db.select('first_name','user_id').from('users').where('email','=',email)
    .then(user=>{
        res.json(user[0])
    })
    }
    })
    .catch(err=>console.log(err))
}

module.exports={
    handleLogin
}