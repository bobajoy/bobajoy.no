'use client';

import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: -100,
      delay: 300,
      once: true,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
