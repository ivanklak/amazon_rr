import {AppStateType} from "../../../app/redux-store";

const selector = (state: AppStateType) => ({
    products: state.productsHomepage.products,
    categories: state.productsHomepage.categories,
});

export default selector;