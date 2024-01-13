import React from 'react';
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import Image from 'next/image'
import oroseLogo from '../../public/orose-logo.png'
import MailCollector from './mail-collector';

export default function Footer() {

    function OroseLogo() {
        return (
            <>
                <br />
                <Image src={oroseLogo} alt="" style={{ width: '10vw', height: 'auto', minWidth: '100px', maxWidth: '200px' }} />
            </>
        )
    }

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'left', paddingTop: '0vh', paddingRight: '20vw', paddingLeft: '20vw' }}>
                <br />
                <div style={{minWidth: '350px', width:'20vw', paddingLeft: '5vw'}}>
                    <OroseLogo />
                    <p>EVENT REMINDER</p>
                    ✨ The first mint ever 👇
                    <MailCollector />
                </div>
                <div style={{minWidth: '350px', width:'20vw', paddingLeft: '5vw'}}>
                    <br/><br/>
                    <SocialIcon url="https://www.x.com/fds_web" bgColor="#000000" style={{ scale: '70%' }} /> Get in touch on x.com
                    <br/><br/>
                    <div><Link style={{ textDecorationLine: 'none' }} href='/roadmap'>- Our roadmap</Link></div>
                    <div><Link style={{ textDecorationLine: 'none' }} href='/team'>- The team</Link></div>
                    <br/>
                    Our office is in Piazza Annibaliano, Rome (IT)
                    <br />
                    Our jewel production lab is in Munich (DE)
                    <br />
                    VAT ID 02680990468
                    <br />
                    hi@orose.gold
            </div>
                
                {/* <div style={{ flex: '0 0 10%' }}></div> */}

                <br />
                <br />

                <br />
                
            </div>
        </>
    )
}