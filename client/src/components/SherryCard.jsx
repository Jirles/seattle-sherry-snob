import React from 'react';
import {Link} from 'react-router-dom';

export const SherryCard = (props) => {
    return(
        <div className='col-3 mx-auto my2 p0 border rounded shadow escape-bg-fade' >
            <Link to={`sherries/${props.sherry.id}`}><img src={props.sherry.thumbnail_url} alt='A sherry bottle' className='fit' /></Link>
            <h4 className='ml1'>{props.sherry.name}</h4>
            <ul className='list-reset'>
                <li className='ml2' ><em>${props.sherry.price}</em></li>
                <li className='ml2'>{props.sherry.sugar_content}</li>
            </ul>
         </div>
    )
}