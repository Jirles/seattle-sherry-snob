import React from 'react';
import {CommentSection} from '../components/CommentSection';
import {connect} from 'react-redux';

class SherryShow extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.sherry.thumbnail_url} alt='A sherry bottle' width='420' height='320' />
                    
                <p>{this.props.sherry.name}</p>
                <CommentSection />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const sherry = state.sherries.find(sherry => sherry.id === parseInt(ownProps.match.params.sherryId, 10));
    if (sherry){
        return { sherry };
    } else {
        return { sherry: {} };
    };
    
}

export default connect(mapStateToProps)(SherryShow);