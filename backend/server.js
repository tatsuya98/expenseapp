const express = require('express');
const app = express();
const knex = require('knex')
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs')
const expense = require('./controllers/handleExpenditure')
const loadExpenses = require('./controllers/showExpenses')
const login = require('./controllers/handleSignin')
const register = require('./controllers/handleRegister')
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json());

const db = knex(process.env.NODE_ENV || 'development')
app.post("/", (req, res) => { loadExpenses.showExpenses(req, res, db) })
app.post("/register", (req, res) => { register.handleRegister(req, res, bcrypt, db) });
app.post("/expenditure", (req, res) => { expense.handleExpenditure(req, res, db) })
app.post("/login", (req, res) => { login.handleSignin(req, res, db, bcrypt) })


app.listen(PORT, () => {
    console.log(`server is lisenting on port ${PORT}`)
});