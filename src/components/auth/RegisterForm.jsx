import React from 'react'
import { useRegisterUser } from '../../hooks/useRegisterUser'
// make input for email, username, firstName, lastName, password
// use this in formdata and register user
import { useRegisterUser as useRegisterUserTan } from '../../hooks/useRegisterUserTan'

export default function RegisterForm() {
    // const { register, isLoading, data, error } = useRegisterUser() 
    // tanstack hooks
    const { mutate, data, error, isPending, isSuccess, isError } = useRegisterUserTan()
    // mutate is the function replaced for register, rest are the states
    
    //// Convert all the input to formik 

    const handleSubmit = async (e) => {
        // use toast to notify user for invalid input
        // email should be in @email.com
        // password and confirmPassword should be same
        // if any input is empty notity that input is empty
        // eg: firstName is empty
        // add another toast after mutate
        // success : "You can now login"
        // error: "Please try again"

        // static data 
        const formData = {
            email: "test12223@gmail.com",
            username: "test123123",
            firstName: "Mero name",
            lastName: "Last name",
            password: "password"
        }
        // use the hook function
        // let response = await register(formData)
        // if (response) {
        //     // extra logic eg. Navigation
        // }
        // mutate (not async function)
        mutate(formData,
            {
                onSuccess: (response) => {
                    // success logic (eg: navigation logic)
                },
                onError: (error) => {
                    // error logic
                }
            }
        )
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
