import {IProduct} from "../../Homepage/types";
import {IThunkResult} from "../../../app/types";
import {CheckoutAction, CheckoutActions} from "../actions";

export const addToBasket = (item: IProduct): IThunkResult<void, CheckoutAction> =>
    dispatch => {
        dispatch(CheckoutActions.addProductToBasket(item));
    };

export const removeFromBasket = (id: number): IThunkResult<void, CheckoutAction> =>
    dispatch => {
        dispatch(CheckoutActions.removeFromBasket(id));
    };

export const setBasketTotal = (price: number): IThunkResult<void, CheckoutAction> =>
    dispatch => {
        dispatch(CheckoutActions.setTotal(price));
    };

export const setEmptyBasket = (): IThunkResult<void, CheckoutAction> =>
    dispatch => {
        dispatch(CheckoutActions.setEmptyBasket());
    };