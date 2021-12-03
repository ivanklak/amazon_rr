import {CheckoutAction, CheckoutActionTypes} from "../actions";
import {IProduct} from "../../Homepage/types";

interface ICheckoutState {
    basket: Array<IProduct>
}

export const initialState: ICheckoutState = {
    basket: []
};

const checkoutReducer = (state = initialState, action: CheckoutAction): ICheckoutState => {
    switch (action.type) {
        case CheckoutActionTypes.SET_BASKET: {
            return {
                ...state
            };
        }
        case CheckoutActionTypes.ADD_TO_BASKET: {
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };
        }
        default:
            return state;
    }
};

export default checkoutReducer;