import React from 'react'
import { useRegisterUser } from '../../hooks/useRegisterUser'
// make input for email, username, firstName, lastName, password
// use this in formdata and register user

export default function RegisterForm() {
    const { register, isLoading, data, error } = useRegisterUser()
    const handleSubmit = async (e) => {
        // static data 
        const formData = {
            email: "test12223@gmail.com",
            username: "test123123",
            firstName: "Mero name",
            lastName: "Last name",
            password: "password"
        }
        // use the hook function
        let response = await register(formData)
        if (response) {
            // extra logic eg. Navigation
        }
    }
    return (
        <div>
            RegisterForm
            <button onClick={handleSubmit}>Register</button>
            {/* Conditional rendering */}
            {error && <p>{error.message}</p>}
            {data && <p>{data.message}</p>}
        </div>
    )
}
