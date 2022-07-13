import React, {useState} from "react"

function SignUpInputs() {
const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
})

const handleSubmit = e => {
    
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={state.firstName}
                // onChange={handleChange}
                /> <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={state.lastName}
                // onChange={handleChange}
                /> <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                // onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={state.password}
                // onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default SignUpInputs