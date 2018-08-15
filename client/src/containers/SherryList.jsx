import React from 'react';
import {SherryCard} from '../components/SherryCard';
import { connect } from 'react-redux';

class SherryList extends React.Component {

    renderSherries = () => {
        return this.props.sherries.map(sherry => <SherryCard key={sherry.id} sherry={sherry} />)
    }

    render(){
        return (
            <div>
                <h1>Sherry, the civilized drink.</h1>
                <small><em> - W. Somerset Maugham</em></small>
                {this.renderSherries()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sherries: state.sherries
    }
}

export default connect(mapStateToProps)(SherryList);