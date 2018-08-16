import React from 'react';
import {SherryCard} from '../components/SherryCard';
import { connect } from 'react-redux';
import FilterSection from './FilterSection';

class SherryList extends React.Component {

    renderSherries = () => {
        return this.props.sherries.map(sherry => <SherryCard key={sherry.id} sherry={sherry} />)
    }

    handleOnSubmit = (e, filters) => {
        e.preventDefault();
        debugger
        const minPrice = filters.minPrice === '' ? 0 : parseFloat(filters.minPrice);
        const maxPrice = filters.maxPrice === '' ? Infinity : parseFloat(filters.maxPrice); 
        this.props.filterSherryResults({
            minPrice: minPrice,
            maxPrice: maxPrice,
            sweetnessFilter: filters.sweetnessFilter
        });
    }

    render(){
        return (
            <div>
                <h1>Seattle Sherry Snob</h1>
                
                <FilterSection handleOnSubmit={this.handleOnSubmit} />
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