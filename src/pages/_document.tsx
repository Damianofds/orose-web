import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
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

        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,900;1,800&family=DM+Serif+Text&family=Italiana&family=Ovo&family=Playfair+Display:ital,wght@1,900&family=Rozha+One&family=Stoke&display=swap" rel="stylesheet" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
