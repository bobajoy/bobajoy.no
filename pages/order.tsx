import { FC, useEffect } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Order.module.scss';
import { items } from '../utilities/items';
import SmallPageHeader from '../components/SmallPageHeader';
import Map from '../components/Map';
import Swal from 'sweetalert2';

const OrderItem: FC<{ value: Item }> = ({ value }) => {
  return (
    <div className={styles.orderItem}>
      <div className={styles.orderItemInfo}>
        <h3>{value.name}</h3>
        <p>{value.description}</p>
        <p className={styles.orderItemPrice}>{value.price}</p>
      </div>
      <div className={styles.orderItemImage}>
        <Image
          src={value.image}
          alt="A placeholder for images"
          width={320}
          height={320}
          layout="responsive"
        />
      </div>
    </div>
  );
};

const Order: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/order') {
      Router.push('https://bobajoy.winorder.no/');
    }
    Swal.fire({
      icon: 'warning',
      html: '<h2>Bestillingsskjemaet er foreløpig ute av drift!</h2>',
      confirmButtonText: 'Se menyen istedet',
      confirmButtonAriaLabel: 'Se menyen',
      confirmButtonColor: '#9cbd32',
    }).then((result) => {
      if (result.isConfirmed) Router.push('/menu');
    });
  }, []);
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | Bestill</title>
        <meta
          name="description"
          content="Boba Joy bubble tea shop's order page"
        />
        <meta
          httpEquiv="refresh"
          content="0; url=https://bobajoy.winorder.no/"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <SmallPageHeader title="Bestill" />
        <div
          className={styles.section}
          data-aos="fade-up"
          style={{ display: 'hidden' }}
        >
          <div className={styles.orderWrapper}>
            <h1 className={styles.title}>Bestillingsskjema</h1>
            <div className={styles.orderDisplay}>
              <div className={styles.orderNav}>
                {items.map((item) => (
                  <button
                    key={item.key}
                    onClick={() =>
                      smoothScroll(
                        item.key.toLocaleLowerCase().split(' ').join('_')
                      )
                    }
                  >
                    {item.key}
                  </button>
                ))}
              </div>
              <div className={styles.orderItems}>
                {items.map((item, i) => {
                  return (
                    <div className={styles.orderItemsWrapper} key={i}>
                      <div
                        className={styles.orderItemsInfo}
                        id={item.key.toLocaleLowerCase().split(' ').join('_')}
                      >
                        <h2>{item.key}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className={styles.orderItemsList}>
                        {item.values.map((value: Item, itemId) => (
                          <OrderItem key={i + '_' + itemId} value={value} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.orderInfo}>
                <h2>Min bestilling</h2>
                <p>0 varer</p>
                <div className={styles.orderInfoItems}>
                  <div className={styles.orderInfoItem}>
                    <p>&quot;Currently in maintenance&quot;</p>
                    <p>
                      <i>Ute av drift</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Order;
