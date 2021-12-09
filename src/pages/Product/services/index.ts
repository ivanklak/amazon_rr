import {instance} from "../../../app/services/api";
import {IProduct} from "../../Homepage/types";

export const singleProductAPI = {
    getProduct(id: number) {
        return instance.get<IProduct>(`products/${id}`).then(response => response.data);
    }
};
