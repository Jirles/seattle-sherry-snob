import React from 'react';
import {filterSherryResults} from '../actions';
// need to connect filter to store so i can update state

export const FilterSection = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <fieldset>
                <legend>Filter Options</legend>
                <p>Filter by Price</p>
                Min Price: <input type='number' min='0' step='0.01' name='minPrice' /><br />
                Max Price: <input type='number' min='0' step='0.01' name='maxPrice' />
                <p>Filter by Sweetness</p>
                <label htmlFor='sweet'>Sweet:</label>
                <input type='radio' name='sherryType' id='sweet' />
                <label htmlFor='dry'> Dry:</label>
                <input type='radio' name='sherryType' id='dry' />
                <label htmlFor='both'> Both:</label>
                <input type='radio' name='sherryType' id='both' defaultChecked/>
                <br />
                <input type='submit' value='Apply Filters' />
            </fieldset>
        </form>
    )
    
}