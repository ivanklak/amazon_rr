import React, {FC} from "react";
import {useSelector} from "react-redux";

import {IProduct} from "../Homepage/types";

import selector from "./selectors";


const Checkout: FC = () => {
    const {basket} = useSelector(selector);

    const sameIds = (arr: Array<IProduct>) => {

        for (let i = 0; i < arr.length; i++) {
            const currentItem = arr[i];

            let count = 0;
            for (let j = 0; j < arr.length; j++) {
                if (currentItem.id === arr[j].id) {
                    count++;
                }
            }
            currentItem.count = count;
        }
        const resArr: Array<any> = [];

        arr.filter(item => {
            const i = resArr.findIndex(x => (x.id == item.id));

            if (i <= -1) {
                resArr.push(item);
            }

            return null;
        });

        return resArr;
    };

    const uniqueBasket = sameIds(basket);

    return (
        <div>
            {uniqueBasket.map(item => (
                <div key={item.id}>
                    <div>
                        <h4>{item.title} - {item.count}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Checkout;