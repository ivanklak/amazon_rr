import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Product from "../pages/Product";
import Register from "../pages/Register";

const MyRoutes = () => (
    <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/login" component={Login}/>
        <Route path="/product/:id?" component={Product}/>
        <Route path="/register" component={Register}/>
    </Switch>
);

export default MyRoutes;
