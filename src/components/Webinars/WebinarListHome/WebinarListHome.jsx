import React from 'react';

import * as styles from "../webinars.module.scss";

import {Link} from "react-router-dom";


const WebinarListHome = ({webinars, isWebinarHome}) => {
    console.log('WEBINARS', webinars)
    let withoutAttributes = true;

    if (webinars[0]?.attributes && !isWebinarHome){
        withoutAttributes = false;
    }

    return (
            <>
                {withoutAttributes?
                    <>
                        {webinars.map(webinar =>
                            <div key={webinar.id} className={`${styles.column} ${styles.columnHome}`}>
                               <div>
                                   <p className={styles.section}>Вебинар №{webinar.id}</p>
                                   <p className={styles.name}>{webinar.name}</p>
                                   <p className={styles.date}> {webinar.date}</p>
                                   <p className={styles.teacher}>{webinar.teacher}</p>
                                   <p className={styles.time}>{webinar.duration} <span>минут</span></p>
                               </div>
                              <div>
                                  <Link
                                      to={`/home/webinars/webinar/?webinar=${webinar.id}#webinars`}
                                  >
                                      Открыть
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
                     <p className={styles.date}> {webinar.attributes.date}</p>
                     <p className={styles.teacher}>{webinar.attributes.teacher}</p>
                     <p className={styles.time}>{webinar.attributes.duration} <span>минут</span></p>
                 </div>
                                <div>
                                    <Link
                                        to={`/home/programs/program/webinar/?webinar=${webinar.id}#programs`}
                                    >
                                        Открыть
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