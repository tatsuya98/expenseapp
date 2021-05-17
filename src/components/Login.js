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
                    userid: userid
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
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
                .then(response => response.json())
                .then(data => {
                    if (data.userid) {
                        loadUser(data)
                        fetchExpenses(data.userid)
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