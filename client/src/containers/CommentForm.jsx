import React from 'react';

class CommentForm extends React.Component {
    render(){
        return(
            <form onSubmit={(e) => e.preventDefault()}>
                <input type='textarea' />
                <input type='submit' />
            </form>
        )
    }

}

export default CommentForm;