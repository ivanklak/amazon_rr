import React, {FC, useEffect, useState} from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LockAlt} from '@styled-icons/boxicons-solid/LockAlt';

import WideAdv from "../../app/components/Advertisment/wideAdv";
import {addToBasket} from "../Checkout/thunks";
import {IProduct} from "../Homepage/types";
import {fixedPrice} from "../../app/helpers";

import Rating from "../../app/components/Rating";

import selector from "./selector";
import DropDownCard from "./components/DropDownCard";
import {getSingleProduct} from "./thunks";

import styles from './styles.module.css';

interface IProductProps {
    id: string;
}

const Product: FC<RouteComponentProps<IProductProps>> = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {user, product} = useSelector(selector);
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({});
    const qtyData = [1, 2, 3];

    const onQtyClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const id = Number(props.match.params.id);

        dispatch(getSingleProduct(id));
    }, []);

    useEffect(() => {
        setNewProduct({...product, count: quantity});
    }, [product]);

    const onAddClick = () => {
        if (user) {
            dispatch(addToBasket(newProduct as IProduct));
        } else {
            history.push('/login');
            dispatch(addToBasket(newProduct as IProduct));
        }
    };

    const onBuyClick = () => {
        dispatch(addToBasket(newProduct as IProduct));
        history.push('/checkout');
    };

    const shippingPrice = () => (Number(product?.price) / 100 * 30).toFixed(2);

    const descriptionFormat = (string: string) => {
        const arr = string.split('.');
        const resultArray: Array<string> = [];

        arr.forEach((item: string) => item !== "" && resultArray.push(item));

        return resultArray;
    };

    const addCount = (num: number) => {
        setNewProduct({...product, count: num});
    };

    return product && (
        <div>
            <WideAdv/>
            <div className={styles.productPage}>
                <div className={styles.leftColumn}>
                    <div className={styles.productImgField}>
                        <img src={product.image} className={styles.productImg} alt="productImg"/>
                    </div>
                </div>
                <div className={styles.productDescription}>
                    <h2>{product.title}</h2>
                    <div className={styles.rating}>
                        <Rating rate={product.rating.rate} size={20}/>
                        <div>{product.rating.count} ratings</div>
                    </div>
                    <div className={styles.parameters}>
                        <table>
                            <tbody>
                            <tr>
                                <td className={styles.priceColumn}>Price:</td>
                                <td>
                                    <span className={styles.priceNumber}>${fixedPrice(Number(product.price))}</span>
                                    <span className={styles.shippingPrice}> + ${shippingPrice()} shipping</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.about}>
                        <h4>About this item</h4>
                        <ul>
                            {descriptionFormat(product.description).map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.productAdd}>
                    <div className={styles.addForm}>
                        <div>
                            <span className={styles.priceNumber}>${fixedPrice(Number(product.price))}</span>
                        </div>
                        <div>
                            <span className={styles.shippingPrice}>${shippingPrice()} Shipping & Import Fees Deposit to Russian Federation</span>
                        </div>
                        <div className={styles.qtyButton}>
                            <button onClick={onQtyClick}>Qty: {quantity}</button>
                            {open && <DropDownCard addCount={addCount} data={qtyData} setOpen={setOpen}
                                                   setQuantity={setQuantity}/>}
                        </div>
                        <div className={styles.addButtons}>
                            <button onClick={onAddClick} className={styles.addButton}>Add to Cart</button>
                            <button onClick={onBuyClick} className={styles.buyButton}>Buy now</button>
                        </div>
                        <div className={styles.secure}>
                            <LockAlt size={16} color='#c2c2c2'/>
                            <span>Secure transaction</span>
                        </div>
                        <div>
                            <table>
                                <tbody>
                                <tr>
                                    <td className={styles.shipItem}>Ships from</td>
                                    <td className={styles.shipInfo}>Amazon</td>
                                </tr>
                                <tr>
                                    <td className={styles.shipItem}>Sold by</td>
                                    <td className={styles.shipInfo}>Amazon</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.return}>
                            <span>Return policy: </span>
                            <span>Returnable until Jan 31, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;