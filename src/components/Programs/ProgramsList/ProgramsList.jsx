import React from "react";

// components
import Container from "../../Container/Container";
import ProgramElement from "../ProgramElement/ProgramElement";

// styles
import * as styles from "../programs.module.scss";

export const ProgramsList = ({programs}) => {
    return (
        <Container>
            <div className={styles.root}>
                <p className={styles.back}>Услуги</p>
                <p className={styles.title}>Программы обучения</p>
                <div className={styles.row}>
                    <ProgramElement programs={programs}/>
                </div>
            </div>
        </Container>
    )
}