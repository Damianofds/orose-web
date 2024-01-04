import Footer from '@/components/footer';
import Topmenu from '@/components/topmenu';
import React, { useState, useEffect } from 'react';

export default function Roadmap() {
    return (
        <>
            <Topmenu />
            <div>
                <h1>Our roadmap</h1>
            </div>
            <div style={{textAlign: 'left', maxWidth: '800px', margin: '0 auto'}}>
                <h3>Our Pyhgital Journey</h3>
                <p>We&apos;re not your regular jewelry company. We&apos;re pyhgital—a funky term for bringing the best of physical and digital together. Our goal? To revolutionize how you see, own, and trade jewels by infusing them with stories and tech magic.</p>
                <br/>
                <h3>More than Shiny Things</h3>
                <p>We&apos;re all about vibes, stories, and personal connections. Our forthcoming collections? They&apos;re not just about gold and gems; they&apos;re about capturing moments, celebrating cultures, and letting you express yourself in ways beyond traditional jewelry.</p>
                <br/>
                <h3>Craft and Transparency</h3>
                <p>Craftsmanship matters, right? We take that seriously! Expect top-notch quality, meticulous details, and a journey transparent as a clean window. Your jewelry&apos;s story—from inception to delivery—will be an open book.</p>
                <br/>
                <h3>Augmented Reality, Let&apos;s Play!</h3>
                <p>Who said jewelry can&apos;t be fun? Our AR experience isn&apos;t just a button to click; it&apos;s a playground! Imagine trying on your favorite piece virtually before deciding it&apos;s `the one`. Cool, huh?</p>
                <br/>
                <h3>Sharing Vibes</h3>
                <p>Here&apos;s the kicker: your digital jewels? They&apos;re not just locked away in a vault. You can trade, swap, and own them in a bustling marketplace. Your piece isn&apos;t just bling; it&apos;s an investment in a digital vibe.</p>
                <br/>
                <h3>Let&apos;s Craft the Future, Together</h3>
                <p>So, here&apos;s the deal—we&apos;re all about making jewelry a story, an experience, something personal. Come join us on this exciting ride where we&apos;re crafting more than jewels; we&apos;re crafting moments and connections.</p>
            </div>
            <Footer />
        </>
    )
}