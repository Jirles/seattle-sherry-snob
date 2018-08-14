import React from 'react';
import {Link} from 'react-router-dom'; //eventually going to link to show pages

export const SherryCard = (props) => {
    return(
        <div>
             <Link to={`sherries/${props.sherry.id}`}><img src={props.sherry.thumbnail_url} alt='A sherry bottle' /></Link>
             <h3>{props.sherry.name}</h3>
             <span><em>{props.sherry.price}</em></span>
             <p>{props.sherry.sugar_content}</p>
         </div>
    )
}