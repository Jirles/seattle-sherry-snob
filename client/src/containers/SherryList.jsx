import React from 'react';
import {SherryCard} from '../components/SherryCard';
import { connect } from 'react-redux';
import FilterSection from './FilterSection';

class SherryList extends React.Component {

    renderSherries = () => {
        return this.props.sherries.map(sherry => <SherryCard key={sherry.id} sherry={sherry} />)
    }

    render(){
        return (
            <div>
                <h1>Seattle Sherry Snob</h1>
                
                <FilterSection />
                <br />
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