import React, {FC} from "react";
import moment from "moment";

import {IOrder} from "../types";
import {fixedPrice} from "../../../app/helpers";

import styles from "./styles.module.css";

interface IOrderProps {
    order: IOrder
}

const Order: FC<IOrderProps> = ({order}) => {
    console.log(order);

    return (
        <div className={styles.orderContainer}>
            <span>{moment.unix(order.data.created as number).format("MMMM Do YYYY, h:mma")}</span>
            <p>
                <span>Order id: </span>
                <span>{order.id}</span>
            </p>
            {order.data.basket?.map(item => (
                <div key={item.id}>
                    <div className={styles.orderItem}>
                        <div>
                            {item.title} -
                        </div>
                        <div>
                            ${fixedPrice(Number(item.price))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Order;