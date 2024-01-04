import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Footer from '../components/footer'
import Topmenu from '../components/topmenu'
import Image from 'next/image'



export function OroseLogo() {
  return (
    <>
      <br />
      <Image alt="" src="/orose-logo.png" style={{ width: '60vw', maxWidth: '400px' }} loading="lazy" />
    </>
  )
}

export function OroseVisual() {
  return (
    <>
      <br />
      <Image alt="" src="/orose-visual-22.gif" style={{ width: '80vw', maxWidth: '400px' }} loading="lazy" />
      {/* <Image alt="" src="/orose-visual-22.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/>
      <Image alt="" src="/orose-liscio-visual-22.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/>
      <Image alt="" src="/orose-liscio-visual-18.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/> */}
    </>
  )
}

export function ReadMore() {
  return (
    <>
      <br />
      <p>let&apos;s go</p>
      <p>👇</p>
    </>
  )
}

const ChainLisa = () => {
  return (<>
    {/* <Parallax translateX={['00px', '-200px']} opacity={[0, 1]}>
      <div className='chain-lisa' />
    </Parallax> */}
    <Parallax translateX={['-200px', '00px']} >
      <Image alt="" src="/chain-lisa.png" className='chain-lisa' />
    </Parallax>
    <Parallax translateX={['0px', '-200px']} >
      <Image alt="" src="/chain-lisa.png" className='chain-lisa' />
    </Parallax>
    <Parallax translateX={['-200px', '00px']} >
      <Image alt="" src="/chain-lisa.png" className='chain-lisa' />
    </Parallax>
    <Parallax translateX={['0px', '-200px']} > {/* opacity={[0, 1]} */}
      <Image alt="" src="/chain-lisa.png" className='chain-lisa' />
    </Parallax>
  </>
  );
};



const topMenuStyles = {
  menu: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  menuItem: {
    margin: '0 1rem',
    cursor: 'pointer',
  },
};


export function OroseClaim() {
  return (
    <div style={{ margin: 'auto 0', fontSize: 'clamp(16px, 8vw, 42px)' }}>
      <br />
      <p>
        <span>
          {/* <Typewriter
            words={['Trade your jewels ✨']}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> */}
          Trade your jewels ✨
        </span>
      </p>
      <p>
        wear your {' '}
        <span style={{ color: 'black' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['NFTs', 'digital jewels', 'tokens', 'ETH']}
            loop={-1}
            // cursor
            // cursorStyle='✨'
            // cursorBlinking={false}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
        </span>
      </p >
    </div>
  )
}

interface OroseCTAButtonProps {
  label: string;
  onClick: () => void;
}

const OroseCTAButton: React.FC<OroseCTAButtonProps> = ({ label }) => {

  const handleButtonSubmit = () => {
    const anchor = document.getElementById(label);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <button
      // className={styles.button}
      onClick={handleButtonSubmit}
    >
      {label.replace("_", " ")}
    </button>
  );
}

interface PhyGitalMainImageProps {
  imageUrl: string;
  fadeDuration: number;
}

const PhyGitalMainImage: React.FC<PhyGitalMainImageProps> = ({ imageUrl, fadeDuration }) => {
  const [opacity, setOpacity] = useState<number>(1);
  useEffect(() => {
    let animationFrameId: number;
    var startTime = performance.now();
    const animate = (timestamp: number) => {
      const progress = (timestamp - startTime) / (fadeDuration * 1000);
      if (progress >= 0.5) {
        startTime = performance.now();
        setOpacity(1);
      }
      setOpacity(1 - progress);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [fadeDuration]);

  return (
    <div style={{
      position: 'relative',
      height: '210px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Image
        src={imageUrl}
        alt="phygital"
        style={{
          opacity,
          width: '200vw',
          maxWidth: '800px',
          position: 'absolute',
          display: 'block',
          margin: '0 auto',
          zIndex: '1000',
          left: '0px',

        }}
      />
    </div>
  );
};

interface OroseMintGameProps {
  imageUrls: string[];
}

const OroseMintGame: React.FC<OroseMintGameProps> = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 500);
    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  const handleMintClick = () => {
    console.log(`Minting NFT for image ${currentImageIndex + 1}`);
  };

  return (
    <div>
      <div onClick={handleMintClick}>
        <Image alt="" className={styles.mintGameButton} src={imageUrls[currentImageIndex]} style={{
          maxWidth: "250px", cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', transition: 'all 0.2s ease-in-out'
        }} />
      </div>
      {/* <p style={{ fontSize: "5vw", color: "black" }} >Mint jewel {currentImageIndex}</p> */}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Oros&#232; ✨ Trade your jewels, wear your NFTs!</title>
        <meta name="description" content="Orosé - Trade your jewels, wear your NFTs!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <div data-bueno-mint="9YGCgZVDVQE6SzcGO9VSE"></div>
      <main className={styles.main} style={{ backgroundColor: '' }}>
        <div className='centerContentViewport' style={{ backgroundColor: '' }}>
          <Topmenu />
          <OroseLogo />
          <OroseClaim />
          <OroseVisual />
          <ReadMore />
        </div>
        <div className='centerContentViewport'>
          <Parallax speed={0} style={{ zIndex: '100' }}>
            <Parallax scale={[0.15, 1.5]}>
              <h1>a</h1>
            </Parallax>
            <Parallax scale={[0.15, 1.5]}>
              <h1>a phygital</h1>
            </Parallax>
            <Parallax scale={[0.15, 1.5]}>
              <h1>jewelry</h1>
            </Parallax>
            <Parallax scale={[0.15, 1.5]}>
              <h1>journey</h1>
            </Parallax>
            <ChainLisa />
          </Parallax>

          {/* <Parallax opacity={[0, 1]} scale={[0.15, 1.5]} easing={'easeOutQuad'}>
            <div style={{position:'absolute', 
              width:'100vw',
              height:'100vh',
              backgroundColor:'black '}}>
            </div>
          </Parallax> */}
        </div>
        <div
          className='centerContentViewport'
          style={{
            backgroundColor: 'black ',
            position: 'relative',
            backgroundImage: 'repeating-radial-gradient(circle at 0 0,#000000,#000000 10px,#0c140e 10px,#0c140e 11px)',
          }}
        >
          <div style={{ position: 'relative' }}>
            <Parallax style={{
              position: 'absolute',
              top: '0px'
            }} scale={[0.1, 1.3]}>
              <h1 style={{ color: 'white' }} >from digital hearth</h1>
            </Parallax>
            <Parallax scale={[0.3, 0.65]} rotate={[-900, 0]}>
              <Image alt="" src='/gital.png' />
            </Parallax>
          </div>
        </div>
        {/* <div className='centerContentViewport' style={{
            backgroundColor:'black ',
            position: 'relative',
            backgroundImage: 'repeating-radial-gradient(circle at 0 0,#000000,#000000 10px,#0c140e 10px,#0c140e 11px)',
          }}>
        </div> */}
        {/* <Parallax opacity={[1, 0]} scale={[1.5, 0.15]}  easing={'easeOutQuad'}>
            <div style={{position:'absolute', width:'100vw', height:'100vh', backgroundColor:'black '}}></div>
        </Parallax> */}
        <div
          className='centerContentViewport'
          style={{
            position: 'relative',
          }}
        >
          <div style={{ position: 'relative' }}>
            <Parallax style={{ position: 'absolute', top: '0px' }} speed={0} scale={[0.6, 1.2]} >
              <h1>to physical craft</h1>
            </Parallax>
            <Parallax scale={[0.1, 0.65]} rotate={[900, 0]}>
              <Image alt="" src='/phy.png' />
            </Parallax>
          </div>
        </div>
        <div className='centerContentViewport'>
          <Parallax speed={0} scale={[0.6, 1.2]}>
            <h2>Decentralized ownership</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ flex: '0 0 10%' }} ><Image alt="" style={{ maxWidth: '100%', height: 'auto' }} src='/opensea-logo.png' /></div>
              <div style={{ flex: '0 0 15%' }} ><Image alt="" style={{ maxWidth: '100%', height: 'auto' }} src='/metamask_logo.svg' /></div>
              <div style={{ flex: '0 0 10%' }} ><Image alt="" style={{ maxWidth: '100%', height: 'auto' }} src='/blur-logo.jpg' /></div>
            </div>
          </Parallax>
        </div>
        <div className='centerContentViewport'>
          <Parallax speed={0} scale={[0.15, 1.2]} style={{ zIndex: '100' }}>
            <h2>Gold only</h2>
            <p>18 & 22 karat alloys only</p>
          </Parallax>
        </div>
        <div className='centerContentViewport'>
          <Parallax speed={0} scale={[0.15, 1.2]} style={{ zIndex: '100' }}>
            <h1>Try it on!</h1>
            <p style={{ color: 'gold' }}>⌛AR demo coming soon...</p>
          </Parallax>
        </div>
        <div className='centerContentViewport'>
          <Parallax speed={0} scale={[0.15, 1.5]} style={{ zIndex: '100' }}>
            <h1>Jump onboard!</h1>
          </Parallax>
          <ChainLisa />
        </div>
        <div className='centerContentViewport' style={{ backgroundColor: '' }}>
          <Parallax speed={-15} scale={[0.2, 0.8]} style={{
            position: 'absolute', zIndex: '100', minWidth: '375px', width: '80vw'
          }}
          >
            <h1 style={{ color: 'white' }} >
              Mint your digital token
            </h1>
          </Parallax>
          <Parallax speed={0} scale={[0.2, 0.9]}>
            <Image alt="" style={{ height: '100vh' }} src="/pics/photo/smart_looking_girl_minting.png" />
          </Parallax>
        </div>
        <div className='centerContentViewport' style={{ backgroundColor: '' }}>
          <Parallax speed={-15} scale={[0.2, 0.8]} style={{
            position: 'absolute', zIndex: '100', minWidth: '375px', width: '80vw'
          }}
          >
            <h1 style={{ color: 'white' }} >
              Trade it at any time
            </h1>
          </Parallax>
          <Parallax speed={0} scale={[0.2, 0.9]}>
            <Image alt="" style={{ height: '100vh' }} src="/pics/photo/smart_looking_girl_trading.png" />
          </Parallax>
        </div>
        <div className='centerContentViewport' style={{ backgroundColor: '' }}>
          <Parallax speed={-15} scale={[0.2, 0.8]} style={{
            position: 'absolute', zIndex: '100', minWidth: '375px', width: '80vw'
          }}
          >
            <h1 style={{ color: 'white' }} >
              Wear it when you want!
            </h1>
          </Parallax>
          <Parallax speed={0} scale={[0.2, 0.9]}>
            <Image alt="" style={{ height: '100vh' }} src="/pics/photo/smart_looking_girl_wearing.png" />
          </Parallax>
        </div>
        {/* <Parallax translateX={['00px', '-200px']}>
          <Image alt="" src="/chain-lisa.png" className='chain-lisa' loading="lazy" />
        </Parallax> */}
        {/* <div className='centerContentViewport' style={{backgroundImage: "radial-gradient(#ccb400, #c27a74 65%)" }}>
          <h1 className='text-overlay'>Mint yours!</h1>
          <OroseMintGame imageUrls={["/orose_000-3D_11.png", "/orose_000-3D_1.png", "/orose_000-3D_2.png", "/orose_000-3D_4.png", "orose_000-3D_7.png"]} />
        </div> */}
        <div className='centerContentViewport'>

        </div>
        <div className='centerContentViewport'>
          <br /><br /><br /><br /><br />
          <h1>
            Mint soon
          </h1>
          <p>
            Get notified
          </p>

          No mailing list - just 1 single email

        </div>
        <div className='centerContentViewport'>
          <Footer />

        </div>
      </main>
    </>
  )
}
