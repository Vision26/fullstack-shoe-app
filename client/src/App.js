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
      <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/signup" element={<SignIn />} />
      </Routes>
      </div>
   {/* <Footer /> */}
    </div>
  )
}

export default App
