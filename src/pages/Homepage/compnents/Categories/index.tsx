import React, {FC} from "react";
import {useSelector} from "react-redux";

import selector from "../../selectors";
import {addImgLink} from "../../utils/imgLinks";

import styles from "./styles.module.css";

const Categories: FC = () => {
    const {categories} = useSelector(selector);
    const catWithImg = addImgLink(categories);

    return (
        <div className={styles.categories}>
            <h3>Add joy to their wish list</h3>
            <div className={styles.categoriesItems}>
                <div className={styles.firstRow}>
                    {catWithImg.slice(0, 2).map((item) => (
                        <div key={item.name} className={styles.item}>
                            <div className={styles.imgField}>
                                <img alt={item.name} src={item.img}/>
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.secondRow}>
                    {catWithImg.slice(2, categories.length).map((item) => (
                        <div key={item.name} className={styles.item}>
                            <div className={styles.imgField}>
                                <img alt={item.name} src={item.img}/>
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.btmLink}>Shop Holiday Gifts</div>
        </div>
    );
};

export default Categories;