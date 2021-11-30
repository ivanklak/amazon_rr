import {ActionsUnion} from '../../app/types';

import {createAction} from '../../app/actions/helpers';

export enum AuthenticationActionTypes {
    SET_USER = 'AUTH/SET_USER',
}

export const AuthenticationActions = {
    setAuthUser: (payload: any) => createAction(AuthenticationActionTypes.SET_USER, payload),
};

export type AuthenticationAction = ActionsUnion<typeof AuthenticationActions>;
