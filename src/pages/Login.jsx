import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()

    const returnToHome = (event) => {
        event.preventDefault()
        navigate("/")
    }
    
    return (
        <div>
            <div>Login</div>
            <NavLink to="/">Go back</NavLink>
            <Link to="/register">Register</Link>
            <button onClick={returnToHome}>Button Click</button>
            <button onClick={
                (event) => {
                    returnToHome(event)
                }
            }>Button Click Callback</button>
        </div>
    )
}
