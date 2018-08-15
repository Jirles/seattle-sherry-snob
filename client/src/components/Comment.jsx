import React from 'react';

export const Comment = ({ comment }) => {
    return(
        <div>
            <p>{comment.content}</p>
        </div>
    )
}