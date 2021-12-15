import React, {FC, SyntheticEvent, useEffect, useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import selector from "./selectors";
import {paymentAPI} from "./services";

const Payment: FC = () => {
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const {basket, total} = useSelector(selector);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    console.log(error);

    useEffect(() => {
        //generate a stripe secret, allows us to charge  customer

        const getClientSecret = async () => {
            const response = await paymentAPI.getClientSecret(total * 100);

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
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            console.log(paymentIntent, 'paymentIntent');

            history.replace('/orders');
        });
    };

    const handleChange = (e: any) => {
        setError(e.empty);
        setDisabled(e.error ? e.error.message : "");
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange}/>
            {disabled && <div>
                <span>{disabled}</span>
            </div>}
            <div>
                <div>
                    <span>Subtotal: ${total}</span>
                </div>
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? "Processing..." : "Buy now"}</span>
                </button>
            </div>
        </form>
    );
};

export default Payment;