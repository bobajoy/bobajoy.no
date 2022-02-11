import { FC } from 'react';
import styles from '../styles/Map.module.scss';

const GoogleMap: FC = () => {
  return (
    <div className={styles.googleMap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3369.191847812026!2d10.400158991407203!3d63.43277965734928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xedcafdf0d7714c85!2sBoba%20Joy%20Trondheim!5e0!3m2!1sen!2sno!4v1644602542275!5m2!1sen!2sno"
        frameBorder="0"
        width="100%"
        height="450"
        allowFullScreen={false}
        aria-hidden="false"
        title="Bobajoy Google Maps"
        tabIndex={0}
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default GoogleMap;
