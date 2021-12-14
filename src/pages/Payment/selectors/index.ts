import {AppStateType} from "../../../app/redux-store";

const selector = (state: AppStateType) => ({
    basket: state.checkout.basket
});

export default selector;