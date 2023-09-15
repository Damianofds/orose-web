import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons'
import { Parallax } from 'react-scroll-parallax';
import Link from 'next/link'



export function OroseVisual() {
  return (
    <>
      <img src="/orose-visual-22.gif" style={{ width: '30vw', maxWidth: '400px' }} loading="lazy" />
      {/* <img src="/orose-visual-22.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/>
      <img src="/orose-liscio-visual-22.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/>
      <img src="/orose-liscio-visual-18.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/> */}
    </>
  )
}

type KeyFigureProps = {
    quantity: string;
    uom: string;
};
  
export const KeyFigure: React.FC<KeyFigureProps> = ({quantity, uom}) => {
  return (
    <>
      <p style={{fontSize: '8em', lineHeight:'.8'}}>{quantity}</p>
      <span style={{fontSize: '4em', lineHeight:'1.2'}}>{uom}</span>
    </>
  )
}

type PartialCostProps = {
  name: string;
  description: string;
  amount: string;
};

type AmountProps = {
  amount: string;
  uom: string;
  size?: string;
};

export const Amount: React.FC<AmountProps> = ({amount, uom, size}) => {
  const finalAmountFontSize = (size === 'BIG') ? '10em' : '2em';
  const finalUomFontSize = (size === 'BIG') ? '6em' : '1.5em';
  return (
    <>
      <p style={{fontSize:finalAmountFontSize, color:'#ccb400'}} className='pulse'>{amount}</p>
      {
        amount!='FREE' && amount!='' && <span style={{fontSize:finalUomFontSize, color:'#ccb400'}}>&nbsp;{uom}</span>
      }
    </>
  )
}

export const PartialCost: React.FC<PartialCostProps> = ({name, description, amount, }) => {
  return (
    <>
      <p style={{fontSize: '2em'}}>{name}</p>
      <p style={{fontSize: '1em'}}>{description}</p>
      <Amount amount={amount} uom='ETH'/>
    </>
  )
}

type DailyPriceProps = {
  name: string;
  amount: string;
  uom: string;
  updateAt: string;
};

export const DailyPrice: React.FC<DailyPriceProps> = ({name, amount, uom, updateAt}) => {
  return (
    <>
      <p>{name}</p>
      <Amount amount={amount} uom={uom} size={'BIG'}/>
      <p style={{fontSize:'2em', lineHeight:'1.2'}}>last update: {updateAt}</p>
    </>
  )
}

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
        <div className="cta">PRICES TODAY</div>
        <div className="grid-container">
          <div>
            <DailyPrice name='gold' amount='56' uom='&euro;/gram' updateAt='21/08/2023'/>
          </div>
          <div>
            <DailyPrice name='work' amount='50' uom='&euro;/hour' updateAt='21/08/2023'/>
          </div>
        </div>
        <div className="cta">YOUR JEWELS</div>
        <Link href='/jewel-dashboard'>
          <img style={{maxWidth: '70%', lineHeight:'.8'}} className="jewelImage" src="/orose_000-3D_7.png" />
        </Link>
        <p style={{fontSize: '2em', lineHeight:'.8'}}>fds bracelet</p>
        <img style={{maxWidth: '70%', lineHeight:'.8'}} className="jewelImage" src="/orose_000-3D_7.png" />
        <p style={{fontSize: '2em', lineHeight:'.8'}}>+ Claim another one</p>
      </main>
    </>
  )
}
