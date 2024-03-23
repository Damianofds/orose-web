import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter();
  
  const isProd = process.env.NODE_ENV === "production";

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      if (isProd) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
          page_path: url,
        });
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  
  return <ParallaxProvider><Component {...pageProps} /></ParallaxProvider>
}  
