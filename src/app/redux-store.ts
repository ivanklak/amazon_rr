import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import productsReducer from "../pages/Homepage/reducers";
import authReducer from "../Auth/reducers";
import checkoutReducer from "../pages/Checkout/reducers";
import singleProductReducer from "../pages/Product/reducers";

export const reducers = combineReducers({
    productsHomepage: productsReducer,
    singleProduct: singleProductReducer,
    checkout: checkoutReducer,
    auth: authReducer,
});

type ReducerType = typeof reducers;
export type AppStateType = ReturnType<ReducerType>;

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;

export default store;
