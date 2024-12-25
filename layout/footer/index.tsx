import { Typography } from '@mui/material';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaRegCopyright } from "react-icons/fa";
// import "./Footer.css"
import styles from "@/styles/Footer.module.css";
import Link from 'next/link';
const Footer: React.FC = () => {
    return (
        <footer className={styles.footerHome} style={{position:"sticky",zIndex:"3",width:"100vw"}}>
            <div className={styles.footerContentWrapper}>
                <div className={styles.iconsWrapper}>
                    <Link href={'https://www.facebook.com'}><FaFacebook className={styles.icons} /></Link>
                    <Link href={'https://www.twitter.com'}><FaTwitter className={styles.icons} /></Link>
                    <Link href={'https://www.instagram.com'}><FaInstagram className={styles.icons} /></Link>
                    <Link href={'https://www.linkedin.com'}><FaLinkedin className={styles.icons} /></Link>

                </div>
                <div className={styles.homeLinkWrapper}>

                    <Link href='#' className={styles.homeLink}>
                        Home
                    </Link>|
                    <Link href='#' className={styles.homeLink}>
                        About
                    </Link>|
                    <Link href='#' className={styles.homeLink}>
                        Services
                    </Link>|
                    <Link href='#' className={styles.homeLink}>
                        Team
                    </Link>|
                    <Link href='#' className={styles.homeLink}>
                        Contact
                    </Link>


                </div>
                <div>
                    <Typography className={styles.copyRight}>
                        <FaRegCopyright /> Copyright 2023 <span>|</span> All rights reserved.
                    </Typography>

                </div>
            </div>
        </footer>
    )
}

export default Footer