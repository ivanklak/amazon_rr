import {AppStateType} from "../../../app/redux-store";

const selector = (state: AppStateType) => ({
    basket: state.checkout.basket,
    total: state.checkout.total,
    user: state.auth.user
});

export default selector;