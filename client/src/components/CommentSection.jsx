import React from 'react';
import CommentForm from '../containers/CommentForm';
import {Comment} from './Comment';

export const CommentSection = (props) => {
    const renderComments = props.comments.map(comment => <Comment key={comment.id} comment={comment}/>);
    return (
        <div>
            This is the comment section
            <CommentForm />
            {renderComments}
        </div>
    )   
}

// this breaks the application when forced to refresh because it is not hooked up to the store and loses 
// the state on each refresh
// google about maintaining state with each refresh becuase it's killing me