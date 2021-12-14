import {ActionsUnion} from "../../../app/types";
import {createAction} from "../../../app/actions/helpers";
import {IProduct} from "../../Homepage/types";

export enum SingleProductActionTypes {
    GET_SINGLE_PRODUCT_REQUEST = "HOMEPAGE/GET_SINGLE_PRODUCT_REQUEST",
    GET_SINGLE_PRODUCT_SUCCESS = "HOMEPAGE/GET_SINGLE_PRODUCT_SUCCESS",
    GET_SINGLE_PRODUCT_FAILURE = "HOMEPAGE/GET_SINGLE_PRODUCT_FAILURE",
}

export const SingleProductActions = {
    getSingleProductRequest: () => createAction(SingleProductActionTypes.GET_SINGLE_PRODUCT_REQUEST),
    getSingleProductSuccess: (payload: IProduct) => createAction(SingleProductActionTypes.GET_SINGLE_PRODUCT_SUCCESS, payload),
    getSingleProductFailure: (payload: string) => createAction(SingleProductActionTypes.GET_SINGLE_PRODUCT_FAILURE, payload),
};

export type SingleProductAction = ActionsUnion<typeof SingleProductActions>
