import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

import Homepage from '../pages/Homepage';
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";

const promise = loadStripe('pk_test_51K6WIuCZ76mzgSrE3inS3Wfe1gGaHhhlm4snxJs0ULDSkzGgctoZGlKa2qr3EspTBy0CBf8G13TPeI6vtCUMkLHU00wzhDdpSr');

const MyRoutes = () => (
    <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/product/:id?" component={Product}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/payment">
            <Elements stripe={promise}>
                <Payment/>
            </Elements>
        </Route>
    </Switch>
);

export default MyRoutes;
