import { FC } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/Order.module.scss';
import { items } from '../utilities/items';

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
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | bestill</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Bestill</h1>
          <svg
            viewBox="0 0 1440 161"
            className={styles.headerWave}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              d="M1359.6 17.4496L1440 26.2915V161H0V43.9754L80.3999 55.7646C159.6 67.5538 320.4 91.1323 480 79.3431C639.6 67.5539 800.4 20.3969 960 5.66039C1119.6 -9.07616 1280.4 8.6077 1359.6 17.4496Z"
              fill="#F2F3DA"
            />
            <path
              d="M1440 44.7354L1359.6 35.8935C1280.4 27.0515 1119.6 9.36769 960 24.1042C800.4 38.8408 639.6 85.9977 480 97.7869C320.4 109.576 159.6 85.9977 80.3999 74.2085L0 62.4192"
              stroke="#BDCA4D"
              strokeWidth="8"
              strokeLinecap="square"
            />
            <path
              d="M1440 66.2915L1359.6 57.4496C1280.4 48.6077 1119.6 30.9238 960 45.6604C800.4 60.3969 639.6 107.554 480 119.343C320.4 131.132 159.6 107.554 80.3999 95.7646L0 83.9754"
              stroke="#BDCA4D"
              strokeWidth="8"
              strokeLinecap="square"
            />
          </svg>
        </header>
        <div className={styles.section}>
          <div className={styles.orderWrapper}>
            <h1 className={styles.title}>Bestillingsskjema</h1>
            <div className={styles.orderDisplay}>
              <div className={styles.orderNav}>
                {Object.keys(items).map((key) => (
                  <button key={key}>{key}</button>
                ))}
              </div>
              <div className={styles.orderItems}>
                {Object.keys(items).map((key, i) => {
                  return (
                    <div className={styles.orderItemsWrapper} key={i}>
                      <div className={styles.orderItemsInfo}>
                        <h2>{key}</h2>
                        <p>{items[key].description}</p>
                      </div>
                      <div className={styles.orderItemsList}>
                        {items[key].values.map((value: Item, itemId) => (
                          <OrderItem key={i + '_' + itemId} value={value} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.orderInfo}>
                <h2>Min bestilling</h2>
                <p>2 varer</p>
                <div className={styles.orderInfoItems}>
                  <div className={styles.orderInfoItem}>
                    <p>1- Plain Milk Tea - Black (Medium size)</p>
                    <p>60kr</p>
                  </div>
                  <div className={styles.orderInfoItem}>
                    <p>1- Plain Milk Tea - Black (Large size)</p>
                    <p>60kr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.mapWave}`}>
          <svg
            viewBox="0 0 1440 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1440 63.7961L1359.49 73.8216C1280.18 83.8471 1119.15 103.898 959.333 87.1889C799.512 70.4798 638.488 17.0105 478.667 3.64316C318.845 -9.72416 157.822 17.0105 78.5116 30.3778L-2 43.7451V144H78.5116C157.822 144 318.845 144 478.667 144C638.488 144 799.512 144 959.333 144C1119.15 144 1280.18 144 1359.49 144H1440V63.7961Z"
              fill="#F4EEA9"
            />
          </svg>
        </div>
        <div className={`${styles.section} ${styles.map}`}>
          <div className={styles.googleMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1597.7801014434394!2d10.401946419628542!3d63.43326460267982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e5a4c52f02ce11e!2sHeimdal%20Gull!5e0!3m2!1sen!2sno!4v1639949216519!5m2!1sen!2sno"
              frameBorder="0"
              width="100%"
              height="450"
              allowFullScreen={false}
              aria-hidden="false"
              title="Google Maps"
              tabIndex={0}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Order;
