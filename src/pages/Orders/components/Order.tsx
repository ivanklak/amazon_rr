import React, {FC} from "react";
import moment from "moment";

import {IOrder} from "../types";
import {fixedPrice} from "../../../app/helpers";
import Rating from "../../../app/components/Rating";

import styles from "./styles.module.css";

interface IOrderProps {
    order: IOrder
}

const Order: FC<IOrderProps> = ({order}) => {
    console.log(order);

    return (
        <div className={styles.orderContainer}>
            <div className={styles.orderDate}>
                <span>{moment.unix(order.data.created as number).format("MMMM Do YYYY, h:mma")}</span>
            </div>
            {order.data.basket?.map(item => (
                <div key={item.id} className={styles.item}>
                    <div>
                        <div className={styles.itemImgField}>
                            <img src={item.image} alt={item.image}/>
                        </div>
                        <div className={styles.itemDescription}>
                            <h4>{item.title}</h4>
                            <div className={styles.itemRating}>
                                <Rating rate={item.rating.rate} size={15}/>
                                <div>({item.rating.count} ratings)</div>
                            </div>
                            <div className={styles.itemOptions}>
                                <span>Qty: {item.count}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemPrice}>
                        <span>${fixedPrice(Number(item.price))}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Order;