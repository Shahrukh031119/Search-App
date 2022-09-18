import React from 'react';
import './SuggestionBox.scss';

const SuggestionBox = () => {
    return(
        <div className='Result' id='property'>
            <div className='LatestTrends'><b>Latest Trends</b></div>
            <div className='PopularSuggestions'><b>Popular Suggestions</b></div>
        </div>
    )
}

export default SuggestionBox;