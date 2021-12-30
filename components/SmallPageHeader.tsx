import { FC } from 'react';
import styles from '../styles/SmallPageHeader.module.scss';

const SmallPageHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title} data-aos="fade-in" data-aos-delay="120">
        {title}
      </h1>
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
  );
};
export default SmallPageHeader;
