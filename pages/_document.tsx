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
          {/* <!-- SEO / Google --> */}
          <meta name="author" content="bobajoy" />
          <meta
            name="description"
            content="Boba Joy bubble tea is the new shop coming to Trondheim in 2022. We serve bubble tea, fresh iced tea, smoothies, slushes, hot drinks for winter, and all kinds of goods as small Asian shops. We hope to be the best place where you can enjoy a fresh tea and be in the Asian word with all kinds of snacks, noodles. If you have never had bubble tea, come try it at Boba Joy bubble tea & more in town. The drink combinations are endless and it is an awesome experience that everyone can enjoy!"
          />

          {/* <!-- Social: Facebook / Open Graph --> */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Boba Joy Trondheim" />
          <meta
            property="og:image"
            content="https://www.bobajoy.no/_next/image?url=%2Fimages%2Fplaceholder.png&w=828&q=75"
          />
          <meta
            property="og:description"
            content="Boba Joy bubble tea is the new shop coming to Trondheim in 2022. We serve bubble tea, fresh iced tea, smoothies, slushes, hot drinks for winter, and all kinds of goods as small Asian shops. We hope to be the best place where you can enjoy a fresh tea and be in the Asian word with all kinds of snacks, noodles. If you have never had bubble tea, come try it at Boba Joy bubble tea & more in town. The drink combinations are endless and it is an awesome experience that everyone can enjoy!"
          />
          <meta property="og:site_name" content="Boba Joy Trondheim" />
          <meta
            property="article:author"
            content="https://www.facebook.com/Boba-Joy-Trondheim-105264278675064"
          />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/Boba-Joy-Trondheim-105264278675064"
          />

          {/* <!-- Social: Google+ / Schema.org  --> */}
          <meta itemProp="name" content="Boba Joy Trondheim" />
          <meta
            itemProp="description"
            content="Boba Joy bubble tea is the new shop coming to Trondheim in 2022. We serve bubble tea, fresh iced tea, smoothies, slushes, hot drinks for winter, and all kinds of goods as small Asian shops. We hope to be the best place where you can enjoy a fresh tea and be in the Asian word with all kinds of snacks, noodles. If you have never had bubble tea, come try it at Boba Joy bubble tea & more in town. The drink combinations are endless and it is an awesome experience that everyone can enjoy!"
          />
          <meta
            itemProp="image"
            content="https://www.bobajoy.no/_next/image?url=%2Fimages%2Fplaceholder.png&w=828&q=75"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Coiny&family=Fuzzy+Bubbles:wght@400;700&family=Pacifico&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://www.schema.org',
                '@type': 'CafeOrCoffeeShop',
                name: 'Boba Joy Trondheim',
                url: 'http://bobajoy.no',
                sameAs: [
                  'https://www.instagram.com/bobajoy.no/',
                  'https://www.facebook.com/Boba-Joy-Trondheim-105264278675064',
                ],
                logo: 'https://www.bobajoy.no/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83073a31.png&w=256&q=75',
                priceRange: '$',
                image:
                  'https://www.bobajoy.no/_next/image?url=%2Fimages%2Fplaceholder.png&w=828&q=75',
                description:
                  'Boba Joy bubble tea is the new shop coming to Trondheim in 2022. We serve bubble tea, fresh iced tea, smoothies, slushes, hot drinks for winter, and all kinds of goods as small Asian shops. We hope to be the best place where you can enjoy a fresh tea and be in the Asian word with all kinds of snacks, noodles. If you have never had bubble tea, come try it at Boba Joy bubble tea & more in town. The drink combinations are endless and it is an awesome experience that everyone can enjoy!',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Olav Tryggvasons gt. 1',
                  addressLocality: 'Trondheim',
                  addressRegion: 'Trøndelag',
                  postalCode: '7011',
                  addressCountry: 'Norway',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: '63.4330183',
                  longitude: '10.4032403',
                },
                hasMap:
                  'https://www.google.com/maps/place/Boba+Joy+Trondheim/@63.4330183,10.4032403,15z/data=!4m5!3m4!1s0x0:0xedcafdf0d7714c85!8m2!3d63.4330183!4d10.4032403',
                openingHours:
                  'Mo 01:00-01:00 Tu 11:00-20:00 We 11:00-20:00 Th 11:00-20:00 Fr 11:00-20:00 Sa 11:00-20:00 Su 11:00-20:00',
                telephone: '45380678',
              }),
            }}
          />
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
