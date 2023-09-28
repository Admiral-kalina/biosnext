import React from 'react';

// styles
import * as styles from "./basket.module.scss"
import MyCollapse from "../UI/MyCollapse/MyCollapse";
import Header from "@/components/Header/Header";

const Basket = () => {
    return (
        <div className={styles.root}>
            <Header/>
            <MyCollapse/>
        </div>
    );
};

export default Basket;