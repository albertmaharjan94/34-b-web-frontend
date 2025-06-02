import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
// task
// in login page
// make 2 link 
// go back -> routes to homepage
// register -> routes to register
// make footer and add it in layout
// Footer - 2025 @ MyApp