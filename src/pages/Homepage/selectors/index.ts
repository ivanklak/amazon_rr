import {AppStateType} from "../../../app/redux-store";

const selector = (state: AppStateType) => ({
    products: state.productsHomepage.products,
    categories: state.productsHomepage.categories,
    user: state.auth.user,
    isLoading: state.productsHomepage.isLoading,
});

export default selector;