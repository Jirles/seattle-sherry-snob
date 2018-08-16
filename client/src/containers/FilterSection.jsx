import React from 'react';

export default class FilterSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minPrice: '',
            maxPrice: '',
            sweetnessFilter: 'Both'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <form onSubmit={(e) => this.props.handleOnSubmit(e, this.state)}>
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