import React from 'react';

// styles
import * as styles from "./container.module.scss";

const Container = ({children}) => {
    return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    );
};

export default Container;