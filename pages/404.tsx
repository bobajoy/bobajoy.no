import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/About.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import SmallPageHeader from '../components/SmallPageHeader';

const Custom404: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | 404</title>
        <meta
          name="description"
          content="Boba Joy bubble tea shop's opsies page"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <SmallPageHeader title="" />
        <div className={styles.section}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
          </div>
        </div>
        <Map />
      </main>
      <Footer />
    </div>
  );
};
export default Custom404;
