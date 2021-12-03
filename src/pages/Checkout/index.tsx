import React, {FC} from "react";
import {useSelector} from "react-redux";

import selector from "./selectors";


const Checkout: FC = () => {
    const {basket} = useSelector(selector);

    return (
        <div>
            {basket.map(item => (
                <div key={item.id}>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default Checkout;