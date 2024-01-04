import React from 'react';
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import Image from 'next/image'
import oroseLogo from '../../public/orose-logo.png'

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
            <br /><br /><br />
            <div style={{ borderTopWidth: '1px', borderTopStyle: 'solid', textAlign: 'left', paddingRight: '20vw', paddingLeft: '20vw' }}>
                <OroseLogo />
                <br />
                <br />
                <p><Link style={{textDecorationLine: 'none'}} href='/roadmap'>Roadmap</Link></p>
                <p><Link style={{textDecorationLine: 'none'}} href='/team'>Team</Link></p>
                <br />
                <SocialIcon url="https://www.x.com/fds_web" bgColor="#000000" style={{scale: '80%'}}/>
                <br />
                <br />
                <p>registered office Corso Trieste 185, Roma (IT)</p>
                <p>jewel production lab in Munich (DE)</p>
                <p>VAT ID 02680990468</p>
                <p>hi@orose.gold</p>
                <br />
            </div>
        </>
    )
}