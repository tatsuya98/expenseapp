const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs')
const expense = require('./controllers/handleExpenditure')
const loadExpenses = require('./controllers/showExpenses')
const login = require('./controllers/handleSignin')
const register = require('./controllers/handleRegister')
const PORT = process.env.PORT || 3001
app.use(bodyParser.json());
app.use(cors());

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'epicduel',
        database: 'expensedb'
    }
})
app.post("/", (req, res) => { loadExpenses.showExpenses(req, res, db) })
app.post("/register", (req, res) => { register.handleRegister(req, res, bcrypt, db) });
app.post("/expenditure", (req, res) => { expense.handleExpenditure(req, res, db) })
app.post("/login", (req, res) => { login.handleSignin(req, res, db, bcrypt) })


app.listen(PORT, () => {
    console.log(`server is lisenting on port ${PORT}`)
});