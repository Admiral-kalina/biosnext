'use client'
import React from 'react';

import logo from "src/app/media/images/logo.png"
import icon5 from "src/app/media/images/icon/icon5.svg"
import icon6 from "src/app/media/images/icon/icon6.svg"
import icon7 from "src/app/media/images/icon/icon7.svg"
import icon8 from "src/app/media/images/icon/icon8.svg"
import icon12 from "../../app/media/images/icon/icon12.svg";
import icon13 from "../../app/media/images/icon/icon13.svg";
import icon14 from "../../app/media/images/icon/icon14.svg";
import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";


const Footer = ({location}) => {
    const {t} = useTranslation();
    return (
        <footer className={`footer ${location==='home'? 'footer_home' : ''}`}>
            <div className="container d-block-md">
                <div className="footer__wrapper">
                    <div className="footer__contacts">
                        <a href="tel:+38 (095) 382-92-64">+380 95 382 9264</a>
                        <div className="footer__social_left">
                            <Link href={'/'}><Image src={icon12} alt="phone"/></Link>
                            <Link href={'/'}><Image src={icon13} alt="viber"/></Link>
                            <Link href={'/'}><Image src={icon14} alt="telegram"/></Link>
                        </div>
                        <p>{t('additional.address')}</p>

                        <div className="footer__mail">
                            <a href="mailto:info@bioinnova.com.ua">info@bioinnova.com.ua</a>
                        </div>
                    </div>

                    <div className="footer__center">
                        <div className="footer__social">
                            <a href="mailto:info@bioinnova.com.ua"><Image src={icon5} alt="icon"/><i className="icon-mail"></i></a>
                            <a href="#"><Image src={icon6} alt="icon"/></a>
                            <a href="#"><Image src={icon7} alt="icon"/></a>
                            <a href="#"><Image src={icon8} alt="icon"/></a>

                        </div>
                        <div className="footer__copyright">
                            © all rights reserved
                        </div>
                        <div className="footer__mail">
                            <a href="mailto:info@bioinnova.com.ua">info@bioinnova.com.ua</a>
                        </div>

                    </div>

                    <div className="footer__end">
                        <div className="footer__logo">
                            <Image
                                className="inline-svg"
                                src={logo}
                                alt="Logo Bioscience Innova"
                            />
                        </div>
                        <div className="footer__mail">
                            <a href="mailto:info@bioinnova.com.ua">info@bioinnova.com.ua</a>
                        </div>

                        <div className="footer__copyright">
                            © all rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;