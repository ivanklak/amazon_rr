import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {CartDash} from "@styled-icons/bootstrap/CartDash";
import {Cup} from '@styled-icons/entypo/Cup';

import {IProduct} from "../Homepage/types";
import {fixedPrice} from "../../app/helpers";
import Rating from "../../app/components/Rating";

import selector from "./selectors";
import {removeFromBasket} from "./thunks";

import styles from './styles.module.css';

const Checkout: FC = () => {
    const dispatch = useDispatch();
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

    const uniqueBasket: Array<IProduct> = sameIds(basket);
    const onSignInClick = () => {
        history.push('/login');
    };
    const onSignUpClick = () => {
        history.push('/login/register');
    };

    const subtotalPrice = () => {
        let total = 0;

        for (let i = 0; i < basket.length; i++) {
            const currentItem = basket[i];

            total += Number(currentItem.price);
        }

        return total.toFixed(2);
    };

    const onRemoveClick = (id: number) => {
        dispatch(removeFromBasket(id));
    };

    return basket.length !== 0 ? (
        <div className={styles.fullBasket}>
            <div className={styles.fullBasketList}>
                <div className={styles.fullBasketTittle}>
                    <div>
                        <h1>Shopping Cart</h1>
                        <div className={styles.tittleSpan}>
                            <span>Price</span>
                        </div>
                    </div>
                </div>
                <div className={styles.itemsList}>
                    {uniqueBasket.map(item => (
                        <div key={item.id} className={styles.item}>
                            <div>
                                <div className={styles.itemImgField}>
                                    <img src={item.image} alt={item.image}/>
                                </div>
                                <div className={styles.itemDescription}>
                                    <h4>{item.title} - {item.count}</h4>
                                    <div className={styles.itemRating}>
                                        <Rating rate={item.rating.rate} size={15}/>
                                        <div>({item.rating.count} ratings)</div>
                                    </div>
                                    <div>
                                        <button onClick={() => onRemoveClick(item.id)}>x</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.itemPrice}>
                                <span>${fixedPrice(item.price)}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.fullBasketSubtotal}>
                    <span>Subtotal ({basket.length} {basket.length > 1 ? "items" : "item"}):</span>
                    <span>${subtotalPrice()}</span>
                </div>

            </div>
            <div className={styles.rightSideBlock}>
                <div className={styles.subtotal}>
                    <div>
                        <span>Subtotal ({basket.length} {basket.length > 1 ? "items" : "item"}):</span>
                        <span>${subtotalPrice()}</span>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className={styles.sponsoredProducts}>
                    <span>Sponsored Products related to items in your cart</span>
                </div>
            </div>
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