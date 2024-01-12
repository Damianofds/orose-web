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
                <Image src={oroseLogo} alt="" style={{ width: '10vw', height: 'auto', maxWidth: '200px' }} />
            </>
        )
    }

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderTopWidth: '1px', borderTopStyle: 'solid', textAlign: 'left', paddingTop: '3vh', paddingRight: '20vw', paddingLeft: '20vw' }}>
                <div style={{ flex: '0 0 50%' }}>
                    <OroseLogo />
                    <p><Link style={{ textDecorationLine: 'none' }} href='/roadmap'>Roadmap</Link></p>
                    <p><Link style={{ textDecorationLine: 'none' }} href='/team'>Team</Link></p>
                    <br />
                    <SocialIcon url="https://www.x.com/fds_web" bgColor="#000000" style={{ scale: '80%' }} />
                    <br />
                    <br />
                    registered office Corso Trieste 185, Roma (IT)
                    <br />
                    jewel production lab in Munich (DE)
                    <br />
                    VAT ID 02680990468
                    <br />
                    hi@orose.gold
                </div>
                <div style={{ flex: '0 0 50%' }}>
                    <p>First mint event reminder</p>
                    <br/>
                    <MailCollector />
                </div>
                {/* <div style={{ flex: '0 0 10%' }}></div> */}

                <br />
                <br />

                <br />
                
            </div>
        </>
    )
}