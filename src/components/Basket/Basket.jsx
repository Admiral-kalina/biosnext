import React from 'react';

// styles
import * as styles from "./basket.module.scss"
import MyCollapse from "../UI/MyCollapse/MyCollapse";

const Basket = () => {
    return (
        <div className={styles.root}>
            <MyCollapse/>
        </div>
    );
};

export default Basket;