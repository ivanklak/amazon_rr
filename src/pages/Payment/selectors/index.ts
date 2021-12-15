import {AppStateType} from "../../../app/redux-store";

const selector = (state: AppStateType) => ({
    basket: state.checkout.basket,
    total: state.checkout.total,
});

export default selector;