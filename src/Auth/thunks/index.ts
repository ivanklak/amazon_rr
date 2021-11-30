import {IThunkResult} from '../../app/types';
import {AuthenticationAction, AuthenticationActions} from '../actions';

export const setAuthUserData = (user: any): IThunkResult<Promise<void>, AuthenticationAction> => async dispatch => {
    try {
        dispatch(AuthenticationActions.setAuthUser(user));
    } catch (error) {
        const result = (error as Error).message;

        console.log(result);
        // dispatch(AuthenticationActions.getAuthUserDataFailure(result));
    }
};
