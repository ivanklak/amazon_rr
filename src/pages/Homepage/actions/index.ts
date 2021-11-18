import {ActionsUnion} from "../../../app/types";
import {createAction} from "../../../app/actions/helpers";
import {IProduct} from "../types";

export enum ProductsActionTypes {
    GET_PRODUCTS_REQUEST = "HOMEPAGE/GET_PRODUCTS_REQUEST",
    GET_PRODUCTS_SUCCESS = "HOMEPAGE/GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAILURE = "HOMEPAGE/GET_PRODUCTS_FAILURE",
}

export const ProductsActions = {
    getProductsRequest: () => createAction(ProductsActionTypes.GET_PRODUCTS_REQUEST),
    getProductsSuccess: (payload: Array<IProduct>) => createAction(ProductsActionTypes.GET_PRODUCTS_SUCCESS, payload),
    getProductsFailure: (payload: string) => createAction(ProductsActionTypes.GET_PRODUCTS_FAILURE, payload),
};

export type ProductsAction = ActionsUnion<typeof ProductsActions>
