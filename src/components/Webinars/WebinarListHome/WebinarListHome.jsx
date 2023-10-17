import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import {getNearestEventsByKey} from "@/helpers/getNearestEventsByKey";

import * as styles from "../webinars.module.scss";
import {convertDateFormat} from "@/helpers/convertTime";


const WebinarListHome = ({webinars, isWebinarHome}) => {
    const {t} = useTranslation();

    const dataToSort = [...webinars];

    const closest = getNearestEventsByKey(dataToSort, "date",3);

    return (
            <>
                {!(webinars[0]?.attributes && !isWebinarHome)?
                    <>
                        {closest.map(webinar =>
                            <div key={webinar.id} className={`${styles.column} ${styles.columnHome}`}>
                               <div>
                                   <p className={styles.section}>{t('additional.webinar')} №{webinar.id}</p>
                                   <p className={styles.name}>{webinar.name}</p>
                                   <p className={styles.date}> {convertDateFormat(webinar.date)}</p>
                                   <p className={styles.teacher}>{webinar.teacher}</p>
                                   <p className={styles.time}>{webinar.duration} <span>{t('additional.minutes')}</span></p>
                               </div>
                              <div>
                                  <Link
                                      to={`/home/webinars/webinar/?webinar=${webinar.id}#webinars`}
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
                     <p className={styles.name}>{webinar.attributes.name}</p>
                     <p className={styles.date}> {convertDateFormat(webinar.attributes.date)}</p>
                     <p className={styles.teacher}>{webinar.attributes.teacher}</p>
                     <p className={styles.time}>{webinar.attributes.duration} <span>{t('additional.minutes')}</span></p>
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

    );
};

export default WebinarListHome;