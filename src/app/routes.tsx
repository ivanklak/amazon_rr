import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";

const MyRoutes = () => (
    <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/product/:id?" component={Product}/>
        <Route path="/checkout" component={Checkout}/>
    </Switch>
);

export default MyRoutes;
