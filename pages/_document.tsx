import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from 'next/document';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="no">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Coiny&family=Fuzzy+Bubbles:wght@400;700&family=Pacifico&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.ico" />
          <noscript>
            {/*
              Here we ignore the following recommendation to solve possible SSR problems with noscript browsers/visitors
              https://nextjs.org/docs/messages/no-css-tags
            */}
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link href="./styles/aos-noscript.css" rel="stylesheet" />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
