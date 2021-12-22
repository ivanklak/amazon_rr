import {SingleProductAction, SingleProductActionTypes} from "../actions";
import {IProduct} from "../../Homepage/types";

interface ISingleProductState {
    product: IProduct | null;
    isLoading: boolean;
    error: string | null;
}

export const initialState: ISingleProductState = {
    product: null,
    isLoading: false,
    error: null,
};

const singleProductReducer = (state = initialState, action: SingleProductAction): ISingleProductState => {
    switch (action.type) {
        case SingleProductActionTypes.GET_SINGLE_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case SingleProductActionTypes.GET_SINGLE_PRODUCT_SUCCESS: {
            return {
                ...state,
                product: action.payload,
                isLoading: false
            };
        }
        case SingleProductActionTypes.GET_SINGLE_PRODUCT_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        }
        case SingleProductActionTypes.REMOVE_PRODUCT_FROM_PAGE: {
            return {
                ...state,
                product: null
            };
        }
        default:
            return state;
    }
};

export default singleProductReducer;
