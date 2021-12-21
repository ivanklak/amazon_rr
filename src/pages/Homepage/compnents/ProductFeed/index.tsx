import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import SkeletonProduct from "../../../../app/components/Skeletons/SkeletonProduct";
import {getCategories, getProducts} from "../../thunks";
import selector from "../../selectors";
import Product from "../Product";
import Card from "../Card";
import Categories from "../Categories";
import SignIn from "../SignIn";
import Deals from "../Deals";

import styles from "./styles.module.css";

const ProductFeed = () => {
    const {products, user, isLoading} = useSelector(selector);
    const dispatch = useDispatch();

    const firstProducts = products.slice(0, 7);
    const cardProducts = products.slice(9);

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, []);

    return (
        <>
            {isLoading ?
                <div className={styles.skeleton}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <SkeletonProduct key={i}/>)}
                </div>
                :
                <div className={styles.products}>
                    <div className={styles.productsItems}>
                        {firstProducts.map(item => (
                            <Product key={item.id} product={item}/>
                        ))}
                        {user ? <Deals/> : <SignIn/>}
                    </div>
                    <Card cardProducts={cardProducts}/>
                    <div className={styles.productsItems}>
                        <Categories/>
                        {cardProducts.map(item => (
                            <Product key={item.id} product={item}/>
                        ))}
                    </div>
                </div>
            }
        </>
    );
};

export default ProductFeed;