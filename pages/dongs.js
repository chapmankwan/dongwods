import styles from '../styles/Home.module.css'

export default function Dongs () {
    return (
    
        <main className={styles.main}>
            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Wods</h2>
                <p>Find in depth wods that take you to the next level. And remember every wod will contain wall balls.</p>
              </a>
        
              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Success Stories</h2>
                <p>Take a look at all the successes with these wods, especially the great White Lightning's success</p>
              </a>
        
              <a
                href="gross"
                className={styles.card}
              >
                <h2>Examples Exercises</h2>
                <p>Some examples to create your own wods with recommendations based on White Lightning's terrible AI</p>
              </a>
        
              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h2>The REAL DEAL</h2>
                <p>
                  Hop on something that isn't crossfit, please and thank you. Anything, even Calisthenics.
                </p>
              </a>
            </div>
        </main>
    )
}
