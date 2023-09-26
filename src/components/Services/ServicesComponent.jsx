"use client"
import React from 'react';

// libraries
import {Image} from "antd/lib";

// components
import Container from "../Container/Container";


// assets
import program from "../../app/media/images/services/program.svg";
import webinar from "../../app/media/images/services/webinar.svg"
import arrowUpRight from "../../app/media/images/arrowUpRight.svg"

// styles
import * as styles from "./services.module.scss";
import Link from "next/link";

const ServicesComponent = () => {
    return (
        <div className={styles.root}>
            <Container>
                <div className={styles.row}>
                    <p className={styles.title}>Услуги</p>
                    <div className={styles.courseRow}>

                        <Link href='/services/programs'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={program} alt="program"/>
                                <p className={styles.description}>Программы обучения</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link href='/services/webinars-and-lectures'>
                            <div className={styles.courseColumn}>

                                <Image className={styles.logo} src={webinar} alt="webinar"/>
                                <p className={styles.description}>Лекции и вебинары</p>
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