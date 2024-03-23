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
                        <Image src={discordLogo} alt="" style={{ height: '38px', maxWidth: '45px' }} />
                        <p style={{ lineHeight: '45px' }}>&nbsp;&nbsp;Join our discord server</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <SocialIcon url="https://www.x.com/fds_web" bgColor="#000000" style={{ scale: '80%', }} />
                        <p style={{ lineHeight: '50px' }}>Get in touch on crypto X</p>
                    </div>
                    <br />
                    <p><Link style={{ textDecorationLine: 'none' }} href='/roadmap'>Our roadmap</Link> |
                        <Link style={{ textDecorationLine: 'none' }} href='/team'> The team</Link></p>
                    <br />
                    Piazza Annibaliano, Rome (IT) - office
                    <br />
                    Berg am Laim, Munich (DE) - production
                    <br />
                    VAT ID 02680990468
                    <br />
                    hi@orose.gold
                    <br /><br /><br />
                </div>


            </div>
        </>
    )
}