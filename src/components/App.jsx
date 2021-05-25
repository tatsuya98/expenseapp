import React, { useState} from "react"
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