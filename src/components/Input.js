import React, { useState } from "react"


function Input({ userid, setUser, setExpenses, routeChange }) {
    const [expense, setExpense] = useState({
        spend_date: "",
        expense_type: "",
        amount: ""
    })

    function onSignOutClick() {
        setExpenses([])
        setUser({
            name: "",
            email: "",
            password: "",
            user_id: ""
        })
        routeChange("login")
    }

    function onAdd() {
        fetch("https://practiseapp001.herokuapp.com/expense", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: expense.amount,
                    expense_type: expense.expense_type,
                    spend_date: expense.spend_date,
                    user_id: userid
                })
            })
            .then(response => response.json())
            .then(data => {
                setExpenses(values=>{
                   return [...values,data]
                })
            })
    }

    function handleEvent(event) {
        const { value, name } = event.target
        setExpense((preValues) => {
            if (name === "spend_date") {
                return {
                    spend_date: value,
                    expense_type: preValues.expense_type,
                    amount: preValues.amount
                }
            } else if (name === "expense_type") {
                return {
                    spend_date: preValues.spend_date,
                    expense_type: value,
                    amount: preValues.amount
                }
            } else if (name === "amount") {
                return {
                    spend_date: preValues.spend_date,
                    expense_type: preValues.expense_type,
                    amount: value
                }
            }
        })
    }

    return (
        <div>
        <input onChange={handleEvent}type="text" name="amount"placeholder = "amount"/>
            <input onChange={handleEvent}type="text" name="expense_type"placeholder = "expense type"/>
            <input onChange={handleEvent}type="date" name="spend_date" placeholder = "spend date"/>
            <button onClick={()=>{
                onAdd()
                }}>+</button>
            <button type="submit" onClick={()=>{
                onSignOutClick()
            }}>Sign Out</button>
            </div>
    )
}

export default Input