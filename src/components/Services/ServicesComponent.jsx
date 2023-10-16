"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "react-i18next";

// components
import Container from "../Container/Container";


// assets
import program from "../../app/media/images/services/program.svg";
import webinar from "../../app/media/images/services/webinar.svg"
import arrowUpRight from "../../app/media/images/arrowUpRight.svg"

// styles
import * as styles from "./services.module.scss";


const ServicesComponent = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.root}>
            <Container>
                <div className={styles.row}>
                    <p className={styles.title}>{t('services.services')}</p>
                    <div className={styles.courseRow}>

                        <Link href='/services/programs'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={program} alt="program"/>
                                <p className={styles.description}>{t('services.training')}</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link href='/services/webinars-and-lectures'>
                            <div className={styles.courseColumn}>

                                <Image className={styles.logo} src={webinar} alt="webinar"/>
                                <p className={styles.description}>{t('services.webinars')}</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>

                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServicesComponent;