import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Footer from "./components/Footer/Footer";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import React, { useState, useEffect } from "react";
import Cart from "./Pages/Cart/Cart";
import Pizza from "./Pages/Pizza/Pizza";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import NotFound from "./Views/NotFound/NotFound";
import { CartProvider } from "./Context/cartContext";
import { PizzaProvider } from "./Context/pizzaContext";
import { UserProvider } from "./Context/userContext";
import ProtectedRoute from "./Context/ProtectedRoute";
import PublicRoute from "./Context/PublicRoute";



function App() {

  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")


  return (
    <>
    <UserProvider>
      <CartProvider>
        <PizzaProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza/>}/>
            <Route path="/Register" element={
              <Register
                email={email} 
                setEmail={setEmail} 
                password1={password1} 
                setPassword1={setPassword1}
                password2={password2} 
                setPassword2={setPassword2}   
              />} />
            <Route path="/Login" 
              element={
                <PublicRoute>
                  <Login
                    email={email} 
                    setEmail={setEmail} 
                    password1={password1} 
                    setPassword1={setPassword1} 
                  />
                </PublicRoute>} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/Profile" 
              element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>}/>
            <Route path="/Total" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PizzaProvider>
      </CartProvider>
    </UserProvider>  
    </>

  )
}

export default App
