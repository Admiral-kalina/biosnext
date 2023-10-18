import React from 'react';

import * as styles from "./webinarOverview.module.scss";
import WebinarDescription from "../WebinarDescription/WebinarDescription";

import mockImg from "../../../app/media/images/home/webinarMock.png"
import MyButton from "../../UI/MyButton/MyButton";

import Image from "next/image";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addBasketElement} from "@/features/basket/basketSlice";
import {useTranslation} from "react-i18next";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {convertDateFormat} from "@/helpers/convertTime";


const WebinarOverviewHome = ({webinar, hashString,userAvailableWebinars, previousRoute}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()

    const isEventBuyInWebinar = userAvailableWebinars.find(el => el.id === webinar.id)

    console.log('Ov', hashString,)
    if (!webinar) {
        return (
            <MyLoader/>
        )
    }


    let route = null;

    if (previousRoute) {
        route = `${previousRoute.pathname}${previousRoute.search}#${hashString}`
    } else {
        route = `/home/${hashString}?#${hashString}`
    }

    console.log('webinar', webinar)
    const handleClick = () => {
        const payload = {
            data: webinar,
            type: 'webinars',
            t
        }
        dispatch(addBasketElement(payload))
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Link to={route}>
                    {hashString === 'webinars' ?
                        <p className={styles.back}>{t('cabinet.back')}</p>
                        :
                        <p className={styles.back}>{t('cabinet.backToProgram')}</p>
                    }
                </Link>
                <div className={styles.row}>
                    <div className={`${styles.column} ${styles.scrollable}`}>
                        <p className={styles.section}>{t('additional.webinar')}</p>
                        <p className={styles.name}>{webinar.name}</p>
                        <div className={`${styles.contentTop} ${styles.showOnPhone}`}>
                            <p className={styles.date}> {convertDateFormat(webinar.date)}</p>
                            <p className={styles.teacher}>{webinar.teacher}</p>
                            <p className={styles.program}>{webinar.topic}</p>
                            <p className={styles.time}>{webinar.duration} {t('additional.minutes')}</p>
                            <p className={styles.time}>{webinar.exactTime}</p>
                        </div>

                        <p className={styles.text}>
                            {webinar.descriptionTitle}
                        </p>
                        <Image src={mockImg} alt="preview"/>
                        <div className={styles.description}>
                            <WebinarDescription
                                programTitle={webinar.descriptionSubtitle}
                                webinarDescription={webinar.descriptionWebinar}
                            />
                        </div>
                    </div>
                    <div className={`${styles.column} ${styles.fixed}`}>
                        <div className={`${styles.contentTop} ${styles.hideOnPhone}`}>
                            <p className={styles.date}> {convertDateFormat(webinar.date)}</p>
                            <p className={styles.teacher}>{webinar.teacher}</p>
                            <p className={styles.program}>{webinar.topic}</p>
                            <p className={styles.time}>{webinar.duration} {t('additional.minutes')}</p>
                            <p className={styles.time}>{webinar.exactTime} </p>
                        </div>
                        {webinar.isAcquired || isEventBuyInWebinar?
                            <div className={styles.content}>
                                <div className={styles.contentLectures}>
                                    <MyButton transparent>
                                        <Link
                                            to={webinar.youTubeLink}
                                            target="_blank"
                                        >
                                            <p
                                                className={styles.youtube}>
                                                {t('cabinet.watchOnYouTube')}
                                            </p>
                                        </Link>
                                    </MyButton>
                                    <MyButton transparent>
                                        <Link
                                            to={webinar.lectureNotesLink}
                                            target="_blank"
                                        >
                                            <p
                                                className={styles.synopsis}>
                                                {t('cabinet.downloadLecture')}
                                            </p>
                                        </Link>
                                    </MyButton>
                                    <MyButton transparent>
                                        <Link
                                            to={webinar.presentationLink}
                                            target="_blank"
                                        >
                                            <p
                                                className={styles.presentation}>
                                                {t('cabinet.downloadPresentation')}
                                            </p>
                                        </Link>
                                    </MyButton>
                                </div>
                            </div>
                            :
                            <div className={styles.content}>
                                <div className={styles.contentBuy}>
                                    <p className={styles.price}>{webinar.price} $</p>
                                    <MyButton onClick={handleClick} transparent>{t('cabinet.buy')}</MyButton>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebinarOverviewHome;