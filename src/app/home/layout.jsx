'use client'
import Home from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import * as React from "react";
import "../index.scss";
import union from "@/app/media/images/home/union.svg";
import laptop from "@/app/media/images/home/laptop.svg";
import schedule from "@/app/media/images/home/schedule.svg";
import about from "@/app/media/images/home/about.svg";
import {useTranslation} from "react-i18next";
import * as styles from "@/components/Home/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import {redirect} from "next/navigation";
import {Protector, removeUserData, userData} from "@/helpers/userData";
import {useEffect, useState} from "react";
import {fetchUserCourses} from "@/features/userSlice/userSlice";
import {useDispatch} from "react-redux";

export default function HomeLayout({children}) {
    const dispatch = useDispatch()
    const {t} = useTranslation();
    const [hash, setHash] = useState('');
    const [navs, setNavs] = useState([]);
    const initNavs = () => {
        const currentHash = location.hash.substring(1);
        setHash(currentHash);

        const navItems = [
            {id: 0, description: t('cabinet.webinar'), path: 'webinars', img: union},
            {id: 1, description: t('cabinet.program'), path: 'programs', img: laptop},
            {id: 2, description: t('cabinet.schedule'), path: 'schedule', img: schedule},
            {id: 3, description: t('cabinet.aboutUs'), path: 'about-us', img: about}
        ];

        return navItems.map(nav => ({
            ...nav,
            isActive: nav.path === currentHash
        }));
    };

    useEffect(() => {

        setNavs(initNavs());
    }, []);



    const handleNavClick = (id) => {
        setNavs(prevNavs =>
            prevNavs.map(navItem => ({
                ...navItem,
                isActive: navItem.id === id
            }))
        );
    };

    return (
        <Protector>
            <section>
                <Header type={'cabinet'} />
                <Container background={'#151515'} sizeZero={true} additionalPadding>
                    <div className={styles.root}>
                        <div className={styles.gridSidebar}>
                            {navs.map(nav => (
                                <div key={nav.id} className={`${styles.block} ${nav.isActive ? styles.active : ''}`}>
                                    <Link scroll={false} onClick={() => handleNavClick(nav.id)} href={`/home/${nav.path}/#${nav.path}`}>
                                        <div className={styles.blockElement}>
                                            <Image src={nav.img} alt={laptop} />
                                            <p>{nav.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                            <div className={styles.block}>
                                <div onClick={removeUserData} className={styles.blockElement}>
                                    <p>{t('header.exit')}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridContent}>
                            <div className={styles.contentWrapper}>
                                {children}
                            </div>
                        </div>
                    </div>
                </Container>
                <Footer location='home' />
            </section>
        </Protector>

    )
}
