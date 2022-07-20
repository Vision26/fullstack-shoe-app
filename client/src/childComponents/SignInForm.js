import React, { useState } from "react"
import '../App.css'
import SignUpInputs from "./SignUpInputs"

function SignInForm(props) {
    const { firstName, lastName, setEmail, setPassword, _id, edit, deleteSignUp } = props
    const [editToggle, setEditToggle] = useState(false)

    // console.log(_id)
    return (
        <div className="signform">
            {!editToggle ?
                <>
                        Name: {firstName} {lastName}
                        <br/>
                        Email: {setEmail}
                        <br/>
                        Password: {setPassword}
                        <br/>
                    <button className="delete-btn" onClick={() => deleteSignUp(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prev => !prev)}>Edit</button>

                </>
                :
                <>
                    <SignUpInputs
                        firstName={firstName}
                        lastName={lastName}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        btnText="Submit Edit"
                        id={_id}
                        submit={edit}
                    />
                    <button onClick={() => setEditToggle(prev => !prev)}>Close</button>
                </>
            }
        </div>
    )
}

export default SignInForm