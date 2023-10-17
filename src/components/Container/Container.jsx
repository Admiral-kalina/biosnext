import React from 'react';

// styles
import * as styles from "./container.module.scss";

const Container = ({children, sizeZero,additionalPadding}) => {
    return (
        <div className={styles.container}>
            <div
                className={`
                ${styles.wrapper} 
                ${sizeZero ? styles.sizeZero : styles.sizeFull}
                ${additionalPadding? styles.additionalPadding:''}
                `}>
                    {children}
            </div>
        </div>
    );
};

export default Container;