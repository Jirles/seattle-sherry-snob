import React from 'react';
import {SherryCard} from '../components/SherryCard';
import { connect } from 'react-redux';
import FilterSection from './FilterSection';

class SherryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filters: false,
            minPrice: 0,
            maxPrice: Infinity,
            sweetnessFilter: 'Both'
        }
    }

    renderSherries = () => {
        return this.props.sherries.map(sherry => <SherryCard key={sherry.id} sherry={sherry} />)
    }

    filteredList = () => {
        if (this.state.filters){
            
        } else {
            return this.props.sherries
        }
    }

    handleOnSubmit = (e, filters) => {
        e.preventDefault();
        debugger
        const minPrice = filters.minPrice === '' ? 0 : parseFloat(filters.minPrice);
        const maxPrice = filters.maxPrice === '' ? Infinity : parseFloat(filters.maxPrice); 
        this.setState({
            filters: true,
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