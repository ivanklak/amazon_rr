import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {db} from "../../firebase";
import SkeletonOrder from "../../app/components/Skeletons/SkeletonOrder";

import selector from "./selectors";
import Order from "./components/Order";
import {IOrder} from "./types";

import styles from './styles.module.css';

const Orders = () => {
    const {user} = useSelector(selector);
    const [orders, setOrders] = useState<Array<IOrder>>([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ));
            setFetching(false);
        } else {
            setOrders([]);
            setFetching(false);
        }
    }, [user]);

    return (
        <div className={styles.ordersContainer}>
            <div className={styles.yourOrders}>
                <div className={styles.yourOrdersTittle}>
                    {orders.length !== 0
                        ? <div>
                            <h1>Your orders</h1>
                            <div className={styles.tittleSpan}>
                                <span>Price</span>
                            </div>
                        </div>
                        :
                        <h1>No orders yet :(</h1>
                    }
                </div>
                {fetching
                    ? [1, 2, 3, 4].map((i) => <SkeletonOrder key={i}/>)
                    : <div className={styles.itemsList}>
                        {orders.map((order) => (
                            <Order key={order.id} order={order}/>
                        ))}
                    </div>
                }
            </div>
            <div className={styles.rightSideBlock}>
                <div className={styles.sponsoredProducts}>
                    <span>Sponsored Products related to items in your cart</span>
                </div>
            </div>
        </div>
    );
};

export default Orders;