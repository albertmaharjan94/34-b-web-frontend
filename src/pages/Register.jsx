import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'

export default function Register() {

    // If user is logged in, show "You are already logged in"
  return (
    <div>
      Register
      <RegisterForm />
    </div>
  )
}
