import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import logo from '../public/images/logo.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';
import Posts from '../components/Posts';

const Home: NextPage = () => {
  const images = [
    // '/images/placeholder.png',
    'https://lh3.googleusercontent.com/p/AF1QipPHoWh5tI1dPtjueBNytk9QnM3o6dqPx06HJm3U=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPcvrjpKQeA7WNTTvn81SxZwoTBWmZb7F8AHmN_=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPkpfSY__hBINNv9YBrgltvFQtVSEaOuxXjQO0B=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipO98oeZ2beX_xl6yvwPgfKxKfAh443-QLyHbBel=s1360-w1360-h1020-rw',
    'https://lh3.googleusercontent.com/p/AF1QipOGV4qkle3HxApN8RVNmAAChqtbGIQdzDhRxaU0=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipMSYh_QFbAS803Qlp1cbxp2-Ps_CHxL7xNUGzyI=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNpMRPey73uRcDYp0NfjrzeDsPWS--gUb50TQX5=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNCDNEhUhe8DLvK0Bnkfq7Twomuu4Y2Fac9gu6U=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipN4gH1uYiuyGuOrZQ-TgCSUiIBVtY_8HyhHpXdT=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipOrB1FaSKe4LPD2We0EtVz5N5--qQES8HemvlXW=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipOENb3dtvWYkU7r-J41iUdtVdO7SrjU2InFymY5=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPRSvJrnhSbNvsKoRkQd7Q6-kGBPGWTqtXByUpj=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipOf-nUtUhnzgsyiFQuQRiodRmAe5guIBQUFpkRJ=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPBTWNH4SLIWlghp-iZBmGhW0nJd0lgBeQkZ2yk=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipPTVHGCzI66w0ZWvBzVfdNXSeYAUrbfSsQX6vNP=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNvkHyEojMKnPErJXyyO4RiHuuev7NdryoimIhp=s1360-w1360-h1020-rw',
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | Hjem</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroWrapper}>
            <div className={styles.titleWrapper}>
              <Image
                src="/images/bear_logo.svg"
                alt="BobaJoy polarbear logo"
                priority
                width={100}
                height={256}
                data-aos="fade-in"
                data-aos-delay="200"
              />
              <Image
                src={logo}
                alt="BobaJoy text logo"
                width={300}
                height={28}
                data-aos="fade-in"
                data-aos-delay="240"
              />
              <h2 data-aos="fade-in" data-aos-delay="240">
                Bubble tea & more
              </h2>
            </div>
            <div
              className={styles.buttonWrapper}
              data-aos="fade-in"
              data-aos-delay="280"
            >
              <Link href="https://bobajoy.winorder.no/" className="btn">
                Se menyen nå
              </Link>
            </div>
          </div>
          <svg
            viewBox="0 0 1440 161"
            className={styles.heroWave}
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
        </div>
        <div
          className={`${styles.section} ${styles.gridWrapper}`}
          data-aos="fade-up"
        >
          <div className={styles.grid}>
            <div className={styles.welcomeText}>
              <div>
                <h2>Vi ønsker deg velkommen til Bobajoy</h2>
                <p>
                  Vi er en ny butikk som kom til Trondheim i starten av 2022. Vi
                  selger bubble tea, fresh iced tea, smoothies, slushes, varme
                  drikker for vinteren, og all slags type asiatiske godsaker. Vi
                  ønsker å bli et komfortabelt og trygt sted for deg...
                </p>
              </div>
              <div className={styles.buttonWrapper}>
                <Link href="/about" className="btn">
                  Les mer om oss
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.mapIconBg}></div>
              <h2>Her finner du oss</h2>
              <p>Olav Tryggvason gt. 1, 7011 Trondheim</p>
            </div>
            <div className={styles.hashtagText}>
              <div className={styles.hashtagIconBg}></div>
              <h2>Del dine bobler sammen med oss!</h2>
              <p>#bobajoyno</p>
              <p>#bobajoy.no</p>
              <p>#bobajoytrondheim</p>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.selectionWrapper}`}>
          <h1 className={styles.title}>
            📸 Tag oss + Følg oss og bli med i trekningen
          </h1>
          <Posts />
        </div>
        <div
          className={`${styles.section} ${styles.menuWrapper}`}
          data-aos="zoom-in-up"
        >
          <div>
            <h1 className={styles.title}>Vår meny!</h1>
            <div className={styles.buttonWrapper}>
              <Link href="https://bobajoy.winorder.no/" className="btn">
                Se hele menyen her!
              </Link>
            </div>
            <div className={styles.bubbles}>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.galleryWrapper}`}>
          <h1 className={styles.title}>Følg oss på instagram!</h1>
          <div className={styles.gallery}>
            {images.map((imgSrc: string, i: number) => {
              return (
                <div className={styles.image} key={i}>
                  <a href="https://www.instagram.com/bobajoy.no/">
                    <Image
                      src={imgSrc}
                      alt="A placeholder for images"
                      width={320}
                      height={320}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <svg
            className={styles.galleryTitleWave}
            viewBox="0 0 1440 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-2 80.2039L78.5117 70.1784C157.822 60.1529 318.845 40.102 478.667 56.8111C638.488 73.5202 799.512 126.99 959.333 140.357C1119.16 153.724 1280.18 126.99 1359.49 113.622L1440 100.255V0H1359.49C1280.18 0 1119.16 0 959.333 0C799.512 0 638.488 0 478.667 0C318.845 0 157.822 0 78.5117 0H-2V80.2039Z"
              fill="#F4EEA9"
            />
          </svg>
          <svg
            className={styles.galleryWave}
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
          <GoogleMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
