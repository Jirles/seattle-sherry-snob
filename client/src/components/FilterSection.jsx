import React from 'react';

export const FilterSection = (props) => {

    return(

        <div className='col-12 p1'>
            <fieldset className='col-4 mx-auto'>
                <legend>Filter Options</legend>
                <p>Filter by Price</p>
                Min Price: <input type='number' min='0' step='0.01' name='minPrice' onChange={props.handleChange} /><br />
                Max Price: <input type='number' min='0' step='0.01' name='maxPrice' onChange={props.handleChange} />
                <p>Filter by Sweetness</p>
                <label htmlFor='sweet'>Sweet:</label>
                <input type='radio' name='sweetnessFilter' id='sweet' value='Sweet' onChange={props.handleChange} />
                <label htmlFor='dry'> Dry:</label>
                <input type='radio' name='sweetnessFilter' id='dry' value='Dry' onChange={props.handleChange} />
                <label htmlFor='both'> Both:</label>
                <input type='radio' name='sweetnessFilter' id='both' value='Both' onChange={props.handleChange} />
                
            </fieldset>
        </div>
        
    )
}