import React from 'react';
import {Link} from 'react-router-dom'; //eventually going to link to show pages


export const SherryList = () => {
    return (
        <div>
            <h1>Browse some of the finest sherries</h1>
            <Link to='sherries/1'>Link to Sherry Show Page</Link>
        </div>
    )
}