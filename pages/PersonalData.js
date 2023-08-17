import styles from '../styles/personaldata.module.css';
import Link from "next/link";
import TextApresentation from '../components/Textos';
import Image from 'next/image'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import List from '../components/List';

export default function PersonalData() {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
            <div className={styles.navbar}>
                <Link
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-duration="1600"
                    className={styles.link} href="/About">
                    Voltar
                </Link>
                <div className={styles.contsvg}>
                    <Link href="https://github.com/Gabr1el-M" target="_blank" className={styles.github}>
                        <Image
                            src="/github.svg"
                            alt='github svg'
                            width={38}
                            height={38}
                            priority
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-duration="1600"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gabriel-mart1ns/" target="_blank" className={styles.linkdin}>
                        <Image
                            src="/linkdin.svg"
                            alt="linkedin svg"
                            width={38}
                            height={38}
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-duration="1900"
                        />
                    </Link>
                    <Link href="https://wa.me/11950784641" target="_blank" className={styles.linkdin}>
                        <Image
                            src="/whats.svg"
                            alt="whats svg"
                            width={38}
                            height={38}
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-duration="2200"
                        />
                    </Link>
                    <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNrchWDgGmGMZkXrhRZrMSzqbNZFhPXHVFqGDhCFsxzWgMDjsgbqmwBFffkWCFNhxDXlDq" target="_blank" className={styles.linkdin}>
                        <Image
                            src="/gmail.svg"
                            alt="gmail svg"
                            width={38}
                            height={38}
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-duration="2500"
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.cont}>
                    <div data-aos="zoom-in-right" data-aos-duration="2100" className={styles.text}>
                        <TextApresentation />
                    </div>
                    <div data-aos="zoom-out" data-aos-duration="2100" className={styles.images}>

                    </div>
                </div>
            </div>
            {/* <div className={styles.soft}>
                <h1 className={styles.Th1} data-aos="fade-up-left" data-aos-duration="1500">Minhas softs skills</h1>
                <List />
            </div> */}
        </div>
    )
}