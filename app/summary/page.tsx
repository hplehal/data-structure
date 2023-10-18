// import Image from 'next/image'
import { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Data Structure',
    description: 'data structure defenitions you can review 📖',
  }
  

export default function Home() {
  return (
    <section className={styles.main}>
      <div>
        <h2>Data Structure Summary</h2>
      </div>

      <div>
        <h3>What Are Data Structures?</h3>
        <p>It a way to organize and manage Data.</p>
      </div>
    </section>
  )
}
