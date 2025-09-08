import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <Html lang="ru">
      <Head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLZBTPDJ');
          `}
        </Script>
        <link rel="preload" href="/styles/fonts.css" as="style" />
        <link rel="stylesheet" href="/styles/fonts.css" />
        {isProduction && (
          <>
            <meta name="yandex-verification" content="8a71da99f472c773" />
          </>
        )}

        {isProduction && (
          <>
            <meta
              name="google-site-verification"
              content="pixrXY-F4P5rROIojTM8avOQJLwfkHRsjbBG827jdSo"
            />
          </>
        )}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
