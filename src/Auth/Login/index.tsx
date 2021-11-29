import React, {FC, useState} from "react";
import {Link} from "react-router-dom";

import Logo from "../../app/images/1600px-Amazon_logo.svg.png";

import styles from "./styles.module.css";

const Login: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e: React.SyntheticEvent) => {
        e.preventDefault();

        //firebase login
    };
    const register = (e: React.SyntheticEvent) => {
        e.preventDefault();

        //firebase register
    };

    return (
        <div className={styles.loginPage}>
            <Link to="/">
                <img className={styles.loginLogo} src={Logo} alt="logo"/>
            </Link>
            <div className={styles.loginContainer}>
                <div className={styles.loginForm}>
                    <h1>Sign-in</h1>
                    <form>
                        <h5>Email</h5>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <button type="submit" onClick={signIn}>Sign-in</button>
                    </form>
                    <p>By signing-in, you agree to Amazons Conditions of Use and Privacy Notice.</p>
                </div>
                <div className={styles.loginRegister}>
                    <p>New to Amazon?</p>
                    <button onClick={register}>Create your Amazon Account</button>
                </div>
            </div>
        </div>
    );
};
export default Login;