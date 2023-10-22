'use client'
import React, {useEffect} from "react";
import AboutUsHome from "@/components/aboutUsHome/aboutUsHome";
import * as styles from "../home.module.scss"
import {scrollToTop} from "@/helpers/scrollToTop";

const AboutUs = () => {
    useEffect(() => {
        scrollToTop()
    }, []);
    return (
        <div className={styles.programDescriptioRow}>
            <AboutUsHome/>
        </div>
    );
};

export default AboutUs;

