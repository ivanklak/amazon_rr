import React, {FC, useState} from "react";
import {Link, useHistory} from "react-router-dom";

import {auth} from "../../../firebase";
import Logo from "../../../app/images/1600px-Amazon_logo.svg.png";

import styles from "./styles.module.css";

const Login: FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const registerPath = () => history.location.pathname === "/login/register";

    const signIn = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (password.length === 0) {
            setError('Please enter your password');
        }

        //firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/user-not-found':
                        setError('Email not found :(');
                        break;
                    case 'auth/wrong-password':
                        setError('Invalid email or password');
                        break;
                    case 'auth/invalid-email':
                        setError('Wrong email format');
                        break;
                    case 'auth/too-many-requests':
                        setError('To many failed login attempts. You can immediately restore it ' +
                            'by resetting your password or you can try again later.');
                        break;
                }
            });
    };

    const register = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (password.length === 0) {
            setError('Please enter your password');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //success
                if (auth) {
                    history.push('/');
                }
            })
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        setError('Email already in use!');
                        break;
                    case 'auth/invalid-email':
                        setError('Wrong email format');
                        break;
                }
            });
    };

    return (
        <div className={styles.loginPage}>
            <Link to="/">
                <img className={styles.loginLogo} src={Logo} alt="logo"/>
            </Link>
            <div className={styles.loginContainer}>
                <div className={styles.loginForm}>
                    <h1>{registerPath() ? "Create account" : "Sign-in"}</h1>
                    <form>
                        <h5>Email</h5>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {registerPath() ?
                            <div className={styles.loginRegister}>
                                <button onClick={register}>Create your Amazon Account</button>
                            </div>
                            : <button type="submit" onClick={signIn}>Sign-in</button>
                        }
                    </form>
                    <p>By {registerPath() ? "creating an account" : "signing-in"}, you agree to Amazons Conditions of
                        Use and Privacy Notice.</p>
                    {error && <div className={styles.loginError}>{error}</div>}
                </div>
                {!registerPath() && <div className={styles.loginRegister}>
                    <p>New to Amazon?</p>
                    <button onClick={register}>Create your Amazon Account</button>
                </div>
                }
            </div>
        </div>
    );
};
export default Login;