import React from 'react';
import { connect } from 'react-redux';
import {filterSherryResults} from '../actions';

class FilterSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minPrice: '',
            maxPrice: '',
            sweetnessFilter: 'Both'
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        debugger
        const minPrice = this.state.minPrice === '' ? 0 : parseFloat(this.state.minPrice);
        const maxPrice = this.state.maxPrice === '' ? Infinity : parseFloat(this.state.maxPrice); 
        this.props.filterSherryResults({
            minPrice: minPrice,
            maxPrice: maxPrice,
            sweetnessFilter: this.state.sweetnessFilter
        });
        this.setState({
            minPrice: '',
            maxPrice: '',
            sweetnessFilter: 'Both'
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <fieldset>
                    <legend>Filter Options</legend>
                    <p>Filter by Price</p>
                    Min Price: <input type='number' min='0' step='0.01' name='minPrice' onChange={this.handleChange} /><br />
                    Max Price: <input type='number' min='0' step='0.01' name='maxPrice' onChange={this.handleChange} />
                    <p>Filter by Sweetness</p>
                    <label htmlFor='sweet'>Sweet:</label>
                    <input type='radio' name='sweetnessFilter' id='sweet' value='Sweet' onChange={this.handleChange} />
                    <label htmlFor='dry'> Dry:</label>
                    <input type='radio' name='sweetnessFilter' id='dry' value='Dry' onChange={this.handleChange} />
                    <label htmlFor='both'> Both:</label>
                    <input type='radio' name='sweetnessFilter' id='both' value='Both' onChange={this.handleChange} />
                    <br />
                    <input type='submit' value='Apply Filters' />
                </fieldset>
            </form>
        )
    }
}

export default connect(null, { filterSherryResults })(FilterSection);