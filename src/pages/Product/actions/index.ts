import {ActionsUnion} from "../../../app/types";
import {createAction} from "../../../app/actions/helpers";
import {IProduct} from "../../Homepage/types";

export enum SingleProductActionTypes {
    GET_SINGLE_PRODUCT_REQUEST = "PRODUCT/GET_SINGLE_PRODUCT_REQUEST",
    GET_SINGLE_PRODUCT_SUCCESS = "PRODUCT/GET_SINGLE_PRODUCT_SUCCESS",
    GET_SINGLE_PRODUCT_FAILURE = "PRODUCT/GET_SINGLE_PRODUCT_FAILURE",

    REMOVE_PRODUCT_FROM_PAGE = "PRODUCT/REMOVE_PRODUCT_FROM_PAGE",
}

export const SingleProductActions = {
    getSingleProductRequest: () => createAction(SingleProductActionTypes.GET_SINGLE_PRODUCT_REQUEST),
    getSingleProductSuccess: (payload: IProduct) => createAction(SingleProductActionTypes.GET_SINGLE_PRODUCT_SUCCESS, payload),
    getSingleProductFailure: (payload: string) => createAction(SingleProductActionTypes.GET_SINGLE_PRODUCT_FAILURE, payload),

    removeProductFromPage: () => createAction(SingleProductActionTypes.REMOVE_PRODUCT_FROM_PAGE),
};

export type SingleProductAction = ActionsUnion<typeof SingleProductActions>
