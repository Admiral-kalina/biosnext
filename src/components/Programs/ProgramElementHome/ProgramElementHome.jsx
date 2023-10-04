import React from 'react';

// libraries
import {Link} from "react-router-dom";

// assets
import arrowUpRight from "src/app/media/images/arrowUpRightSm.svg";

// styles
import * as styles from "../programElement.module.scss";
import Image from "next/image";


const ProgramElement = ({programs}) => {
    return (
        <>


            {programs.map(program =>
                <div key={program.id} className={styles.column}>
                    <Link  to={`/home/programs/program/?program=${program.id}#programs`}>
                        <p className={styles.section}>Программа</p>
                        <p className={styles.name}>{program.name}</p>
                        <p className={styles.date}><span>Начало:</span> {program.date}</p>
                        <div className={styles.bottom}>
                            <p><span>Вебинаров:</span> {program.webinarsCount}</p>
                            <Image src={arrowUpRight} alt={'arrow'}/>
                        </div>

                    </Link>
                </div>
            )}
        </>
    );
};

export default ProgramElement;