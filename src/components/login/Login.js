import React, { useState } from "react"
import "./login.css"


function Login({ routeChange, loadUser, setExpenses }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    function fetchExpenses(userid) {
        fetch(`https://practiseapp001.herokuapp.com/${userid}`)
            .then(response => response.json())
            .then(data => {
                setExpenses([...data])
            })
            .catch(err => console.log(err))
    }

    function onChange(event) {
        const { name, value } = event.target;
        setUser(values => {
            if (name === "email") {
                return {
                    email: value,
                    password: values.password
                }
            } else if (name === "password") {
                return {
                    email: values.email,
                    password: value
                }
            }
        })
    }

    function onClick() {
        const { email, password } = user
        if (!email || !password) {
            alert("please enter your email and password")
        } else {
            fetch("https://practiseapp001.herokuapp.com/login", {
                    method: "post",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.user_id) {
                        loadUser(data)
                        fetchExpenses(data.user_id)
                        routeChange("home")
                    }else{
                        alert("email or password is incorrect")
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <h1>Login</h1>
        <div className="login" >
            <label>email
                <input type="email" name="email" onChange={onChange} />
            </label>
            <label>password
                <input type="password" name="password" onChange={onChange} />
            </label>
            <nav>
               <button onClick={()=>{routeChange("register")}}>Register</button>
               <button type="submit" onClick={()=>{
                onClick()
            }}>Login</button>
            </nav>
            </div>
        </div>
    )
}

export default Login