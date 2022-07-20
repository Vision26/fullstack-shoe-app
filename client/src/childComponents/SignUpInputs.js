import React, { useState, useContext } from "react"
// import { Context } from "../Context"

function SignUpInputs(props) {
    // const { addPost, signUpArr } = useContext(Context)
    const { firstName, lastName, setEmail, setPassword, id, submit, btnText } = props
    // const { submit } = props
    const [state, setState] = useState({
        firstName: firstName || '',
        lastName: lastName || '',
        setEmail: setEmail || '',
        setPassword: setPassword || ''
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
        // addPost(state, _id)
        submit(state, id)
    }

    return (
        <div className="sign-container">
            {/* <h1></h1> */}
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
                <button className="add-btn">{btnText}</button>
            </form>

        </div>
    )
}

export default SignUpInputs