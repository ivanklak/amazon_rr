import React, {useRef, useState} from "react";
import {ChevronDownIcon, MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

import logo from '../../images/amazon_PNG11.png';
import {getUser} from "../../selectors";
import Modal from "../Modal";

import styles from './styles.module.css';

const Header = () => {
    const history = useHistory();
    const user = useSelector(getUser);
    const accountRef = useRef(null);
    const [accountSt, setAccountSt] = useState(null as any);
    const [open, setOpen] = useState(false);

    const onLogoClick = () => {
        console.log(accountSt);
        history.push('/');
    };

    const openPortal = () => {
        setOpen(!open);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <img onClick={onLogoClick} src={logo} className={styles.logo} alt="logo"/>
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
                <div ref={
                    (current: any) => {
                        accountRef.current = current;
                        setAccountSt(accountRef.current);
                    }} className={styles.rightSide}>
                    <div onClick={openPortal} className={styles.rightSideItem}>
                        <p>Hello, {user ? "Ivan" : "Sign in"}</p>
                        <p>Account & Lists</p>
                    </div>
                    <Modal
                        message={user ? "Sign out" : "Sign in"}
                        isOpen={open}
                        openPortal={openPortal}
                        accountRef={accountRef}
                        user={user}
                    />
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
};
export default Header;