import {AppStateType} from "../../../app/redux-store";

const selector = (state: AppStateType) => ({
    products: state.productsHomepage.products,
    user: state.auth.user,
    product: state.singleProduct.product,
    isLoading: state.singleProduct.isLoading,
});

export default selector;