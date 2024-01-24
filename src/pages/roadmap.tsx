import Footer from '@/components/footer';
import Topmenu from '@/components/topmenu';
import React, { useState, useEffect } from 'react';
import Lab from '../../public/pics/photo/lab2.jpg'
import DigitalFitting from '../../public/pics/photo/digital-fitting.png'
import Trading from '../../public/blur-opensea.png'
import Collection from '../../public/pics/photo/collection-preview.jpg'
import Image from 'next/image';

export default function Roadmap() {
    return (
        <>
            <Topmenu />
            <br /><br /><br />
            <div className='fade-in-container' style={{ paddingLeft: '10%', paddingRight: '10%'}}>
                <h1 className='typography-heading'>Our roadmap</h1>
            </div>
            <div style={{textAlign: 'left', maxWidth: '1380px', margin: '0 auto', paddingLeft: '10%', paddingRight: '10%'}}>
                <p className='typography-body'>
                    We&apos;re <strong>pyhgital</strong>, a funky term for bringing the best of physical and digital together.
                    We want to <strong>augment jewels</strong> with digital experiences changing how you see, own, and trade jewels.
                </p>
                <br/><br/>
                <h2 className='typography-title'>Unveiling Our Golden Tales</h2>
                <div className="image-fullwidth-container">
                    <Image className="image-fullwidth" alt="" src={Collection} />
                </div>
                <br/>
                <p className='typography-body'><strong>Get ready</strong> to immerse yourself in our upcoming collections.
                As a mix of timeless classics with modern expressions, each piece is crafted in gold and ready to be a part of your story.
                <br/><strong>Stay tuned</strong> as we unveil a journey where every jewel is a new tech and craft treasure.</p>
                <br/><br/>
                <h2 className='typography-title'>Craft and Transparency</h2>
                <div className="image-fullwidth-container">
                    <Image className="image-fullwidth" alt="" src={Lab} />
                </div>
                <br/>
                <p className='typography-body'><strong>Craftsmanship matters</strong>, we take that seriously! Expect top-notch quality, meticulous details, and a <strong>transparent journey</strong> as a clean window. Your jewelry&apos;s story—from inception to delivery—will be an open book.</p>
                <br/><br/>
                <div className="wrap-image-and-text">
                    <div style={{width:'35vw', maxWidth:'600px', textAlign:'left'}}>
                        <h2 className='typography-title'>Digital Fittings</h2>
                        <p className='typography-body' style={{minWidth:'300px'}}>Our AR experience is your personal fitting room. Try it on virtually before you decide to buy that stunning gold necklace. Wear your digital jewels on video calls, making every interaction a showcase of your style.</p>
                    </div>
                    <div style={{width:'35vw', maxWidth:'300px', alignSelf: 'right'}}><Image className="minwidth-image"  alt="" src={DigitalFitting} /></div>
                </div>
                <br/><br/>
                <div className="wrap-image-and-text">
                    <div style={{width:'35vw', maxWidth:'600px', textAlign:'left'}}>
                        <h2 className='typography-title'>Trading Vibes</h2>
                        <p className='typography-body' style={{minWidth:'300px'}}>Your digital jewels are not just locked away in a vault. You can trade, swap, and own them in a bustling marketplace. Your piece isn&apos;t just bling; it&apos;s an investment in a digital vibe.</p>
                    </div>
                    <div style={{width:'35vw', maxWidth:'300px', alignSelf: 'right'}}><Image className="minwidth-image"  alt="" src={Trading} /></div>
                </div>
                <br/><br/>
                <h2 className='typography-title'>Join us crafting the Future!</h2>
                <p className='typography-body'>We want to make jewelry a story, an experience, something personal. <strong>Join us</strong> on this exciting ride!</p>
            </div>
            <br /><br/><br/>
            <hr/>
            <Footer />
        </>
    )
}