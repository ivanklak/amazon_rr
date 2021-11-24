import React from "react";

import styles from "./styles.module.css";

const SignIn = () => (
    <div className={styles.signIn}>
        <div className={styles.title}>
            <p>Sign in for the best experience</p>
            <div className={styles.btnSignIn}>Sign in securely</div>
        </div>

        <div className={styles.advertisement}>
            <p>We ship over 45 million products around the world</p>
        </div>
    </div>
);

export default SignIn;