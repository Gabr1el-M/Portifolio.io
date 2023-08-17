import styles from '../styles/about.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';


export default function About() {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className={styles.contB}>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-duration="1000" className={styles.navbar}
            >
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/PersonalData" className={styles.link}>Sobre mim</Link>
            </div>
            <div className={styles.container}>
                <div>
                    <h2 data-aos-duration="1500" data-aos="fade-right">Meus projetos:</h2>
                    <div className={styles.projects}>
                        <div data-aos-duration="2100" data-aos="fade-up" className={styles.project}>Projeto 1</div>
                        <div data-aos-duration="2300" data-aos="fade-up" className={styles.project}>Projeto 2</div>
                        <div data-aos-duration="2500" data-aos="fade-up" className={styles.project}>Projeto 3</div>
                        <div data-aos-duration="2700" data-aos="fade-up" className={styles.project}>Projeto 4</div>
                        <div data-aos-duration="2900" data-aos="fade-up" className={styles.project}>Projeto 5</div>
                    </div>
                </div>
            </div>
            <div className={styles.title} data-aos="fade-down" data-aos-duration="1500">
                <h2>Tecnologias que usei para fazer meu portifólio</h2>
            </div>
            <div className={styles.contTecs}>
                <div className={styles.tecs}>
                    <div>
                        <Image
                            src="/../public/images/next.png"
                            alt="next"
                            width={98}
                            height={78}
                            className={styles.tec}
                            data-aos="fade-left"
                            data-aos-duration="1200"
                        />
                    </div>
                    <div>
                        <Image
                            src="/../public/images/js.png"
                            alt="js"
                            width={98}
                            height={78}
                            className={styles.tec}
                            data-aos="fade-left"
                            data-aos-duration="1800"
                        />
                    </div>
                    <div>
                        <Image
                            src="/../public/images/aos.jpg"
                            alt="js"
                            width={98}
                            height={78}
                            className={styles.tec}
                            data-aos="fade-left"
                            data-aos-duration="2100"
                        />
                    </div>
                    <div>
                        <Image
                            src="/../public/images/html.png"
                            alt="js"
                            width={98}
                            height={78}
                            className={styles.tec}
                            data-aos="fade-left"
                            data-aos-duration="2400"
                        />
                    </div>
                    <div>
                        <Image
                            src="/../public/images/css.png"
                            alt="js"
                            width={98}
                            height={78}
                            className={styles.tec}
                            data-aos="fade-left"
                            data-aos-duration="2700"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.contT}>
                <h2 className={styles.subTitle} data-aos="fade-up" data-aos-duration="1500">Támbem tenho conhecimento em</h2>
            </div>
            <div className={styles.contTecs} >
                <div className={styles.knowledge}>
                    <div>
                        <Image
                            src="/../public/images/react.jpg"
                            alt="react"
                            width={110}
                            height={78}
                            className={styles.knowledges}
                            data-aos="fade-right"
                            data-aos-duration="1200"
                        />
                    </div>
                    <div>
                        <Image
                            src="/../public/images/native.png"
                            alt="react"
                            width={110}
                            height={78}
                            className={styles.knowledges}
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        />
                    </div>
                    <div>
                        <Image
                            src="/../public/images/github.png"
                            alt="react"
                            width={110}
                            height={78}
                            className={styles.knowledges}
                            data-aos="fade-right"
                            data-aos-duration="1800"
                        />
                    </div>
                    <div>
                        <Image
                            src="/../public/images/styled c.png"
                            alt="react"
                            width={110}
                            height={78}
                            className={styles.knowledges}
                            data-aos="fade-right"
                            data-aos-duration="2100"
                        />
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <p>Todos os direitos reservados &copy; 2023</p>
            </footer>
        </div>
    )
}