import React, {FC} from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
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
    const history = useHistory();
    const currentProductId = props.match.params.id;
    const {products, user} = useSelector(selector);

    const currentProduct = products.find(item => item.id === Number(currentProductId));

    const onAddClick = () => {
        if (user) {
            dispatch(addToBasket(currentProduct as IProduct));
        } else {
            history.push('/login');
            dispatch(addToBasket(currentProduct as IProduct));
        }
    };

    const onBuyClick = () => {
        dispatch(addToBasket(currentProduct as IProduct));
        history.push('/checkout');
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
                <div>
                    <div>${currentProduct?.price}</div>
                    <p>$18.26 Shipping & Import Fees Deposit to Russian Federation</p>
                    <div>quantity</div>
                    <button onClick={onAddClick}>Add to Cart</button>
                    <button onClick={onBuyClick}>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;