import {AuthenticationAction, AuthenticationActionTypes} from '../actions';

export interface IAuthenticationState {
    user: null | any;
}

export const initialState: IAuthenticationState = {
    user: null
};

const authReducer = (state = initialState, action: AuthenticationAction): IAuthenticationState => {
    switch (action.type) {
        case AuthenticationActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};

export default authReducer;
