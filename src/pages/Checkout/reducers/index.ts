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
        case CheckoutActionTypes.REMOVE_FROM_BASKET: {
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.payload);
            const newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log('Cant remove');
            }

            return {
                ...state,
                basket: newBasket
            };
        }
        default:
            return state;
    }
};

export default checkoutReducer;