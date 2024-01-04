import Footer from '@/components/footer';
import Topmenu from '@/components/topmenu';
import React from 'react';
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'


export default function Team() {
    return (
        <>
            <Topmenu />
            <div>
                <h1>The team</h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                <div style={{ flex: '0 0 20%' }} >
                    <Image alt="" style={{ maxWidth: '100%', height: 'auto' }} src='/y00t10062.png' />
                    <SocialIcon url="https://www.x.com/fds_web" bgColor="#000000" style={{scale: '80%'}} />
                    <a style={{fontSize: '30px', textDecorationLine: 'none'}} href="https://twitter.com/fds_web" target='blank'>fds_web</a>
                    <p><strong>Digital production</strong></p>
                </div>
                <div style={{ flex: '0 0 20%' }} >
                    <p>Goldsmithing and Design</p>
                    <p>not-yet-public</p>
                </div>
            </div>
            <Footer />
        </>
    )
}