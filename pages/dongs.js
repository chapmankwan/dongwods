import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/header'

export default function Dongs () {
    return (
      <>

        <Header title={"Suck it"}/>
        <main className={styles.main}>
            <div className={styles.grid}>        
              <Link
                href="gross"
              >
                <div className={styles.card}>
                  <h2>Examples Exercises</h2>
                  <p>Some examples to create your own wods with recommendations based on White Lightnings terrible AI</p>
                </div>
              </Link>
            </div>
        </main>
      </>
    )
}
