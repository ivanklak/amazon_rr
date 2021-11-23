import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getCategories, getProducts} from "../../thunks";
import selector from "../../selectors";
import Product from "../Product";
import Card from "../Card";
import Categories from "../Categories";

import styles from "./styles.module.css";

const ProductFeed = () => {
    const {products} = useSelector(selector);
    const dispatch = useDispatch();

    const firstProducts = products.slice(0, 8);
    const cardProducts = products.slice(9);

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, []);

    return (
        <div className={styles.products}>
            <div className={styles.productsItems}>
                {firstProducts.map(item => (
                    <Product key={item.id} product={item}/>
                ))}
            </div>
            <Card cardProducts={cardProducts}/>
            <div className={styles.productsItems}>
                <Categories />
                {cardProducts.map(item => (
                    <Product key={item.id} product={item}/>
                ))}
            </div>
        </div>
    );
};

export default ProductFeed;