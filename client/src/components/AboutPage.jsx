import React from 'react';

export const AboutPage = () => {
    return (
        <div className='p2'>
            <h1>About Us</h1>
            <figure className='col-12 py3'>
                <iframe title='A video from the sitcom Frasier where Niles first suggests they drink sherry.' src="https://www.youtube.com/embed/tRlC1iwrBUc" width="560" height="315" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className='center shadow'></iframe>
            </figure>
            <blockquote className='h3 italic mb2'>Sherry, Niles?</blockquote>
            <div className='flex col-12 mt3'>
                <div className='col-6 inline'>
                <p>
                    Sherry, in the immortal words of the great playwright and novelist, W. Somerset Maugham, is truly the civilized drink. For 11 years, we brothers Crane quaffed sherry each week. Now, we would like to invite you to join us in enjoying the same spirit that has bolstered our spirits through countless (but perhaps somewhere around 264) trials and tribulations. 
                </p>
                <p>
                    The <span className='italic'>Seattle Sherry Snob</span> - and we wear that title with pride - aims to be your sherry sherpa, guiding you through the inhostpitable wilderness of ignorance to the verdant pastures of sherry Shangri-La. We have amassed a collection of available vintages for your perusal and collated comments from your fellow sherry enthusiasists. If you are a true sherry novice, please see our 'Sherry 101' page to learn more about this divine drink.
                </p>
                <p>
                    In closing, my brother, Niles, and I have been fortified by this fortified wine for over a decade. We hope that you too may find a modicum of comfort in her warm embrace. Welcome, and please drink responsibly.
                </p> 
                </div>
                <figure className='col-6'>
                    <iframe title='Frasier pulls wine from a shelf to see Niles hiding behind them.' src="https://giphy.com/embed/126bkuMUp4KlZS" width="480" height="386" frameBorder="0" className="giphy-embed shadow" allowFullScreen></iframe>
                </figure>
            </div>
        </div>
    )
}