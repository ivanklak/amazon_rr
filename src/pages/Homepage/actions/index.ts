import {ActionsUnion} from "../../../app/types";
import {createAction} from "../../../app/actions/helpers";
import {IProduct} from "../types";

export enum ProductsActionTypes {
    GET_PRODUCTS_REQUEST = "HOMEPAGE/GET_PRODUCTS_REQUEST",
    GET_PRODUCTS_SUCCESS = "HOMEPAGE/GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAILURE = "HOMEPAGE/GET_PRODUCTS_FAILURE",

    GET_CATEGORIES_REQUEST = "HOMEPAGE/GET_CATEGORIES_REQUEST",
    GET_CATEGORIES_SUCCESS = "HOMEPAGE/GET_CATEGORIES_SUCCESS",
    GET_CATEGORIES_FAILURE = "HOMEPAGE/GET_CATEGORIES_FAILURE",
}

export const ProductsActions = {
    getProductsRequest: () => createAction(ProductsActionTypes.GET_PRODUCTS_REQUEST),
    getProductsSuccess: (payload: Array<IProduct>) => createAction(ProductsActionTypes.GET_PRODUCTS_SUCCESS, payload),
    getProductsFailure: (payload: string) => createAction(ProductsActionTypes.GET_PRODUCTS_FAILURE, payload),

    getCategoriesRequest: () => createAction(ProductsActionTypes.GET_CATEGORIES_REQUEST),
    getCategoriesSuccess: (payload: Array<string>) => createAction(ProductsActionTypes.GET_CATEGORIES_SUCCESS, payload),
    getCategoriesFailure: (payload: string) => createAction(ProductsActionTypes.GET_CATEGORIES_FAILURE, payload),
};

export type ProductsAction = ActionsUnion<typeof ProductsActions>
