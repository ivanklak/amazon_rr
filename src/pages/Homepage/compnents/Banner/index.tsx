import React from "react";

import {Carousel} from "react-responsive-carousel";

import styles from "./styles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => (
    <div className={styles.banner}>
        <div className={styles.gradient} />
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
                <img loading="lazy" src="https://links.papareact.com/gi1" alt="banner" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/6ff" alt="banner" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/7ma" alt="banner" />
            </div>
        </Carousel>
    </div>
);
export default Banner;