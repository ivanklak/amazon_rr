import React, {FC} from "react";
import ReactDOM from "react-dom";
import {Link, useHistory} from "react-router-dom";

import styles from "../Header/styles.module.css";

interface IModalProps {
    message: string;
    isOpen: boolean;
    accountRef: any;
}

const Modal: FC<IModalProps> = ({message, isOpen, accountRef}) => {
    if (!isOpen) {
        return null;
    }

    const history = useHistory();
    const onSignInClick = () => {
        history.push("/login");
    };

    console.log(history, "ref");

    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.modalBtn} onClick={onSignInClick}>{message}</div>
                <div className={styles.newCustomer}>
                    New customer?
                    <Link to="/login" className={styles.linkToLogin}> Start here.</Link>
                </div>
            </div>
        </div>
        , accountRef.current);
};

export default Modal;