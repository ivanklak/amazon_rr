import {AppStateType} from "../../../app/redux-store";

const selector = (state: AppStateType) => ({
    products: state.productsHomepage.products,
});

export default selector;