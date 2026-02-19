import { FC, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SmallPageHeader from '../components/SmallPageHeader';
import styles from '../styles/Menu.module.scss';
import { items } from '../utilities/items';
import Map from '../components/Map';
import Image from 'next/image';
import Router from 'next/router';

const MenuItem: FC<{ value: Item }> = ({ value }) => {
  return (
    <li className={styles.menuItem}>
      <p className={styles.menuInfo}>
        <span className={styles.menuName}>{value.name}</span>
        <span>{value.ingredients}</span>
      </p>
      <p>
        <span className={styles.menuPrice}>{value.price}</span>
      </p>
    </li>
  );
};

const Menu: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/menu') {
      Router.push('https://bobajoy.winorder.no/');
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | Meny</title>
        <meta
          name="description"
          content="Boba Joy bubble tea shop's menu page"
        />
        <meta
          httpEquiv="refresh"
          content="0; url=https://bobajoy.winorder.no/"
        />
      </Head>
      
      <Header />
      <main className={styles.main}>
        <SmallPageHeader title="Meny" />
        <div
          className={styles.section}
          data-aos="fade-up"
          style={{ display: 'hidden' }}
        >
          <div className={styles.menuImageWrapper}>
            <p>
              <b>Åpningstider:</b>
              <br />
              Man-Lør: 11:00 - 20:30
              <br />
              Søn: 12:00 - 20:00
            </p>
            <Image
              src="/images/meny.png"
              alt="Bobajoy meny"
              width={893}
              height={632}
              layout="responsive"
            />
            <div className={styles.buttonWrapper}>
              <a
                href="/_next/image?url=%2Fimages%2Fmeny.png&w=1080&q=100"
                target="_blank"
                className={`btn ${styles.btn}`}
              >
                Last ned menyen
              </a>
            </div>
          </div>
          <div className={styles.menuGrid}>
            {items.map((item, i) => {
              return (
                <ul key={i}>
                  <li className={styles.menuTitle}>
                    {item.key}
                    <span>{item.description}</span>
                  </li>
                  {item.values.map((value: Item, itemId) => (
                    <MenuItem key={i + '_' + itemId} value={value} />
                  ))}
                </ul>
              );
            })}
          </div>
        </div>
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
