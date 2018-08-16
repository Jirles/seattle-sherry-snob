import React from 'react';
import {SherryCard} from '../components/SherryCard';
import { connect } from 'react-redux';
import FilterSection from './FilterSection';

class SherryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minPrice: 0,
            maxPrice: Infinity,
            sweetnessFilter: 'Both'
        }
    }

    renderSherries = (sherries) => {
        return sherries.map(sherry => <SherryCard key={sherry.id} sherry={sherry} />)
    }

    filteredList = () => {
        if (this.state.minPrice === 0 && this.state.maxPrice === Infinity && this.state.sweetnessFilter === 'Both'){
            return this.props.sherries
        } else {
            const filteredByPrice = this.props.sherries.filter(sherry => this.state.minPrice <= sherry.price && this.state.maxPrice >= sherry.price);
            const filteredByPriceAndSweetness = filteredByPrice.filter(sherry => {
                if (this.state.sweetnessFilter === 'Both'){
                    return true;
                } else {
                    return sherry.sugar_content.includes(this.state.sweetnessFilter);
                }
            });
            return filteredByPriceAndSweetness;
       }
    }

    handleChange = (e) => {
        let value = e.target.value;
        let targetName = e.target.name
        if(value === ''){
            targetName.includes('min') ? value = 0 : value = Infinity
        }
        this.setState({
            [targetName]: value
        });
    }

    render(){
        return (
            <div>
                <h1>Seattle Sherry Snob</h1>
                
                <FilterSection handleChange={this.handleChange} />
                <br />
                {this.renderSherries(this.filteredList())}
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