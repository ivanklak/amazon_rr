import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getProducts} from "../../thunks";
import selector from "../../selectors";
import Product from "../Product";
import Card from "../Card";

import styles from "./styles.module.css";

const ProductFeed = () => {
    const {products} = useSelector(selector);
    const dispatch = useDispatch();

    const firstProducts = products.slice(0, 8);
    const cardProducts = products.slice(9);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <div className={styles.products}>
            {firstProducts.map(item => (
                <Product key={item.id} product={item}/>
            ))}
            <Card cardProducts={cardProducts}/>
        </div>
    );
};

export default ProductFeed;