import React from 'react';

export default class FilterSection extends React.Component {

    render(){
        return(
            <form onSubmit={this.props.handleOnSubmit}>
                <fieldset>
                    <legend>Filter Options</legend>
                    <p>Filter by Price</p>
                    Min Price: <input type='number' min='0' step='0.01' name='minPrice' onChange={this.props.handleChange} /><br />
                    Max Price: <input type='number' min='0' step='0.01' name='maxPrice' onChange={this.props.handleChange} />
                    <p>Filter by Sweetness</p>
                    <label htmlFor='sweet'>Sweet:</label>
                    <input type='radio' name='sweetnessFilter' id='sweet' value='Sweet' onChange={this.props.handleChange} />
                    <label htmlFor='dry'> Dry:</label>
                    <input type='radio' name='sweetnessFilter' id='dry' value='Dry' onChange={this.props.handleChange} />
                    <label htmlFor='both'> Both:</label>
                    <input type='radio' name='sweetnessFilter' id='both' value='Both' onChange={this.props.handleChange} />
                    <br />
                    <input type='submit' value='Apply Filters' /> 
                </fieldset>
            </form>
        )
    }
}