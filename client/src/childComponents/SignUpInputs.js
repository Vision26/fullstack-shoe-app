import React, { useState, useContext } from "react"
import { Context } from "../Context"

function SignUpInputs() {
    const { addPost } = useContext(Context)
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        setEmail:"",
        setPassword:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addPost(state)

    }

    return (
        <div className="sign-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="Email"
                name="setEmail"
                value={state.setEmail}
                onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="Password"
                name="setPassword"
                value={state.setPassword}
                onChange={handleChange}
                />
                <button className="add-btn">Submit</button>
            </form>

        </div>
    )
}

export default SignUpInputs