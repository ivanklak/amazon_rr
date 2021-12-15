import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {db} from "../../firebase";

import selector from "./selectors";

const Orders = () => {
    const {user} = useSelector(selector);
    const [orders, setOrders] = useState<any>([]);

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
        } else {
            setOrders([]);
        }
    }, [user]);

    return orders && (
        <div>
            <h1>Your orders</h1>
            <div>
                {orders.map((order: any) => (
                    <div key={order}>{order.data.amount}</div>
                ))}
            </div>
        </div>

    );
};

export default Orders;