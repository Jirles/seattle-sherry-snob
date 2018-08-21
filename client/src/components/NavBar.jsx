import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='clearfix border-bottom' >
            <div className='left p1' ><Link to='/' className='h3 caps text-decoration-none' >Seattle Sherry Snob<img alt='Pouring a glass of sherry' src='http://localhost:3001/api/banner-image' width='25%'/></Link></div>
            <div className='right border-left border-right mt4 p1 align-bottom' ><Link className='text-decoration-none' to='/about'>About Us</Link></div>
            <div className='right border-left mt4 p1 align-bottom' ><Link className='text-decoration-none' to='/sherry-101'>Sherry 101</Link></div>
        </div>
    )
}

