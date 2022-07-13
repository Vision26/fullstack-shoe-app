import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Library from "./components/Library"
import SignIn from "./components/SignIn"
import Header from "./subComponents/Header"
import Footer from "./subComponents/Footer"

function App() {

  return (
    <div className="app-body">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
