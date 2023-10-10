import React from "react";

// components
import Container from "../../Container/Container";
import ProgramElement from "../ProgramElement/ProgramElement";

// styles
import * as styles from "../programs.module.scss";
import Link from "next/link";

export const ProgramsList = ({programs}) => {
    return (
        <Container>
            <div className={styles.root}>
                <div className="back_group">
                    <Link href={'/services'} className="back">Услуги</Link>
                </div>
                <p className={styles.title}>Программы обучения</p>
                <div className={styles.row}>
                    <ProgramElement programs={programs}/>
                </div>
            </div>
        </Container>
    )
}