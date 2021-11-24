import React from "react";
import {useHistory} from 'react-router-dom';

import styles from "./styles.module.css";

const SignIn = () => {
    const history = useHistory();
    const onLoginClick = () => {
        history.push('/login');
    };

    return (
        <div className={styles.signIn}>
            <div className={styles.title}>
                <p>Sign in for the best experience</p>
                <div onClick={onLoginClick} className={styles.btnSignIn}>Sign in securely</div>
            </div>

            <div className={styles.advertisement}>
                <p>We ship over 45 million products around the world</p>
            </div>
        </div>
    );
};
export default SignIn;