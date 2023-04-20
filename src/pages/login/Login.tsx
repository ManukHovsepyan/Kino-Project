import * as React from "react"
import styles from "./Login.module.scss"
import Button from "../../components/ui/shared/button/Button"
const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <form>
                <h1 className={styles.loginTitle}>Login</h1>
                <label>
                    <span>USERNAME:</span>
                    <input type="email" placeholder="Enter your username"/>
                </label>
                <label>
                    <span>PASSWORD:</span>
                    <input type="password" placeholder="Enter your password"/>
                </label>
                <div className={styles.rememberMeAndForgetPassword}>
                    <div>
                        {/* <label> */}
                            <input type="checkbox"/>
                            <span>Remember Me</span>
                        {/* </label> */}
                    </div>
                    <div>
                        <p>Forget Password?</p>
                    </div>
                </div>
                <button>Login</button>
            </form>
            <div className={styles.socialButtonsContainer}>
                <Button 
                    text="Facebook"
                    backgroundColor="#4267B2"
                />
                <Button 
                    text="Instagram"
                    backgroundImage="linear-gradient(90deg, #f9ce34 0%, #ee2a7b 35%, #6228d7 100%)"/>
            </div>
        </div>
    )
}

export default Login