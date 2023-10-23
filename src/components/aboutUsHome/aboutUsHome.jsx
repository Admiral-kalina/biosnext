'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";

// styles

import * as styles from "./aboutUsHome.module.scss";

// assets
import comma from "../../app//media/images/comma.svg";
import {useTranslation} from "react-i18next";
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";
import {strapiApi} from "@/api";



const AboutUsHome = () => {
    const {t} = useTranslation();

    const [feedbacks, setFeedbacks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getFeedbacks() {
            try {
                const response = await strapiApi.get('/api/feedbacks?populate=*');
                setFeedbacks(response.data); // Assuming response contains data in a 'data' field.
            } catch (err) {
                setError(err);
            }
        }

        getFeedbacks();

        // Optional: If strapiApi.get is cancellable, you can return a cleanup function.
        // return () => { /* cancel API call */ };

    }, []);
    console.log('ASSA',feedbacks)
    return (
        <section className={styles.root}>
            {/*<div className={styles.row}>*/}
            {/*    <div className={`${styles.column} ${styles.fixed}`}>*/}
            {/*        <div className={styles.content}>*/}
            {/*            <p className={styles.title}>*/}
            {/*                {t('cabinet.studentsSaying')}*/}
            {/*            </p>*/}
            {/*            <p className={styles.text}>*/}
            {/*                {t('cabinet.participantsExperiences')}*/}
            {/*            </p>*/}
            {/*            <p className={styles.subtext}>*/}
            {/*                {t('cabinet.testimonials')}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={`${styles.column} ${styles.scrollable}`}>*/}
            {/*        {feedbacks?.data?.map(el =>*/}
            {/*            <div className={styles.content} key={el.id}>*/}
            {/*                <Image src={comma} alt={'img'}/>*/}
            {/*                <p className={styles.comment}>{el.attributes.text}</p>*/}
            {/*                <p className={styles.author}>{el.attributes.userName}</p>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
};

export default AboutUsHome;