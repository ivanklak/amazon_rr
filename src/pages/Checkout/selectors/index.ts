import {AppStateType} from "../../../app/redux-store";

const selector = (state: AppStateType) => ({
    basket: state.checkout.basket,
    user: state.auth.user,
});

export default selector;