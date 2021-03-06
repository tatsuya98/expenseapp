import React, { useState } from "react"
import "./register.css"

function Register({ routeChange }) {
    const [user, setUser] = useState({
        first_name: "",
        last_name:"",
        email: "",
        password: ""
    })

    function onChange(event) {
        const { name, value } = event.target;
        setUser(values => {
            if (name === "firstName") {
                return {
                    first_name: value,
                    last_name:values.last_name,
                    email: values.email,
                    password: values.password
                }
            }else if(name === "lastName"){
                return{
                    first_name: values.first_name,
                    last_name:value,
                    email: values.email,
                    password: values.password
                }
            }else if (name === "email") {
                return {
                    first_name: values.first_name,
                    last_name:values.last_name,
                    email: value,
                    password: values.password
                }
            } else if (name === "password") {
                return {
                    first_name: values.first_name,
                    last_name:values.last_name,
                    email: values.email,
                    password: value
                }
            }
        })
    }

    function onClick() {
        const { email, first_name, last_name, password } = user
        if (!email || !first_name || !last_name || !password) {
            alert("fill out the form please")
        } else {
            fetch("https://practiseapp001.herokuapp.com/register", {
                    method: "post",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        first_name: first_name,
                        last_name:last_name,
                        email: email,
                        password: password
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data === false) {
                        alert("email already exists")
                    }else{
                        routeChange("login")
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="container">
            <div className="register">
            <label >First Name
                <input type="text" name="firstName"  onChange={onChange} />
            </label>
            <label >Last Name
                <input type="text" name="lastName"  onChange={onChange} />
            </label>
            <label>email
                <input type="email" name="email" onChange={onChange} />
            </label>
            <label>password
                <input type="password" name="password" onChange={onChange} />
            </label>
            <nav>
            <button onClick={()=>{routeChange("login")}}>login</button>
            <button type="submit" onClick={()=>{
                onClick()
            }}>Register</button>
            </nav>
            </div>
            <nav>
            </nav>
        </div>
    )
}

export default Register