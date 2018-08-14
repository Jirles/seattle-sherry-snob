import React from 'react';
import {Link} from 'react-router-dom'; //eventually going to link to show pages


export const SherryList = (props) => {
     const renderSherries = props.route.sherries.map(sherry => {
         <div key={sherry.id}>
             <Link to={`sherries/${sherry.id}`}><img src={sherry.thumbnail_url} alt='A sherry bottle' /></Link>
             <h3>{sherry.name}</h3>
             <span><em>{sherry.price}</em></span>
             <p>{sherry.sugar_content}</p>
         </div>
     })
    return (
        <div>
            <h1>Sherry, the civilized drink.</h1>
            <small><em>- W. Somerset Maugham</em></small>
            {renderSherries}
        </div>
    )
}