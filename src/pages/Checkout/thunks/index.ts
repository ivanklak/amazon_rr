import {IProduct} from "../../Homepage/types";
import {IThunkResult} from "../../../app/types";
import {CheckoutAction, CheckoutActions} from "../actions";

export const addToBasket = (item: IProduct): IThunkResult<void, CheckoutAction> =>
    async dispatch => {
        dispatch(CheckoutActions.addProductToBasket(item));
    };