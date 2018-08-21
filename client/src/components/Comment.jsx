import React from 'react';

export const Comment = ({ comment }) => {
    return(
        <div className='border-bottom p2' >
            <p>{comment.content}</p>
        </div>
    )
}