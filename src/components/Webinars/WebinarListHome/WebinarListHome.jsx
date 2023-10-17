import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import {getAllEventsWithSort, getNearestEventsByKey} from "@/helpers/getNearestEventsByKey";

import * as styles from "../webinars.module.scss";
import {convertDateFormat} from "@/helpers/convertTime";
import {checkLanguage} from "@/helpers/checkLanguage";


const WebinarListHome = ({webinars, isWebinarHome, isAvailable, withAttributes}) => {
    const {t} = useTranslation();


    console.log('Inner', webinars)

    const isLanguageEnglish = checkLanguage()
    console.log(checkLanguage)

    return (
        <>
            {withAttributes ?
               <>
                   {webinars.map(webinar =>
                       <div key={webinar.id} className={styles.column}>
                           <div>
                               <p className={styles.section}>{webinar.attributes.section} №{webinar.id}</p>
                               <p className={styles.name}>{webinar.attributes.name}</p>
                               <p className={styles.date}> {convertDateFormat(webinar.attributes.date)}</p>
                               <p className={styles.teacher}>{webinar.attributes.teacher}</p>
                               <p className={styles.time}>{webinar.attributes.duration}
                                   <span>{t('additional.minutes')}</span></p>
                           </div>
                           <div>
                               <Link
                                   to={`/home/programs/program/webinar/?webinar=${webinar.id}#programs`}
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
                                <p className={styles.section}>{webinar.section} №{webinar.id}</p>
                                <p className={styles.name}>{webinar.name}</p>
                                <p className={styles.date}> {convertDateFormat(webinar.date)}</p>
                                <p className={styles.teacher}>{webinar.teacher}</p>
                                <p className={styles.time}>{webinar.duration}
                                    <span>{t('additional.minutes')}</span></p>
                            </div>
                            <div>
                                <Link
                                    to={`/home/programs/program/webinar/?webinar=${webinar.id}#programs`}
                                >
                                    {t('additional.open')}
                                </Link>
                            </div>
                        </div>
                    )}
                </>
            }
        </>

        // <>
        //     asdf
        //     {!(webinars[0]?.attributes && !isWebinarHome && isAvailable) ?
        //         <>
        //             {sortedWebinarsByDate.map(webinar =>
        //                 <div key={webinar.id} className={`${styles.column} ${styles.columnHome}`}>
        //                     <div>
        //
        //                         <p className={styles.time}>{webinar.duration} <span>{t('additional.minutes')}</span></p>
        //                     </div>
        //                     <div>
        //                         <Link
        //                             to={`/home/webinars/webinar/?webinar=${webinar.id}#webinars`}
        //                         >
        //                             {t('additional.open')}
        //                         </Link>
        //                     </div>
        //                 </div>
        //             )}
        //         </>
        //         :
        //         <>
        //             123
        //             {closest.map(webinar =>
        //                 <div key={webinar.id} className={styles.column}>
        //                     <div>
        //                         <p className={styles.section}>{webinar.section} №{webinar.id}</p>
        //                         <p className={styles.name}>{webinar.attributes.name}</p>
        //                         <p className={styles.date}> {convertDateFormat(webinar.attributes.date)}</p>
        //                         <p className={styles.teacher}>{webinar.attributes.teacher}</p>
        //                         <p className={styles.time}>{webinar.attributes.duration}
        //                             <span>{t('additional.minutes')}</span></p>
        //                     </div>
        //                     <div>
        //                         <Link
        //                             to={`/home/programs/program/webinar/?webinar=${webinar.id}#programs`}
        //                         >
        //                             {t('additional.open')}
        //                         </Link>
        //                     </div>
        //                 </div>
        //             )}
        //         </>
        //     }
        //
        // </>

    );
};

export default WebinarListHome;