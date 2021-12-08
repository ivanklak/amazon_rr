import React, {FC, useState} from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StarFill} from '@styled-icons/bootstrap/StarFill';
import {StarHalf} from '@styled-icons/bootstrap/StarHalf';
import {LockAlt} from '@styled-icons/boxicons-solid/LockAlt';

import WideAdv from "../../app/components/Advertisment/wideAdv";
import {addToBasket} from "../Checkout/thunks";
import {IProduct} from "../Homepage/types";

import selector from "./selector";
import DropDownCard from "./components/DropDownCard";

import styles from './styles.module.css';

interface IProductProps {
    id: string;
}

const Product: FC<RouteComponentProps<IProductProps>> = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentProductId = props.match.params.id;
    const {products, user} = useSelector(selector);
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const qtyData = [1, 2, 3];

    const onQtyClick = () => {
        setOpen(!open);
    };

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

    const getStars = (num: number | any) => {
        const resultArray = [];
        const roundNum = Math.floor(num);
        const end = num - roundNum;

        for (let i = 1; i <= roundNum; i++) {
            resultArray.push(i);
        }

        if (end) {
            return resultArray.concat(end);
        } else {
            return resultArray;
        }
    };

    const shippingPrice = () => (Number(currentProduct?.price) / 100 * 30).toFixed(2);

    const isInteger = (num: number) => (num ^ 0) === num;

    const descriptionFormat = (string: any) => {
        const arr = string.split('.');
        const resultArray: Array<string> = [];

        arr.forEach((item: string) => item !== "" && resultArray.push(item));

        return resultArray;
    };

    return (
        <div>
            <WideAdv/>
            <div className={styles.productPage}>
                <div className={styles.leftColumn}>
                    <div className={styles.productImgField}>
                        <img src={currentProduct?.image} className={styles.productImg} alt="productImg"/>
                    </div>
                </div>
                <div className={styles.productDescription}>
                    <h2>{currentProduct?.title}</h2>
                    <div className={styles.rating}>
                        <div className={styles.stars}>
                            {getStars(currentProduct?.rating.rate).map(i => (
                                isInteger(i)
                                    ? <div key={i}><StarFill size={20} color='#F49D20FF'/></div>
                                    : <div key={i}><StarHalf size={20} color='#F49D20FF'/></div>
                            ))}
                        </div>
                        <div>{currentProduct?.rating.count} ratings</div>
                    </div>
                    <div className={styles.parameters}>
                        <table>
                            <tbody>
                            <tr>
                                <td className={styles.priceColumn}>Price:</td>
                                <td>
                                    <span className={styles.priceNumber}>${currentProduct?.price}</span>
                                    <span className={styles.shippingPrice}> + ${shippingPrice()} shipping</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.about}>
                        <h4>About this item</h4>
                        <ul>
                            {descriptionFormat(currentProduct?.description).map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.productAdd}>
                    <div className={styles.addForm}>
                        <div>
                            <span className={styles.priceNumber}>${currentProduct?.price}</span>
                        </div>
                        <div>
                            <span className={styles.shippingPrice}>${shippingPrice()} Shipping & Import Fees Deposit to Russian Federation</span>
                        </div>
                        <div className={styles.qtyButton}>
                            <button onClick={onQtyClick}>Qty: {quantity}</button>
                            {open && <DropDownCard data={qtyData} setOpen={setOpen} setQuantity={setQuantity}/>}
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