import React from 'react';
import Link from 'next/link'

interface TopMenuStyles {
    menuList: React.CSSProperties;
    menuItem: React.CSSProperties;
  }

const topMenuStyles: TopMenuStyles = {
    menuList: {
        margin: '0 auto',
        textAlign: 'center',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',

        
    },
    menuItem: {
        padding: '10px 15px',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default function Topmenu() {
    
    return (
        <>
            <div style={topMenuStyles.menuList}>
                    <div style={topMenuStyles.menuItem}><Link style={{textDecorationLine: 'none'}} href='/'>Home</Link></div>
                    <div style={topMenuStyles.menuItem}><Link style={{textDecorationLine: 'none'}} href='/roadmap'>Roadmap</Link></div>
                    <div style={topMenuStyles.menuItem}><Link style={{textDecorationLine: 'none'}} href='/team'>Team</Link></div>
                    {/* <li style={topMenuStyles.menuItem}><a href='/jewel-list'>Market</a></li>
                    <li style={topMenuStyles.menuItem}><a href='/jewel-mint'>Mint</a></li>
                    <li style={topMenuStyles.menuItem}><a href='/jewel-dashboard'>My jewels</a></li> */}
            </div>
        </>
    )
}