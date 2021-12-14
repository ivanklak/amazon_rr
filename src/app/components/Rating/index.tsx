import React, {FC} from "react";
import {StarFill} from "@styled-icons/bootstrap/StarFill";
import {StarHalf} from "@styled-icons/bootstrap/StarHalf";

import styles from "./styles.module.css";

interface IRatingProps {
    rate: number;
    size: number;
}

const Rating: FC<IRatingProps> = ({rate, size}) => {
    const isInteger = (num: number) => (num ^ 0) === num;

    const getStars = (num: number) => {
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

    return (
        <div className={styles.stars}>
            {getStars(rate).map(i => (
                isInteger(i)
                    ? <div key={i}><StarFill size={size} color='#F49D20FF'/></div>
                    : <div key={i}><StarHalf size={size} color='#F49D20FF'/></div>
            ))}
        </div>
    );
};

export default Rating;