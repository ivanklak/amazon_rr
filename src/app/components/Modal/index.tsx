import React, {FC} from "react";
import ReactDOM from "react-dom";
import {Link, useHistory} from "react-router-dom";

import {auth} from "../../../firebase";

import styles from "../Header/styles.module.css";

interface IModalProps {
    message: string;
    isOpen: boolean;
    accountRef: any;
    openPortal: () => void;
    user: any;
}

const Modal: FC<IModalProps> = ({message, isOpen, accountRef, openPortal, user}) => {

    const history = useHistory();

    const onSignInClick = () => {
        history.push("/login");
        openPortal();
    };

    const onSignOutClick = () => {
        auth.signOut().then(() => {
            history.push('/');
        });
    };

    return isOpen ? ReactDOM.createPortal(
            <div className={styles.modal}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalBtn} onClick={user ? onSignOutClick : onSignInClick}>{message}</div>
                    <div className={styles.newCustomer}>
                        {user ?
                            <div>Try premium
                                <Link to="/" onClick={openPortal} className={styles.linkToLogin}> here.</Link>
                            </div>
                            :
                            <div>New customer?
                                <Link to="/login/register" onClick={openPortal} className={styles.linkToLogin}> Start
                                    here.</Link>
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.modalBottomContainer}>
                    <div className={styles.bottomLeft}>
                        <h4>Your Lists</h4>
                        <div className={styles.yourOptions}>
                            <p>Create a List</p>
                            <p>Find a List or Registry</p>
                            <p>AmazonSmile</p>
                        </div>
                    </div>
                    <div className={styles.bottomRight}>
                        <div>
                            <h4>Your Account</h4>
                            <div className={styles.yourOptions}>
                                <p>Account</p>
                                <p>Orders</p>
                                <p>Recommendations</p>
                                <p>Browser History</p>
                                <p>Watchlist</p>
                                <p>Video Purchases & Rentals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            , accountRef.current)
        : null;
};

export default Modal;