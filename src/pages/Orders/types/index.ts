import {IProduct} from "../../Homepage/types";

export interface IOrderData {
    amount?: number;
    created?: number;
    basket?: Array<IProduct>
}

export interface IOrder {
    data: IOrderData,
    id: string
}