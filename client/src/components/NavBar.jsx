import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = (props) => {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
        </ul>
    )
}

