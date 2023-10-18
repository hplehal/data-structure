import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div>
        <p>What is coding? Coding is just manipulating data. for example You are in the front end and needed to get data from the backend or requesting data then transforming that data to specific a specific format that will be readable to regular humans then showing that data on a website or phone application.</p>
        <p>This also happens when you are working on APIs. you are storing or retrieving data from the database and sending it the client who requested that specific data. </p>
        <p>ALL SOFTWARE ENGINEERS DO IS MOVING DATA FROM ONE PLACE TO ANOTHER!</p>
        <p>Manipulating data is what data structures is derived to. It diffeerent way to derive and manipulate, structure or organize data. In smaller word DATA STRUCTURES is just a way to organize and manage data. </p>
      </div>
    </main>
  )
}
