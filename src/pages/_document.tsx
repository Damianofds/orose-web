import { Html, Head, Main, NextScript } from 'next/document'

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

export default function Document() {

  const isProd = process.env.NODE_ENV === "production";

  return (
    <Html lang='en'>
      <Head>

        <title>Oros&#232; ✨ Phygital Jewelry</title>
        <meta name="description" content="Orosé ✨ Phygital Jewelry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />

        <meta property="og:url" content="https://orose.gold" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Orosè ✨ Phygital Jewelry" />
        <meta property="og:description" content="Orosé - Trade your jewels, wear your NFTs!" />
        <meta property="og:image" content="/orose-logo-square.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="orose.gold" />
        <meta property="twitter:url" content="https://orose.gold" />
        <meta name="twitter:title" content="Orosè ✨ Phygital Jewelry" />
        <meta name="twitter:description" content="Orosé - Trade your jewels, wear your NFTs!" />
        <meta name="twitter:image" content="/orose-logo-square.png"/>

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&family=Dosis:wght@200&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Notable&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ultra&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Belanosima:wght@700&family=Cormorant+Garamond:ital,wght@1,600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Belanosima:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

        {isProd && (
        <>
          <script async src={gtag} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname
                });
              `,
            }}
          />
          </>
      )}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}





