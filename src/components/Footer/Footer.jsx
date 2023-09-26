import React from 'react';

import logo from "src/app/media/images/logo.png"
import icon5 from "src/app/media/images/icon/icon5.svg"
import icon6 from "src/app/media/images/icon/icon6.svg"
import icon7 from "src/app/media/images/icon/icon7.svg"
import icon8 from "src/app/media/images/icon/icon8.svg"
import {Image} from "antd";

const Footer = ({location}) => {

    return (
        <footer className={`footer ${location==='home'? 'footer_home' : ''}`}>
            <div className="container d-block-md">
                <div className="footer__wrapper">
                    <div className="footer__contacts">
                        <a href="tel:+38 (616) 566-58-96">+38 (616) 566-58-96</a>
                        <p>01033, город Киев, Улица Тарасовская, дом 4-А, офис 7
                        </p>
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