import React from 'react';
import {connect} from 'react-redux';
import { addComment } from '../actions';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sherry_id: this.props.sherry_id,
            content: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state);
        this.setState({
            content: ''
        });
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <input type='textarea' onChange={this.handleOnChange} value={this.state.content}/>
                <input type='submit' />
            </form>
        )
    }

}

export default connect(null, { addComment })(CommentForm);