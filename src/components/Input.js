import React, { useState } from "react"


function Input({ loadExpense, userid, setUser, setExpenses, routeChange }) {
    const [expense, setExpense] = useState({
        date: "",
        expenseName: "",
        amount: ""
    })

    function onClick() {
        setExpenses([])
        setUser({
            name: "",
            email: "",
            password: "",
            userid: ""
        })
        routeChange("login")
    }

    function onAdd() {
        fetch("http://localhost:3001/expenditure", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: expense.amount,
                    expenseName: expense.expenseName,
                    date: expense.date,
                    userid: userid
                })
            })
            .then(response => response.json())
            .then(data => {
                loadExpense(data)
            })
    }

    function handleEvent(event) {
        const { value, name } = event.target
        setExpense((preValues) => {
            if (name === "date") {
                return {
                    date: value,
                    expenseName: preValues.expenseName,
                    amount: preValues.amount
                }
            } else if (name === "expenseName") {
                return {
                    date: preValues.date,
                    expenseName: value,
                    amount: preValues.amount
                }
            } else if (name === "amount") {
                return {
                    date: preValues.date,
                    expenseName: preValues.expenseName,
                    amount: value
                }
            }
        })
    }

    return (
        <div>
        <input onChange={handleEvent}type="text" name="amount"placeholder = "amount"/>
            <input onChange={handleEvent}type="text" name="expenseName"placeholder = "expenseName"/>
            <input onChange={handleEvent}type="date" name="date" placeholder = "date of expense"/>
            <button onClick={()=>{
                onAdd()
                }}>+</button>
            <button type="submit" onClick={()=>{
                onClick()
            }}>Sign Out</button>
            </div>
    )
}

export default Input