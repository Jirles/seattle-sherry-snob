import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='clearfix border-bottom' >
            <div className='left border-left border-right p2' ><Link to='/' className='h1 caps text-decoration-none' >Seattle Sherry Snob</Link></div>
            <div className='right border-left border-right mt3 p1 align-bottom' ><Link className='text-decoration-none' to='/about'>About Us</Link></div>
            <div className='right border-left mt3 p1 align-bottom' ><Link className='text-decoration-none' to='/sherry-101'>Sherry 101</Link></div>
        </div>
    )
}

