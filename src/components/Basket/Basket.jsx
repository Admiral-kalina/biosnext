'use client'
import React from 'react';

// styles
import * as styles from "./basket.module.scss"
import MyCollapse from "../UI/MyCollapse/MyCollapse";
import Header from "@/components/Header/Header";
import {useLocation} from "react-router-dom";

const Basket = () => {
    const location = useLocation()
    const hashString = location.hash.substring(1)

    return (
        <div className={styles.root}>
            <Header type={hashString}/>
            <MyCollapse/>
        </div>
    );
};

export default Basket;