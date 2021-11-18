import {instance} from "../../../app/services/api";
import {IProduct} from "../types";

export const productFeedAPI = {
    getProducts() {
        return instance.get<Array<IProduct>>('products').then(response => response.data);
    }
};
