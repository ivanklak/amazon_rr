import {AppStateType} from "../redux-store";

const selector = (state: AppStateType) => ({
    user: state.auth.user,
});

export default selector;
