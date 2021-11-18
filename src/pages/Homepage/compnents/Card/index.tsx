import React, {FC} from "react";

import {IProduct} from "../../types";

import styles from "./styles.module.css";

interface IProductProps {
    cardProducts: Array<IProduct>
}

const Card: FC<IProductProps> = ({cardProducts}) => (
    <div className={styles.card}>
        <h3>International top sellers</h3>
        <div className={styles.cardItems}>
            {cardProducts.map((item) => (
                <div key={item.id} className={styles.cardItem}>
                    <img className={styles.cardImage} src={item.image} alt={item.image} />
                </div>
            ))}
        </div>
    </div>
);

export default Card;