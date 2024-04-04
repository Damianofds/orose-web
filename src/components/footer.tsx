import React from 'react';
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import Image from 'next/image'
import oroseLogo from '../../public/orose-logo.png'
import discordLogo from '../../public/discord-logo.png'
import MailCollector from './mail-collector';

export default function Footer() {

    function OroseLogo() {
        return (
            <div>
                <br />
                <Image src={oroseLogo} alt="" style={{ width: '10vw', height: 'auto', minWidth: '100px', maxWidth: '200px' }} />
            </div>
        )
    }

    return (
        <>
            <div className="typography-details" style={{ userSelect: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'left', paddingTop: '0vh', paddingRight: '20vw', paddingLeft: '20vw' }}>
                <div style={{ minWidth: '350px', width: '25vw', paddingLeft: '5vw', whiteSpace: 'nowrap' }}>
                    <OroseLogo />
                    <br /><br />
                    <p>Don&apos;t miss our mint day!</p>
                    <br />
                    <MailCollector />
                    <p>A single reminder - No subscription</p>
                </div>
                <div style={{ minWidth: '350px', width: '25vw', paddingLeft: '5vw', whiteSpace: 'nowrap' }}>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <SocialIcon target='blank' url="https://discord.gg/aKgZZ3kUu3" bgColor="#000000" style={{ scale: '90%', }} />
                        <Link target='blank' style={{ textDecorationLine: 'none' }} href='https://discord.gg/aKgZZ3kUu3'>
                            <span style={{ lineHeight: '45px' }}>&nbsp;&nbsp;Join us on Discord</span>
                        </Link>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <SocialIcon target='blank' url="https://www.x.com/damianofds" bgColor="#000000" style={{ scale: '90%', }} />
                        <Link target='blank' style={{ textDecorationLine: 'none' }} href='https://www.x.com/damianofds'>
                            <span style={{ lineHeight: '45px' }}>&nbsp;&nbsp;Follow us on crypto x</span>
                        </Link>
                    </div>
                    <br />
                    <p><Link style={{ textDecorationLine: 'none' }} href='/roadmap'>Our roadmap</Link> |
                        <Link style={{ textDecorationLine: 'none' }} href='/team'> The team</Link>
                    </p>
                    <br />
                    <p>
                        Rome (IT) - Digital production
                        <br />
                        Munich (DE) - Jewelry production
                        <br />
                        VAT ID <span  style={{ userSelect: 'text' }}>02680990468</span>
                        <br />
                        <span  style={{ userSelect: 'text' }}>hi@orose.gold</span>
                    </p>
                    <br /><br />
                </div>


            </div>
        </>
    )
}