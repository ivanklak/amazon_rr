import React from "react";
import {SearchIcon, MenuIcon, ShoppingCartIcon, ChevronDownIcon} from "@heroicons/react/outline";

import logo from '../../images/amazon_PNG11.png';

import styles from './styles.module.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerTop}>
            <img src={logo} className={styles.logo} alt="logo"/>
            <div className={styles.searchBar}>
                <div className={styles.categories}>
                    Pick a category
                    <ChevronDownIcon className={styles.categoriesIcon}/>
                </div>
                <div className={styles.searchInput}>
                    <input className={styles.input} type="text"/>
                    <SearchIcon className={styles.searchIcon}/>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.rightSideItem}>
                    <p>Hi Ivan</p>
                    <p>Account & Lists</p>
                </div>
                <div className={styles.rightSideItem}>
                    <div className={styles.returns}>
                        <p>Returns</p>
                        <p>& Orders</p>
                    </div>
                </div>
                <div className={styles.rightSideItem}>
                    <div className={styles.basket}>
                        <div className={styles.itemsCount}>0</div>
                        <ShoppingCartIcon className={styles.basketIcon}/>
                        <p>Basket</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.headerBottom}>
            <div className={styles.bottomItems}>
                <div className={styles.menu}>
                    <MenuIcon className={styles.menuIcon}/>
                </div>
                <div>
                    <p>Black Friday</p>
                </div>
                <div>
                    <p>Supermarket</p>
                </div>
                <div>
                    <p>Bestseller</p>
                </div>
                <div>
                    <p>Amazon Basics</p>
                </div>
                <div>
                    <p>New</p>
                </div>
                <div>
                    <p>Prime</p>
                </div>
            </div>
            <div>
                <p>Some advertising</p>
            </div>
        </div>
    </header>
);

export default Header;