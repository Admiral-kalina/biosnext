import React from 'react';
import Image from "next/image";

// styles

import * as styles from "./aboutUsHome.module.scss";

// assets
import comma from "../../app//media/images/comma.svg";
import {useTranslation} from "react-i18next";

const mockData = [
    {
        id: 1,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
    {
        id: 2,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
    {
        id: 3,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
    {
        id: 4,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
    {
        id: 5,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
    {
        id: 6,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
    {
        id: 7,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
    {
        id: 8,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
    {
        id: 9,
        author: 'Анна С.',
        comment: 'Невероятное погружение в мир фармацевтики! Курс позволил мне разгадать тайны создания лекарств и научил анализировать составы. Очень информативно!'
    },
]

const AboutUsHome = () => {
    const {t} = useTranslation();
    return (
        <section className={styles.root}>
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.fixed}`}>
                    <div className={styles.content}>
                        <p className={styles.title}>
                            {t('cabinet.studentsSaying')}
                        </p>
                        <p className={styles.text}>
                            {t('cabinet.participantsExperiences')}
                        </p>
                        <p className={styles.subtext}>
                            {t('cabinet.testimonials')}
                        </p>
                    </div>
                </div>
                <div className={`${styles.column} ${styles.scrollable}`}>
                    {mockData.map(el =>
                        <div className={styles.content} key={el.id}>
                            <Image src={comma} alt={'img'}/>
                            <p className={styles.comment}>{el.comment}</p>
                            <p className={styles.author}>{el.author}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutUsHome;