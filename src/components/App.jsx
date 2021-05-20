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
        user_id: ""
    })
    const [route, setRoute] = useState("login")
    const [expense, setExpense] = useState({
        amount: "",
        expenseName: "",
        date: ""
    })
    useEffect(() => {
        function updateExpenses() {
            fetch("https://localhost:5000/", {
                    method: "post",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        user_id: user.user_id
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
        if(expense.amount !== ""){
            updateExpenses()
        }
    }, [expense.amount, user.user_id])




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
            user_id: user.user_id
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
                userid={user.user_id}
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
                userid={user.user_id}
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