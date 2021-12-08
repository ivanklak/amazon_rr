import React, {FC} from 'react';

import styles from './styles.module.css';

interface IDropDownProps {
    data: Array<number>;
    setOpen: (bool: boolean) => void;
    setQuantity: (num: number) => void;
}

const DropDownCard: FC<IDropDownProps> = ({data = [], setOpen, setQuantity}) => {

    const onItemClick = (e: React.BaseSyntheticEvent) => {
        setQuantity(Number(e.target.innerHTML));
        setOpen(false);
    };

    return (
        <div className={styles.dropdown}>
            <ul className={styles.dropList}>
                {data.map((item, i) => (
                    <li key={i} className={styles.dropItem} onClick={onItemClick}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default DropDownCard;