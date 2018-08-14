import React from 'react';
import {SherryCard} from '../components/SherryCard';
import { connect } from 'react-redux';
import { fetchSherries } from '../actions';

class SherryList extends React.Component {
    
    componentDidMount(){
        this.props.fetchSherriesFromAPI();
    }

    renderSherries = () => {
        return this.props.sherries.map(sherry => <SherryCard key={sherry.id} sherry={sherry} />)
    }

    render(){
        return (
            <div>
                <h1>Sherry, the civilized drink.</h1>
                <small><em>- W. Somerset Maugham</em></small>
                {this.renderSherries()}
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSherriesFromAPI: () => dispatch(fetchSherries())
    }
}

const mapStateToProps = (state) => {
    return {
        sherries: state.sherries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SherryList);