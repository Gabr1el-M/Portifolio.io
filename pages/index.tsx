import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  return (
    <div>
      <Image
        src="/../public/images/background.jpg"
        alt="Foto de fundo"
        layout="fill"
        objectFit="cover"
      />
      <div data-aos="fade-up-right" className={styles.title}>
        <h1>Bem vindo ao meu Portifólio!</h1>
      </div>
      <div data-aos="fade-down-left" className={styles.container}>
        <Link href="/About" className={styles.link}>
          <div className={styles.tag}>
            <h3>Bora lá?</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}
