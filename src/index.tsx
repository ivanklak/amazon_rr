import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import App from './app';
import reportWebVitals from './reportWebVitals';
import store from "./app/redux-store";

import './index.css';
import Login from "./pages/Login";
import Register from "./pages/Register";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route component={App}/>
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
