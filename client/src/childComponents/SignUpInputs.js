import React, { useState, useContext } from "react"
import { Context } from "../Context"

function SignUpInputs() {
    const { addPost } = useContext(Context)
    const [state, setState] = useState({
        firstName: "",
        // lastName:"",
        // email:"",
        // submitPassword:""
    })

const handleChange = e => {
    const { name, value } = e.target
    setState(prev => ({
        ...prev,
        [ name ] : value
    }))
}

    const handleSubmit = e => {
        e.preventDefault()
        addPost(state)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                />
                <button className="add-btn">Submit</button>
            </form>

        </div>
    )
}

export default SignUpInputs