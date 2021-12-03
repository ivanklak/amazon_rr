import {AppStateType} from "../redux-store";

const selector = (state: AppStateType) => ({
    user: state.auth.user,
    basket: state.checkout.basket,
});

export default selector;
