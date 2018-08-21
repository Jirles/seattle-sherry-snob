import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='clearfix border' >
            <div className='inline-block left border' ><Link to='/' className='h3 italic' >Seattle Sherry Snob</Link></div>
            <div className='inline-block mr1 right border' ><Link to='/about'>About Us</Link></div>
            <div className='inline-block right border' ><Link to='/sherry-101'>Sherry 101</Link></div>
        </div>
    )
}

