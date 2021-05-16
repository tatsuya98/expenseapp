import React, { useState, useEffect } from "react"
import Expense from "./Expense"
import Input from "./Input"
import Login from "./Login"
import Register from "./Register"

function App() {
    const [expenses, setExpenses] = useState([])
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        userid: ""
    })
    const [route, setRoute] = useState("login")
    const [expense, setExpense] = useState({
        amount: "",
        expenseName: "",
        date: ""
    })
    useEffect(() => {
        function updateExpenses() {
            fetch("http://localhost:3001/", {
                    method: "post",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        userid: user.userid
                    })
                })
                .then(response => response.json())
                .then(data => {
                    setExpenses(prevalues => {
                        return [...prevalues, data]
                    })
                })
                .catch(err => { console.log(err) })
        }
        updateExpenses()
    }, [expense.amount, user.userid])




    function loadExpense(expense) {
        setExpense({
            amount: expense.amount,
            expenseName: expense.expense_type,
            date: expense.spend_date
        })
    }


    function loadUser(user) {
        setUser({
            name: user.first_name,
            email: user.email,
            password: user.password,
            userid: user.userid
        })
    }

    function routeChange(route) {
        setRoute(route)
    }

    function handleRoute() {
        if (route === "home") {
            return (
                <div>
                <Input
                loadExpense={loadExpense}
                setExpenses={setExpenses}
                 setUser={setUser}
                routeChange={routeChange}
                userid={user.userid}
         />
         <Expense
         user={user}
         key ={expenses.map(expense=>{return expense.userid})}
         expenses={expenses}
         routeChange={routeChange}
         setUser={setUser}
         setExpenses={setExpenses}
          />
            </div>
            )
        } else if (route === "login") {
            return (
                <div>
                <Login
                user={user}
                loadUser={loadUser}
                setExpenses={setExpenses}
                 routeChange={routeChange}
                userid={user.userid}
                 />
                </div>
            )
        } else if (route === "register") {
            return (
                <div>
                    <Register
                    routeChange={routeChange}
                     />
                </div>
            )
        }
    }

    return (
        handleRoute()
    );
}

export default App;