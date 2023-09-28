import React from 'react';

// styles
import * as styles from "./container.module.scss";

const Container = ({children, sizeZero}) => {
    console.log('sizeZero',sizeZero)
    return (
        <div className={styles.container}>
            <div
                className={`
                ${styles.wrapper} 
                ${sizeZero ? styles.sizeZero : styles.sizeFull}
                `}>
                    {children}
            </div>
        </div>
    );
};

export default Container;