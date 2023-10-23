import React from 'react';
import {useTranslation} from "react-i18next";

import {getAllEventsWithSort, getNearestEventsByKey} from "@/helpers/getNearestEventsByKey";

import * as styles from "../webinars.module.scss";
import {convertDateFormat} from "@/helpers/convertTime";
import {checkLanguage} from "@/helpers/checkLanguage";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import Link from "next/link";


const WebinarListHome = ({webinars, isWebinarHome, isAvailable, withAttributes}) => {
    const {t} = useTranslation();
    // console.log('WP', Boolean(webinars))
    // if (!webinars.length) {
    //     return (
    //         <MyLoader/>
    //     )
    // }
    console.log('Patronum', webinars)

    return (
        <>
            {withAttributes ?
               <>
                   {webinars.map(webinar =>
                       <div key={webinar.id} className={styles.column}>
                           <div>
                               <p className={styles.section}>{t('additional.webinar')} № {webinar.id}</p>
                               <p className={styles.name}>{webinar.attributes.name}</p>
                               <p className={styles.date}> {convertDateFormat(webinar.attributes.date)}</p>
                               <p className={styles.teacher}>{webinar.attributes.teacher}</p>
                               <p className={styles.time}>{webinar.attributes.duration}
                                   <span> {t('additional.minutes')}</span></p>
                           </div>
                           <div>
                               <Link
                                   scroll={false}
                                   href={`/home/webinars/webinar/?webinar=${webinar.id}#webinars`}
                               >
                                   {t('additional.open')}
                               </Link>
                           </div>
                       </div>
                   )}

               </>
                :
                <>
                    {webinars.map(webinar =>
                        <div key={webinar.id} className={styles.column}>
                            <div>
                                <p className={styles.section}>{t('additional.webinar')} № {webinar.id}</p>
                                <p className={styles.name}>{webinar.name}</p>
                                <p className={styles.date}> {convertDateFormat(webinar.date)}</p>
                                <p className={styles.teacher}>{webinar.teacher}</p>
                                <p className={styles.time}>{webinar.duration}<span> {t('additional.minutes')}</span></p>
                            </div>
                            <div>
                                <Link
                                    scroll={false}
                                    href={`/home/webinars/webinar/?webinar=${webinar.id}#webinars`}
                                >
                                    {t('additional.open')}
                                </Link>
                            </div>
                        </div>
                    )}
                </>
            }
        </>

    );
};

export default WebinarListHome;