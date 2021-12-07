import React, {FC} from "react";
import {useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {CartDash} from "@styled-icons/bootstrap/CartDash";
import {Cup} from '@styled-icons/entypo/Cup';

import {IProduct} from "../Homepage/types";

import selector from "./selectors";

import styles from './styles.module.css';

const Checkout: FC = () => {
    const history = useHistory();
    const {basket, user} = useSelector(selector);

    const sameIds = (arr: Array<IProduct>) => {

        for (let i = 0; i < arr.length; i++) {
            const currentItem = arr[i];

            let count = 0;
            for (let j = 0; j < arr.length; j++) {
                if (currentItem.id === arr[j].id) {
                    count++;
                }
            }
            currentItem.count = count;
        }
        const resArr: Array<any> = [];

        arr.filter(item => {
            const i = resArr.findIndex(x => (x.id == item.id));

            if (i <= -1) {
                resArr.push(item);
            }

            return null;
        });

        return resArr;
    };

    const uniqueBasket = sameIds(basket);
    const onSignInClick = () => {
        history.push('/login');
    };
    const onSignUpClick = () => {
        history.push('/login/register');
    };

    return basket.length !== 0 ? (
        <div>
            {uniqueBasket.map(item => (
                <div key={item.id}>
                    <div>
                        <h4>{item.title} - {item.count}</h4>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div className={styles.emptyBasket}>
            <div className={styles.leftBlock}>
                <div className={styles.leftTextField}>
                    <div className={styles.textBlock}>
                        <div className={styles.leftImg}>
                            <CartDash size={116} color="#B0D4D9FF"/>
                            <Cup size={84} color="#C5DDD7FF"/>
                        </div>
                        <div>
                            <h2>Your Amazon Cart is empty</h2>
                            <Link className={styles.linkToHome} to='/'>Shop today`s deals</Link>
                            {!user &&
                            <div className={styles.leftBlockButtons}>
                                <button className={styles.btnSignIn} onClick={onSignInClick}>Sign in to your account
                                </button>
                                <button className={styles.btnSignUp} onClick={onSignUpClick}>Sign up now</button>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.emptyWhiteBlock}/>
                <p>The price and availability of items at Amazon.com are subject to change. The Cart is a
                    temporary
                    place to store a list of your items and reflects each items most recent price. Shopping
                    CartLearn
                    more

                    Do you have a gift card or promotional code? We ll ask you to enter your claim code when it is
                    time
                    to pay.
                </p>
            </div>
            <div className={styles.rightBlock}>
                <h5>Your recently viewed items</h5>
            </div>
        </div>
    );
};

export default Checkout;