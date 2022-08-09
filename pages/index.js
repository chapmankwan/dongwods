import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dongwods®</title>
        <meta name="Your local dong's giving you the wod" content="Generated with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Dongwods
        </h1> 
        <div className={styles.description}>
          <span>Sponsored by</span>
          
          <span>WHITELIGHTNING</span>
        </div>

        <button>
          <Link href="dongs">Chupapi Munyayo</Link>
        </button>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://www.instagram.com/chineseminifridge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by @chineseminifridge
        </Link>
      </footer>
    </div>
  )
}
