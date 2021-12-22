import {IThunkResult} from "../../../app/types";
import {SingleProductAction, SingleProductActions} from "../actions";
import {singleProductAPI} from "../services";

export const getSingleProduct = (id: number): IThunkResult<Promise<void>, SingleProductAction> =>
    async dispatch => {
        dispatch(SingleProductActions.getSingleProductRequest());
        try {
            const response = await singleProductAPI.getProduct(id);

            dispatch(SingleProductActions.getSingleProductSuccess(response));
        } catch (error) {
            const result = (error as Error).message;

            dispatch(SingleProductActions.getSingleProductFailure(result));
        }
    };

export const removeSingleProduct = (): IThunkResult<void, SingleProductAction> =>
    dispatch => {
        dispatch(SingleProductActions.removeProductFromPage());
    };