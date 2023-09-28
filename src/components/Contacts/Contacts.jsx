'use client'
import React, {useEffect} from 'react';
// import emailjs from '@emailjs/browser'
// styles
import * as styles from "./contacts.module.scss";
import Container from "../Container/Container";
import PhoneInput from "react-phone-number-input";
import {Field, Formik} from "formik";
import MyButton from "../UI/MyButton/MyButton";
import ContactForm from "../UI/ContactForm/ContactForm";
import {scrollToTop} from "../../helpers/scrollToTop";



const Contacts = () => {

    useEffect(() => {
        scrollToTop()
    },)

    return (
    <div className={styles.root}>
        <Container>
            <div className={styles.row}>
                {/*<div className={`${styles.column} ${styles.columnLeft}`}>*/}
                    <div className={styles.topInfo}>
                        <p className={styles.title}>
                            Контакты
                        </p>
                        <p className={styles.subtitle}>
                            Вы можете отправить свой електронный адрес и мы свяжемся с вами.
                        </p>
                    </div>
                    <div className={styles.bottomInfo}>
                        <a href="/">email: info@bioinnova.com.ua</a>
                        <a href="m">+380 95 382 9264</a>
                        <p>місто Київ, ВУЛИЦЯ ТАРАСІВСЬКА, будинок 4-А, офіс 7</p>
                    </div>
                {/*</div>*/}
                <div className={`${styles.column} ${styles.columnRight}`}>
                    <ContactForm/>
                </div>
            </div>
        </Container>
    </div>
    );
};

export default Contacts;