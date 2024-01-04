import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons'
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image'



export function OroseVisual() {
  return (
    <>
      <Image alt="" src="/orose-visual-22.gif" style={{ width: '30vw', maxWidth: '400px' }} loading="lazy" />
      {/* <Image alt="" src="/orose-visual-22.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/>
      <Image alt="" src="/orose-liscio-visual-22.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/>
      <Image alt="" src="/orose-liscio-visual-18.gif" style={{ width:'80vw', maxWidth:'400px' }} loading="lazy"/> */}
    </>
  )
}

type KeyFigureProps = {
    quantity: string;
    uom: string;
};
  
export const KeyFigure: React.FC<KeyFigureProps> = ({quantity, uom}) => {
  return (
    <p style={{paddingBottom: '10vh'}}>
      <span style={{fontSize: '40vw', lineHeight:'.8'}}>{quantity}</span><br/>
      <span style={{fontSize: '20vw', lineHeight:'1.2'}}>{uom}</span>
    </p>
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
  const finalAmountFontSize = (size === 'SMALL') ? '2vw' : '20vw';
  const finalUomFontSize = (size === 'SMALL') ? '1vw' : '10vw';
  return (
    <>
      <p style={{fontSize:finalAmountFontSize, color:'#ccb400'}} className='pulse'>{amount}</p>
      {
        amount!='FREE' && amount!='' && <span style={{fontSize:finalUomFontSize, color:'#ccb400'}}>&nbsp;{uom}</span>
      }
    </>
  )
}


export const PartialCostShipping: React.FC<PartialCostProps> = ({name, description, amount, }) => {
  return (
    <>
      <p style={{fontSize: '10vw'}}>{name}</p>
      <p style={{fontSize: '5vw'}}>{description}</p>
      <Amount amount={amount} uom='ETH' />
    </>
  )
}

export const PartialCost: React.FC<PartialCostProps> = ({name, description, amount, }) => {
  return (
    <div style={{paddingBottom:'5vh', paddingTop:'5vh'}}>
      <p style={{fontSize: '30vw'}}>{name}</p>
      <p style={{fontSize: '10vw'}}>{description}</p>
      <Amount amount={amount} uom='ETH'/>
    </div>
  )
}

type ShippingCostProps = {
  // costName1: string;
  // costDescription1: string;
  // cost1: string;
  // costName2: string;
  // costDescription2: string;
  // cost2: string;
};

export const ShippingCosts: React.FC<ShippingCostProps> = ({
  // costName1, costDescription1, cost1,
  // costName2, costDescription2, cost2
}) => {
  return (
    <>
      {/* <p style={{paddingBottom:'5vh', paddingTop:'5vh'}}>
        <p style={{fontSize: '25vw'}}>{costName1}</p>
        <p style={{fontSize: '10vw'}}>{costDescription1}</p>
        <Amount amount={cost1} uom='ETH'/>
      </p>
      <p style={{paddingBottom:'5vh', paddingTop:'5vh'}}>
        <p style={{fontSize: '25vw'}}>{costName2}</p>
        <p style={{fontSize: '15vw'}}>{costDescription2}</p>
        <Amount amount={cost2} uom='ETH'/>
      </p> */}
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
        <div style={{paddingBottom:'5vh', paddingTop:'5vh', fontSize:'20vw'}}>FORGE IT NOW!</div>
        <div className="grid-container">
          <div className="item2">
            <Image alt="" style={{maxWidth: '70%', lineHeight:'.8', paddingBottom:'5vh', paddingTop:'5vh'}} className="jewelImage" src="/orose_000-3D_7.png" />
          </div>  
          <div>
            <KeyFigure quantity='20' uom='grams'/>
          </div>
          <div>
           <KeyFigure quantity='18' uom='karat'/>
          </div>
          <div>
            <KeyFigure quantity='02' uom='hours'/>
          </div>
        </div>
        <div className="grid-container">
          <div>
            <PartialCost name='Alloy' description='75% gold - 13% silver - 12% copper' amount='2.00'/>
          </div>
          <div>
            <PartialCost name='Craft' description='superior goldsmithing' amount='0.40'/>
          </div>
          <div>
            <PartialCost name='Pouch' description='silk with our design and manufacturing' amount='0.10'/>
          </div>
          <div>
            <PartialCost name='Taxes' description='under Italian jurisdiction' amount='0.08'/>
          </div>
        </div>
        <ShippingCosts
          // costName1='Worldwide shipping' costDescription1='100% Insured' cost1=''
          // costName2='Pick it up' costDescription2='@Rome @Berlin' cost2='FREE'
        />
        <div style={{paddingBottom:'5vh', paddingTop:'5vh', fontSize:'20vw'}}>FORGE IT TODAY!</div>
        <p>
          <div><Amount amount='3.1' uom='ETH'/></div>
          <div><button>FORGE IT</button></div>
        </p>
        <br />
        <br />
      </main>
    </>
  )
}
