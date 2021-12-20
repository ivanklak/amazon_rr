import React, {FC, SyntheticEvent, useEffect, useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {setEmptyBasket} from "../Checkout/thunks";
import {db} from "../../firebase";

import {fixedPrice} from "../../app/helpers";

import selector from "./selectors";
import {paymentAPI} from "./services";

import styles from "./styles.module.css";

const Payment: FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const stripe = useStripe();
    const elements = useElements();

    const {basket, total, user} = useSelector(selector);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    console.log(error);

    useEffect(() => {
        //generate a stripe secret, allows us to charge  customer
        const totalFixed = Number((total * 100).toFixed(0));

        const getClientSecret = async () => {
            const response = await paymentAPI.getClientSecret(totalFixed);

            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();

    }, [basket]);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setProcessing(true);

        await stripe?.confirmCardPayment(clientSecret, {
            // eslint-disable-next-line babel/camelcase
            payment_method: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                card: elements?.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
                .collection("users")
                .doc(user.uid)
                .collection("orders")
                .doc(paymentIntent?.id)
                .set({
                    basket,
                    amount: paymentIntent?.amount,
                    created: paymentIntent?.created
                });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch(setEmptyBasket());

            history.replace('/orders');
        });
    };

    const handleChange = (e: any) => {
        setError(e.empty);
        setDisabled(e.error ? e.error.message : "");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.payForm}>
            <div className={styles.payFormContainer}>
                <div className={styles.payFormSubtotal}>
                    <span>Subtotal: ${fixedPrice(total)}</span>
                </div>
                <div className={styles.cardElement}>
                    <CardElement onChange={handleChange}/>
                    {disabled && <div>
                        <span>{disabled}</span>
                    </div>}
                </div>
                <div className={styles.buyButton}>
                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? "Processing..." : "Buy now"}</span>
                    </button>
                </div>
            </div>

        </form>
    );
};

export default Payment;