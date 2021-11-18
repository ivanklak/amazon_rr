import React from "react";

import Banner from "./compnents/Banner";

import ProductFeed from "./compnents/ProductFeed";

import styles from "./styles.module.css";

const Homepage = () => (
    <div className={styles.homepage}>
        <Banner/>
        <ProductFeed />
    </div>
);

export default Homepage;