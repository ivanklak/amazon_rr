import {ActionsUnion} from "../../../app/types";
import {createAction} from "../../../app/actions/helpers";
import {IProduct} from "../../Homepage/types";

export enum CheckoutActionTypes {
    SET_BASKET = 'CHECKOUT/SET_BASKET',
    ADD_TO_BASKET = 'CHECKOUT/ADD_TO_BASKET',
    REMOVE_FROM_BASKET = 'CHECKOUT/REMOVE_FROM_BASKET',
    SET_TOTAL = 'CHECKOUT/SET_TOTAL',
}

export const CheckoutActions = {
    setBasket: () => createAction(CheckoutActionTypes.SET_BASKET),
    addProductToBasket: (payload: IProduct) => createAction(CheckoutActionTypes.ADD_TO_BASKET, payload),
    removeFromBasket: (payload: number) => createAction(CheckoutActionTypes.REMOVE_FROM_BASKET, payload),
    setTotal: (payload: number) => createAction(CheckoutActionTypes.SET_TOTAL, payload),
};

export type CheckoutAction = ActionsUnion<typeof CheckoutActions>