import React from 'react';
import CommentForm from '../containers/CommentForm';
import {Comment} from './Comment';

export const CommentSection = (props) => {
    let renderComments;
    if (props.comments){
        renderComments = props.comments.map(comment => <Comment key={comment.id} comment={comment}/>);
    } else {
        renderComments = 'Loading...'
    }
    
    return (
        <div>
            <CommentForm sherry_id={props.sherry_id}/>
            {renderComments}
        </div>
    )   
}