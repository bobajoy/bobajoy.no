import { FC } from 'react';
import styles from '../styles/Map.module.scss';
import GoogleMap from './GoogleMap';

const Map: FC = () => {
  return (
    <>
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
        <GoogleMap />
      </div>
    </>
  );
};
export default Map;
