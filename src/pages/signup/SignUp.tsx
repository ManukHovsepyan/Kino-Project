import React, { useState} from 'react'
import styles from "./SignUp.module.scss"
import Button from "../../components/ui/shared/button/Button"
const SignUp = () => {
    const [signUpState, updateSignUpState] = useState<any>([])
    const changeInputVal = (val:any) => {
        console.log(val)
    }
    const submit = (event:any) => {
        event.preventDefault();
    }
    return (
        <div className={styles.signUpContainer}>
            <form className={styles.signUpForm} onSubmit={submit}>
                <h1>Sign Up</h1>
                <label>
                    <span>USERNAME:</span>
                    <input 
                        type="text"
                        onChange={ event => changeInputVal(event.target.value)}
                    />
                </label>
                <label>
                    <span>YOUR EMAIL:</span>
                    <input type="email"/>
                </label>
                <label>
                    <span>PASSWORD:</span>
                    <input type="password"/>
                </label>
                <label>
                    <span>RE-TYPE PASSWORD:</span>
                    <input type="password"/>
                </label>
                <Button text="Sign Up" onClick={submit}/>
            </form>
        </div>
    )
}

export default SignUp