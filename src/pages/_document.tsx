import { Html, Head, Main, NextScript } from 'next/document'

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

export default function Document() {

  const isProd = process.env.NODE_ENV === "production";

  return (
    <Html lang='en'>
      <Head>
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





