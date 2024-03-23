import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Footer from '../components/footer'
import Topmenu from '../components/topmenu'
import Image from 'next/image'
import oroseLogo from '../../public/orose-logo.png'
import chainLisa from '../../public/chain-lisa-xs.png'
import gital from '../../public/gital.png'
import phy from '../../public/phy.png'
import metamaskLogo from '../../public/metamask_logo.svg'
import ethereumLogo from '../../public/ethereum-logo.png'
import arbitrumLogo from '../../public/arbitrium-logo.png'
import smartLookingGirlMinting from '../../public/pics/photo/2-cool-minting.webp'
import smartLookingGirlTrading from '../../public/pics/photo/2-cool-trading.webp'
import smartLookingGirlWearing from '../../public/pics/photo/2-cool-wearing.webp'
import discordName from '../../public/discord-name.png'
import Swirl from "../components/swirl"
import oroseSnapcode from "../../public/orose-snapcode.png"


export function OroseLogo() {
  return (
    <>
      <br />
      <Image className="fade-in-container" alt="" src={oroseLogo} loading="eager" style={{ width: '60vw', maxWidth: '400px', height: 'auto' }} />
    </>
  )
}

export function OroseVisual() {
  return (
    // <>
    //   <br />
    //   <Image className="fade-in-container" alt="" src={oroseVisual22} style={{ width: '80vw', maxWidth: '400px', height: 'auto' }} />
    // </>
    <video autoPlay loop muted playsInline style={{ width: '80vw', maxWidth: '400px' }}>
      <source src={'orose-visual-18.webm'} type="video/webm" />
    </video>
  )
}

export function ReadMore() {
  return (
    <div className="fade-in-container-slow">
      <br />
      <p className="typography-body">let&apos;s go</p>
      <p>👇</p>
    </div>
  )
}

const ChainLisa = () => {
  return (<>
    {/* <Parallax translateX={['00px', '-200px']} opacity={[0, 1]}>
      <div className='chain-lisa' />
    </Parallax> */}
    <Parallax translateX={['-200px', '00px']} >
      <Image alt="" src={chainLisa} className='chain-lisa' />
    </Parallax>
    <Parallax translateX={['0px', '-200px']} >
      <Image alt="" src={chainLisa} className='chain-lisa' />
    </Parallax>
    <Parallax translateX={['-200px', '00px']} >
      <Image alt="" src={chainLisa} className='chain-lisa' />
    </Parallax>
    <Parallax translateX={['0px', '-200px']} > {/* opacity={[0, 1]} */}
      <Image alt="" src={chainLisa} className='chain-lisa' />
    </Parallax>
  </>
  );
};

export function OroseClaim() {
  return (
    <div style={{ margin: 'auto 0' }}>
      <br />
      <p className='typography-body'>
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
      <p className='typography-body'>
        wear your {' '}
        <span>
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

interface PhyGitalMainImageProps {
  imageUrl: string;
  fadeDuration: number;
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Oros&#232; ✨ Trade your jewels, wear your NFTs!</title>
        <meta name="description" content="Orosé - Trade your jewels, wear your NFTs!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
        <div className='centerContentViewport'>
          <Topmenu />
          <br/><br/><br/>
          <OroseLogo />
          <OroseClaim />
          <OroseVisual />
          <ReadMore />
        </div>
        <div className='centerContentViewport'>
          <Parallax speed={0} style={{ zIndex: '100' }}>
            <h1>
              <Parallax  scale={[0.15, 1.5]}>
                <span className="typography-heading">a</span>
              </Parallax>
              <Parallax scale={[0.15, 1.5]}>
                <span className="typography-heading">a phygital</span>
              </Parallax>
              <Parallax scale={[0.15, 1.5]}>
                <span className="typography-heading">jewel</span>
              </Parallax>
            </h1>
            <ChainLisa />
          </Parallax>
        </div>
        <div
          className='centerContentViewport'
          style={{
            position: 'relative',
            backgroundImage: 'repeating-radial-gradient(circle at 0 0,#000000,#000000 10px,#0c140e 10px,#0c140e 11px)',
          }}
        >
          <div style={{
            position: 'relative',
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Swirl style={{
              minWidth: '1000px'
            }} />
            <Parallax style={{
              position: 'absolute',
              top: '5%',
            }} scale={[0.1, 1.3]}>
              <h2 className={"typography-heading typography-shadow-green"}>Digital hearth</h2>
            </Parallax>
            <Parallax style={{
              position: 'absolute',
              top: '5%'
            }} easing={'ease'} scale={[0.3, 0.65]} rotate={[-900, 0]}>
              <Image alt="" src={gital} />
            </Parallax>
            <Parallax style={{
              position: 'absolute',
              top: '30%'
            }} speed={0} scale={[0.6, 1.2]}>
              <h2 className="typography-heading" style={{ color: "white", textShadow: '4px 4px 1px green' }} >Decentralized ownership</h2>
            </Parallax>
            <Parallax style={{
              position: 'absolute',
              top: '40%'
            }} speed={100}  scale={[0, 2]}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div  ><Image alt="" style={{ width: '25vw', height: 'auto' }} src={metamaskLogo} /></div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div  ><Image alt="" style={{ width: '25vw', height: 'auto' }} src={ethereumLogo} /></div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div  ><Image alt="" style={{ width: '25vw', height: 'auto' }} src={arbitrumLogo} /></div>
              </div>
            </Parallax>
          </div>
        </div>
        <div className='centerContentViewport'>
          <br /><br /><br />
          <div style={{ position: 'relative'}}>
            <Parallax speed={0} scale={[0.1, 1.3]} >
              <h2 className="typography-heading">Physical<br/>craft</h2>
            </Parallax>
            <Parallax easing={'ease'} speed={0} scale={[0.1, 0.65]} rotate={[900, 0]}>
              <Image alt="" src={phy} />
            </Parallax>
          </div>
        </div>
        {/* <div className='centerContentViewport'>
          <Parallax speed={0} scale={[0.15, 1.2]} style={{ zIndex: '100' }}>
            <h2>
              <span className="typography-heading">Gold alloys</span> 
              <p className="typography-heading">only</p>
            </h2>
            <p className="typography-body" >18 & 22 karat</p>
          </Parallax>
        </div> */}
        <div className='centerContentViewport'>
          <Parallax speed={0} scale={[0.15, 1.2]} style={{ zIndex: '100' }}>
            <video autoPlay loop muted playsInline style={{ width: '80vw', maxWidth: '400px' }}>
              <source src={'wrist-lens.mp4'} type="video/mp4" />
            </video>
            <h2 className="typography-heading">Try it on!</h2>
            <Image alt="" src={oroseSnapcode} />
            <br /><br />
            <p className="typography-body">
              Scan the snapcode with your snapchat app!
              <br />
              ...or click on&nbsp;
              <a target='_blank'
                href='https://www.snapchat.com/lens/fadc2a35713e481ebc5c073a3058e631?sender_web_id=ef296225-bea0-402f-ae63-544557cde8e1&device_type=desktop&is_copy_url=true'>
                 <i>this link 🔗</i>
              </a>
            </p>
          </Parallax>
        </div>
        <div className='centerContentViewport'>
          <Parallax speed={0} scale={[0.15, 1.2]} style={{ zIndex: '100' }}>
            <h2 className="typography-heading">Jump onboard!</h2>
          </Parallax>
          <ChainLisa />
        </div>
        <div className='centerContentViewport' style={{ backgroundColor: '' }}>
          <Parallax speed={-15} scale={[0.2, 0.8]} style={{
            position: 'absolute', zIndex: '100', minWidth: '375px'}}
          >
            <p className="typography-heading typography-shadow-black">
              Mint your digital token
            </p>
            {/* <Image alt="" src={gital} style={{width: '50vw', minWidth: '350px', height: 'auto'}}/> */}
          </Parallax>
          <Parallax speed={0} scale={[0.2, 0.9]} style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image alt="" style={{ height: '100vh', width: 'auto', borderRadius: '50px' }} src={smartLookingGirlMinting} />
          </Parallax>
        </div>
        <div className='centerContentViewport' style={{ backgroundColor: '' }}>
          <Parallax speed={-15} scale={[0.2, 0.8]} style={{
            position: 'absolute', zIndex: '100', minWidth: '375px'
          }}
          >
            <p className="typography-heading typography-shadow-black">
              Trade it at any time
            </p>
          </Parallax>
          <Parallax speed={0} scale={[0.2, 0.9]} style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image alt="" className={styles.poster} src={smartLookingGirlTrading} />
          </Parallax>
        </div>
        <div className='centerContentViewport' style={{ backgroundColor: '' }}>
          <Parallax speed={-15} scale={[0.2, 0.8]} style={{
            position: 'absolute', zIndex: '100', minWidth: '375px'
          }}
          >
            <p className="typography-heading typography-shadow-black">
              Wear it when you want!
            </p>
          </Parallax>
          <Parallax speed={0} scale={[0.2, 0.9]} style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image alt="" className={styles.poster} src={smartLookingGirlWearing} />
          </Parallax>
        </div>
        <div className='centerContentViewport'>
          <Parallax speed={0} scale={[0.2, 0.9]} style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
            <p className="typography-body">
                Join our community on
            </p>
          </Parallax>
          <Parallax speed={0} scale={[0.2, 1.1]} style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
            <Image src={discordName} alt="" style={{ height: 'auto', maxWidth: '40vw', minWidth: '300px' }} />
          </Parallax>
        </div>
        <div className='centerContentViewport'>
          <Footer />
        </div>
      </main>
    </>
  )
}
