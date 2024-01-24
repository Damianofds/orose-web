import Footer from '@/components/footer'
import Topmenu from '@/components/topmenu'
import React from 'react';
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'
import yootFds from '../../public/y00t10062.png'
import goldsmithdesignImage from '../../public/goldsmith-designer-placeholder.png'

export default function Team() {
    return (
        <>
            <Topmenu />
            <br /><br /><br />
            <div>
                <h1 className='fade-in-container typography-heading'>The team</h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div>
                    <Image alt="" style={{ maxWidth: '400px', height: 'auto' }} src={yootFds} />                        
                    <p className={'typography-body'}>
                        <a href="https://twitter.com/fds_web" target='blank'>
                            <SocialIcon url="https://www.x.com/fds_web" bgColor="#000000" style={{ scale: '70%',  }} />@fds.eth 📨
                        </a>
                    </p>
                    <p className={'typography-body'}>Product manager</p>
                    <p className={'typography-body'}>Rome (IT)</p>
                </div>
                <div style={{ minWidth: '2vw', height: 'auto' }}>
                </div>
                <div>
                    <Image alt="" style={{ maxWidth: '400px', height: 'auto' }} src={goldsmithdesignImage} />
                    <p className={'typography-body'}>Artist in stealth mode</p>
                    <p className={'typography-body'}>Design & Goldsmithing</p>
                    <p className={'typography-body'}>Munich (DE)</p>
                </div>
            </div>
            <hr/>
            <Footer />
        </>
    )
}