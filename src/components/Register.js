import React, { useState } from "react"


function Register({ routeChange }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    function onChange(event) {
        const { name, value } = event.target;
        setUser(values => {
            if (name === "name") {
                return {
                    name: value,
                    email: values.email,
                    password: values.password
                }
            } else if (name === "email") {
                return {
                    name: values.name,
                    email: value,
                    password: values.password
                }
            } else if (name === "password") {
                return {
                    name: values.name,
                    email: values.email,
                    password: value
                }
            }
        })
    }

    function onClick() {
        const { email, name, password } = user
        if (!email || !name || !password) {
            alert("fill out the form please")
        } else {
            fetch("http://localhost:3001/register", {
                    method: "post",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        name: user.name,
                        email: user.email,
                        password: user.password
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        routeChange("login")
                    }
                })
                .catch(err => alert("something went wrong"))
        }
    }

    return (
        <div>
            <label >name
                <input type="text" name="name"  onChange={onChange} />
            </label>
            <label>email
                <input type="email" name="email" onChange={onChange} />
            </label>
            <label>password
                <input type="password" name="password" onChange={onChange} />
            </label>
            <button type="submit" onClick={()=>{
                onClick()
            }}>Register</button>
            <nav>
                <p style={{display: "flex", justifyContent:"flex-end"}} onClick={()=>{routeChange("login")}}>Login</p>
            </nav>
        </div>
    )
}

export default Register