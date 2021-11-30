import {AppStateType} from "../redux-store";

export const getUser = (state: AppStateType) => state.auth.user;