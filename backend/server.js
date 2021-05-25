const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt-nodejs')
const path = require('path')
const knex = require('knex')
const register = require('./controllers/handleRegister')
const login = require('./controllers/handleLogin')
const expenses = require('./controllers/handleExpenses')
const expense = require('./controllers/handleExpense')
const app = express()
const PORT = process.env.PORT || 3000
const db = knex({
    client:'pg',
    connection:{
        connectionString: process.env.DATABASE_URL,
        ssl: {
                rejectUnauthorized: false
         }
    }
})
app.use(cors())
app.use(express.json())
const root = require('path').join(__dirname, '..', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})
app.post('/login',(req,res)=>{login.handleLogin(req,res,db,bcrypt)})
app.get('/:user_id',(req,res)=>{expenses.handleExpenses(req,res,db)})
app.post('/expense',(req,res)=>{expense.handleExpense(req,res,db)})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
