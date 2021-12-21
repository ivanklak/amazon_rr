import {ProductsAction, ProductsActionTypes} from "../actions";
import {IProduct} from "../types";

interface IProductFeedState {
    products: Array<IProduct>;
    categories: Array<string>;
    isLoading: boolean;
    error: string | null;
}

export const initialState: IProductFeedState = {
    products: [],
    categories: [],
    isLoading: true,
    error: null
};

const productsReducer = (state = initialState, action: ProductsAction): IProductFeedState => {
    switch (action.type) {
        case ProductsActionTypes.GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.payload,
                isLoading: false
            };
        }
        case ProductsActionTypes.GET_PRODUCTS_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        }
        case ProductsActionTypes.GET_CATEGORIES_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case ProductsActionTypes.GET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.payload,
                isLoading: false
            };
        }
        case ProductsActionTypes.GET_CATEGORIES_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        }
        default:
            return state;
    }
};

export default productsReducer;
