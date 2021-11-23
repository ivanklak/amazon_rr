import {IThunkResult} from "../../../app/types";
import {ProductsAction, ProductsActions} from "../actions";
import {productFeedAPI} from "../services";

export const getProducts = (): IThunkResult<Promise<void>, ProductsAction> =>
    async dispatch => {
        dispatch(ProductsActions.getProductsRequest());
        try {
            const response = await productFeedAPI.getProducts();

            dispatch(ProductsActions.getProductsSuccess(response));
        } catch (error) {
            const result = (error as Error).message;

            dispatch(ProductsActions.getProductsFailure(result));
        }
    };

export const getCategories = (): IThunkResult<Promise<void>, ProductsAction> =>
    async dispatch => {
        dispatch(ProductsActions.getCategoriesRequest());
        try {
            const response = await productFeedAPI.getCategories();

            dispatch(ProductsActions.getCategoriesSuccess(response));
        } catch (error) {
            const result = (error as Error).message;

            dispatch(ProductsActions.getCategoriesFailure(result));
        }
    };