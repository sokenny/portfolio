import type { NextPage } from 'next'
import Head from 'next/head'
import Profile from '@/components/modules/Profile/Profile';
import Portfolio from '@/components/modules/Portfolio/Portfolio';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Juan Chaher | Full Stack Web Developer</title>
      </Head>
      <main>
        <Profile />
        <Portfolio />        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home