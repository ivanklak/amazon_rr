import React, {FC} from 'react';

import styles from './styles.module.css';

interface IDropDownProps {
    data: Array<number>;
    setOpen: (bool: boolean) => void;
    setQuantity: (num: number) => void;
    addCount: (num: number) => void;
}

const DropDownCard: FC<IDropDownProps> = ({data = [], setOpen, setQuantity, addCount}) => {

    const onItemClick = (e: React.BaseSyntheticEvent) => {
        const itemsCount = Number(e.target.innerHTML);

        setQuantity(itemsCount);
        addCount(itemsCount);
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