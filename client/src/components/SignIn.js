import React, { useContext } from "react"
import { Context } from "../Context"
import SignUpInputs from "../childComponents/SignUpInputs"
import SignInForm from "../childComponents/SignInForm"
// import "../App.css"
import Footer from "../subComponents/Footer"

function SignIn() {
    const { signUpArr, editSignUp, delSignUp, addPost } = useContext(Context)

    return (
        <div className="signin-container">
            <SignUpInputs 
            submit={addPost}
            btnText="Submit"
            />
            
            {signUpArr.map(sign => <SignInForm
                key={sign.firstName}
                edit={editSignUp}
                deleteSignUp={delSignUp}
                {...sign}
            />)}
            <Footer />
        </div>

    )
}

export default SignIn