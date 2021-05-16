import React, { useState } from "react"


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
            fetch("http://localhost:3001/register", {
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
                    if (data) {
                        routeChange("login")
                    }
                })
                .catch(err => alert("something went wrong"))
        }
    }

    return (
        <div>
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