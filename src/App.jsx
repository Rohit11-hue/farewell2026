import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Memory from "./pages/Memory"


function App() {
 

  return (
    <>
  
    <BrowserRouter>
   
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/memory" element={<Memory/>}/>
    </Routes>

      </BrowserRouter>
   </>
   
  )
}

export default App
