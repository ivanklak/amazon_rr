import {ActionsUnion} from "../../../app/types";
import {createAction} from "../../../app/actions/helpers";
import {IProduct} from "../../Homepage/types";

export enum CheckoutActionTypes {
    SET_BASKET = 'CHECKOUT/SET_BASKET',
    ADD_TO_BASKET = 'CHECKOUT/ADD_TO_BASKET',
}

export const CheckoutActions = {
    setBasket: () => createAction(CheckoutActionTypes.SET_BASKET),
    addProductToBasket: (payload: IProduct) => createAction(CheckoutActionTypes.ADD_TO_BASKET, payload),
};

export type CheckoutAction = ActionsUnion<typeof CheckoutActions>