import React, { useState} from "react"
import Expense from "./expense/Expense"
import Input from "./input/Input"
import Login from "./login/Login"
import Register from "./register/Register"
import "./app.css"


function App() {
    const [expenses, setExpenses] = useState([])
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        user_id: ""
    })
    const [route, setRoute] = useState("login")
   
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
                <div className="container">
                    <h1>Hello, {user.name}</h1>
                <Input
                setExpenses={setExpenses}
                 setUser={setUser}
                routeChange={routeChange}
                userid={user.user_id}
         />
         <Expense
         user={user}
         key ={expenses.map(expense=>{return expense.id})}
         expenses={expenses}
         routeChange={routeChange}
         setUser={setUser}
         setExpenses={setExpenses}
          />
            </div>
            )
        } else if (route === "login") {
            return (
                <div className="container">
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
                <div className="container_app">
                    <h1> Register </h1>
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