import React, { useState } from "react"


function Login({ routeChange, loadUser, setExpenses }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    function fetchExpenses(userid) {
        fetch("https://practiseapp001.herokuapp.com/", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    user_id: userid
                })
            })
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
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password
                    })
                })
                .catch(err=>console.log(err))
                .then(response => response.json())
                .catch(err=>console.log(err))
                .then(data => {
                    if (data.user_id) {
                        loadUser(data)
                        fetchExpenses(data.user_id)
                        routeChange("home")
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
        <div style={{display:"flex"}}>
            <label>email
                <input type="email" name="email" onChange={onChange} />
            </label>
            <label>password
                <input type="password" name="password" onChange={onChange} />
            </label>
            <button type="submit" onClick={()=>{
                onClick()
            }}>Login</button>
            </div>
            <nav>
                <p style={{display: "flex", justifyContent:"flex-end"}} onClick={()=>{routeChange("register")}}>Register</p>
            </nav>
        </div>
    )
}

export default Login