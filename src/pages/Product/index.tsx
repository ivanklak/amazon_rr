import React, {FC} from "react";
import {RouteComponentProps} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {addToBasket} from "../Checkout/thunks";
import {IProduct} from "../Homepage/types";

import selector from "./selector";

import styles from './styles.module.css';

interface IProductProps {
    id: string;
}

const Product: FC<RouteComponentProps<IProductProps>> = props => {
    const dispatch = useDispatch();
    const currentProductId = props.match.params.id;
    const {products} = useSelector(selector);

    const currentProduct = products.find(item => item.id === Number(currentProductId));

    const onAddClick = () => {
        dispatch(addToBasket(currentProduct as IProduct));
    };

    return (
        <div className={styles.productPage}>
            <div className={styles.leftColumn}>
                <div className={styles.productImgField}>
                    <img src={currentProduct?.image} className={styles.productImg} alt="productImg"/>
                </div>
            </div>
            <div className={styles.productDescription}>
                <h2>{currentProduct?.title}</h2>
                <div className={styles.rating}>
                    <div>{currentProduct?.rating.rate} stars</div>
                    <div>{currentProduct?.rating.count} ratings</div>
                </div>
                <div>parameters</div>
                <div>
                    <h4>About this item</h4>
                    {currentProduct?.description}
                </div>
            </div>
            <div className={styles.productAdd}>
                <div>Add to list</div>
                <button onClick={onAddClick}>Add to List</button>
            </div>
        </div>
    );
};

export default Product;