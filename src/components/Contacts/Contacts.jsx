'use client'
import React, {useEffect} from 'react';
// styles
import * as styles from "./contacts.module.scss";
import Container from "../Container/Container";
import ContactForm from "../UI/ContactForm/ContactForm";
import {scrollToTop} from "../../helpers/scrollToTop";
import {useTranslation} from "react-i18next";



const Contacts = () => {
    const {t} = useTranslation();
    useEffect(() => {
        scrollToTop()
    },)

    return (
    <div className={styles.root}>
        <Container additionalPadding>
            <div className={styles.row}>
                {/*<div className={`${styles.column} ${styles.columnLeft}`}>*/}
                    <div className={styles.topInfo}>
                        <p className={styles.title}>
                            {t('additional.contacts')}
                        </p>
                        <p className={styles.subtitle}>
                            {t('additional.contactsDescription')}
                        </p>
                    </div>
                    <div className={styles.bottomInfo}>
                        <a href="/">email: info@bioinnova.com.ua</a>
                        <a href="m">+380 95 382 9264</a>
                        <p> {t('additional.address')}</p>
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