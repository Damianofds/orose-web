import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons'
import { Parallax } from 'react-scroll-parallax';
import { relative } from 'path';


export function OroseLogo() {
  return (
    <>
      <br />
      <img src="/orose-logo.png" style={{ width: '60vw', maxWidth: '400px' }} loading="lazy" />
    </>
  )
}

export function OroseVisual() {
  return (
    <>
      <br />
      <img src="/orose-visual-22.gif" style={{ width: '80vw', maxWidth: '400px' }} loading="lazy" />
      {/* <img src="/orose-visual-22.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/>
      <img src="/orose-liscio-visual-22.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/>
      <img src="/orose-liscio-visual-18.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/> */}
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

const TopMenu = () => {
  return (
    <nav >
      <ul style={topMenuStyles.menuList}>
        {/* <li style={topMenuStyles.menuItem}><a href='/jewel-list'>My tokens</a></li> */}
      </ul>
    </nav>
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
    <div style={{margin: 'auto 0',  fontSize: 'clamp(16px, 8vw, 42px)'}}>
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
      height:'210px',
      display: 'flex',
      justifyContent: 'center'
    }}>
    <img
      src={imageUrl}
      alt="phygital"
      style={{ 
        opacity,
        width: '200vw',
        maxWidth: '800px',
        position: 'absolute',
        display:'block',
        margin: '0 auto',
        zIndex: '1000',
        left:'0px',
        
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
        <img className={styles.mintGameButton} src={imageUrls[currentImageIndex]} style={{
          maxWidth: "250px", cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', transition: 'all 0.2s ease-in-out'
        }} alt="NFT Image" />
      </div>
      {/* <p style={{ fontSize: "5vw", color: "black" }} >Mint jewel {currentImageIndex}</p> */}
    </div>
  );
};

export  default function Home() {
  return (
    <>
      <Head>
        <title>Oros&#232; ✨ Trade your jewels, wear your NFTs!</title>
        <meta name="description" content="Orosé - Trade your jewels, wear your NFTs!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <div data-bueno-mint="9YGCgZVDVQE6SzcGO9VSE"></div>
      <main className={styles.main} style={{backgroundColor:''}}>
        <div className='centerContentViewport' style={{backgroundColor:''} }>
          {/* <TopMenu /> */}
          <OroseLogo />
          <OroseClaim />
          <OroseVisual />
          <ReadMore />
        </div>
        <div className='centerContentViewport'>  
            <Parallax speed={30} scale={[0.15, 1.5]} style={{ zIndex:'100'}}>
              <h1 className="text-overlay">phygital jewelry</h1>
            </Parallax>
            <Parallax translateX={['00px', '-200px']} opacity={[0, 1]}>
              <img src="/chain-lisa.png" className='chain-lisa' />
            </Parallax>
            <Parallax translateX={['-200px', '00px']} opacity={[0, 1]}>
                <img src="/chain-lisa.png" className='chain-lisa' />
            </Parallax>
            <Parallax translateX={['00px', '-200px']} opacity={[0, 1]}>
                <img src="/chain-lisa.png" className='chain-lisa' />
            </Parallax>
            <Parallax translateX={['-200px', '00px']} opacity={[0, 1]}>
                <img src="/chain-lisa.png" className='chain-lisa' />
            </Parallax>
        </div>
        <div className='centerContentViewport'>  
          <Parallax opacity={[0, 1]} scale={[0.15, 1.5]} easing={'easeOutQuad'}>
            <div style={{position:'absolute', width:'100vw', height:'100vh', backgroundColor:'black '}}></div>
          </Parallax>
        </div>
        <div
          className='centerContentViewport'
          style={{
            backgroundColor:'black ',
            position: 'relative',
            // backgroundImage: 'radial-gradient(circle at top right, #b97a73, black 20%)',
          }}
          >  
          <Parallax speed={30} scale={[0.15, 1.5]} style={{
              position:'absolute', left: '20%', bottom: '60vh', margin: '0 auto', zIndex:'100'
            }}
          >
            <h1 style={{color: 'white'}} className='text-overlay'>Digital heart</h1>
          </Parallax>
          <Parallax 
            // translateX={['-400px', '0px']}
            scale={[0.2, 1.2]}
            rotate={[360, 0]}
            // easing="easeInQuad"
            >
            <img src='/gital.png' />
          </Parallax>
        </div>
        <div className='centerContentViewport'>  
          <Parallax opacity={[1, 0]} scale={[1.5, 0.15]}  easing={'easeOutQuad'}>
            <div style={{position:'absolute', width:'100vw', height:'100vh', backgroundColor:'black '}}></div>
          </Parallax>
        </div>
        <div style={{backgroundColor:''}} className='centerContentViewport'>  
          <Parallax speed={30} scale={[0.15, 1.5]} style={{
               position:'absolute', left: '20%', margin: '0 auto', zIndex:'100'
            }}
          >
            <h1 style={{color: ''}} className='text-overlay'>Physical craft</h1>
          </Parallax>
          <Parallax 
              // translateX={['-400px', '0px']}
              scale={[0.2, 1.2]}
              rotate={[360, 0]}
              // easing="easeInQuad"
              >
              <img src='/phy.png' />
          </Parallax>
        </div>
        <div className='centerContentViewport'style={{backgroundColor:''}}>
          <Parallax speed={30} scale={[0.15, 1.5]} style={{
                position:'absolute', left: '20%', margin: '0 auto', zIndex:'100'
              }}
            >
            <h1 style={{color: 'white'}} className='text-overlay'>
              Mint it as a digital token
            </h1>
          </Parallax>
          <Parallax translateX={['-200px', '300px']}>
              <img style={{height:'100vh'}} src="/pics/photo/smart_looking_girl_minting.png" />
          </Parallax>
        </div>
        <div className='centerContentViewport'style={{backgroundColor:''}}>
          <Parallax speed={30} scale={[0.15, 1.5]} style={{
                  position:'absolute', left: '20%', margin: '0 auto', zIndex:'100'
                }}
              >
            <h1 style={{color: 'white'}} className='text-overlay'>
              Trade it at any time
            </h1>
          </Parallax>
          <Parallax translateX={['0px', '-300px']}>
            <img style={{height:'100vh'}} src="/pics/photo/smart_looking_girl_trading.png" />
          </Parallax>
        </div>
        <div className='centerContentViewport'style={{backgroundColor:''}}>
          <Parallax speed={30} scale={[0.15, 1.5]} style={{
                  position:'absolute', left: '20%', margin: '0 auto', zIndex:'100'
                }}
              >
            <h1 style={{color: 'white'}} className='text-overlay'>
              Wear it when you want!
            </h1>
          </Parallax>
          <Parallax translateX={['-200px', '300px']}>
            <img style={{height:'100vh'}} src="/pics/photo/smart_looking_girl_wearing.png" />
          </Parallax>
        </div>
        {/* <div className='centerContentViewport' style={{backgroundImage: "repeating-radial-gradient(#c27a74, #ccb400 20%, #c27a74 10%);" }}> */}
        {/* <div className='centerContentViewport' style={{backgroundImage: "linear-gradient(#c27a74, #ccb400 50%, #c27a74);" }}> */}
        {/* <Parallax translateX={['00px', '-200px']}>
          <img src="/chain-lisa.png" className='chain-lisa' loading="lazy" />
        </Parallax> */}
        <div className='centerContentViewport' style={{backgroundImage: "radial-gradient(#ccb400, #c27a74 65%)" }}>
          <h1 className='text-overlay'>Mint yours!</h1>
          <OroseMintGame imageUrls={["/orose_000-3D_11.png", "/orose_000-3D_1.png", "/orose_000-3D_2.png", "/orose_000-3D_4.png", "orose_000-3D_7.png"]} />
        </div>
        <div className='centerContentViewport'>
          <h1>
            Let&apos;s connect!
          </h1>
          <SocialIcon url="https://www.x.com/fds_web" bgColor="#000000" />
          <p>
            fds_web
          </p>
        </div>
      </main>
    </>
  )
}
