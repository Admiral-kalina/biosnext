import * as styles from "../webinars.module.scss";

import React from "react";
import Link from "next/link";


export const WebinarsList = ({webinars, programId, isWebinarHome}) => {
    console.log('WE', webinars)
    const isAttributesExist = webinars[0].attributes
    return (
        <>
            {webinars.map(webinar =>
                <div key={webinar.id} className={styles.column}>
                    {isAttributesExist ?
                        <>
                            <div>
                                <p className={styles.section}>{webinar.attributes.section} №{webinar.id}</p>
                                <p className={styles.name}>{webinar.attributes.name}</p>
                                <p className={styles.date}> {webinar.attributes.date}</p>
                                <p className={styles.teacher}>{webinar.attributes.teacher}</p>
                                <p className={styles.time}>{webinar.attributes.duration} <span>минут</span></p>
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
                                    Открыть
                                </Link>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <p className={styles.section}>{webinar.section} №{webinar.id}</p>
                                <p className={styles.name}>{webinar.name}</p>
                                <p className={styles.date}> {webinar.date}</p>
                                <p className={styles.teacher}>{webinar.teacher}</p>
                                <p className={styles.time}>{webinar.duration} <span>минут</span></p>
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
                                    Открыть
                                </Link>
                            </div>
                        </>
                    }


                </div>
            )}
        </>
    )
}