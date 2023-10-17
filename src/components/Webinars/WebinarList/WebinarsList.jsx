import * as styles from "../webinars.module.scss";

import React from "react";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import {convertDateFormat} from "@/helpers/convertTime";


export const WebinarsList = ({webinars, programId, isWebinarHome}) => {
    const {t} = useTranslation();
    const isAttributesExist = webinars[0]?.attributes

    return (
        <>
            {webinars.map(webinar =>
                <div key={webinar.id} className={styles.column}>
                    {isAttributesExist ?
                        <>
                            <div>
                                <p className={styles.section}>{t('additional.webinar')} №{webinar.id}</p>
                                <p className={styles.name}>{webinar.attributes.name}</p>
                                <p className={styles.date}> {convertDateFormat(webinar.attributes.date)}</p>
                                <p className={styles.teacher}>{webinar.attributes.teacher}</p>
                                <p className={styles.time}>{webinar.attributes.duration} <span>{t('additional.minutes')}</span></p>
                            </div>
                            <div>
                                <Link
                                    href={
                                        programId ?
                                            `/services/webinars-and-lectures/${webinar.id}#program=${programId}`
                                            :
                                            `/services/webinars-and-lectures/${webinar.id}`

                                    }
                                >
                                    {t('additional.open')}
                                </Link>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <p className={styles.section}>{t('additional.webinar')} №{webinar.id}</p>
                                <p className={styles.name}>{webinar.name}</p>
                                <p className={styles.date}> {convertDateFormat(webinar.date)}</p>
                                <p className={styles.teacher}>{webinar.teacher}</p>
                                <p className={styles.time}>{webinar.duration} <span>{t('additional.minutes')}</span></p>
                            </div>
                            <div>
                                <Link
                                    href={
                                        programId ?
                                            `/services/webinars-and-lectures/${webinar.id}#program=${programId}`
                                            :
                                            `/services/webinars-and-lectures/${webinar.id}`

                                    }
                                >
                                    {t('additional.open')}
                                </Link>
                            </div>
                        </>
                    }


                </div>
            )}
        </>
    )
}