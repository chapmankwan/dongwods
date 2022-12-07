import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Dongwods
        </h1> 
        <div className={styles.description}>
          <span>Sponsored by</span>
          <br/>
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
