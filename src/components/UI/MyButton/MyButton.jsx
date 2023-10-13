import React from 'react';
import clsx from "clsx";
import * as styles from "./myButton.module.scss";

const MyButton = ({
    children,
    onClick,
    black,
    transparent,
    golden,
    fullGolden,
    goldenTransparent
}) => {

    const clsxStyles = clsx(styles.button, {
        [styles.black]: black,
        [styles.transparent]: transparent,
        [styles.golden]: golden,
        [styles.fullGolden]: fullGolden,
        [styles.goldenTransparent]: goldenTransparent
    })

    return (
        <button
            onClick={onClick}

            className={clsxStyles}
        >
            {children}
        </button>
    );
};

export default MyButton;