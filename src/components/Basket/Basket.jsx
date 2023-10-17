'use client'
import React from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

// helpers
import {groupBasketData} from "@/helpers/basketData";

// components
import MyCollapse from "../UI/MyCollapse/MyCollapse";
import Header from "@/components/Header/Header";
import ContactForm from "@/components/UI/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";

// styles
import * as styles from "./basket.module.scss"



const Basket = () => {
    const {t} = useTranslation()
    const {programs, webinars, totalPrice, count} = useSelector(store => store.basket.basket)
    const location = useLocation()
    const hashString = location.hash.substring(1)

    const hasItems = count > 0;

    const sendData = groupBasketData(programs,webinars);

    return (
        <div className={styles.root}>
            <Header type={hashString}/>
            <Container>

                <div className={styles.container}>
                    <p className={styles.title}>
                        {hasItems ? t('form.title') : t('form.empty')}
                    </p>
                    {programs.length > 0
                        &&
                        <div className={styles.collapse}>
                            <MyCollapse programs={programs} type={'programs'} location={'basket'}/>
                        </div>
                    }
                    {webinars.length > 0
                        &&
                        <div className={styles.collapse}>
                            <MyCollapse webinars={webinars} type={'webinars'} location={'basket'}/>
                        </div>
                    }
                    {hasItems && (
                        <div className={styles.form}>
                            <ContactForm price={totalPrice} location={'basket'} basketData={sendData}/>
                        </div>
                    )}
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Basket;