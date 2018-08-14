import React from 'react';
import {CommentSection} from '../components/CommentSection';
import {connect} from 'react-redux';
import { fetchSherry } from '../actions';

class SherryShow extends React.Component {
    render(){
        return(
            <div>
                <h3>Sherry Show Container</h3>
                <p></p>
                <CommentSection />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchSherryFromAPI: () => {dispatch({ fetchSherry() })}
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

export default connect(mapStateToProps, mapDispatchToProps)(SherryShow);