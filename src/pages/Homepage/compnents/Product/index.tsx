import React, {FC} from "react";

import {IProduct} from "../../types";

import styles from "./styles.module.css";

interface IProductProps {
    product: IProduct
}

const Product: FC<IProductProps> = ({product}) => {

    const shortTitle = (item: string) => {
        if (item.length > 32) {
            if (item[31] !== " ") {
                const arr = [];
                
                for (let i = 31; i < item.length; i++) {
                    const currentLetter = item[i];
                    
                    if (currentLetter === " ") {
                        arr.push(currentLetter);
                        break;
                    }
                    arr.push(currentLetter);
                }
                const endItem = arr.join("");
                const startItem = item.slice(0 ,31);

                return startItem + endItem + "...";
            }

            return item.slice(0, 31);
        }

        return item;
    };

    return (
            <div className={styles.product}>
                <h3>
                    {shortTitle(product.title)}
                </h3>
                <div className={styles.productDescription}>
                    <div className={styles.imageField}>
                        <img className={styles.productImage} src={product.image} alt={product.title} />
                    </div>
                </div>
                <div className={styles.productPrice}>{product.price}$</div>
            </div>
        );

};

export default Product;