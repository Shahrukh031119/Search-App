import React from 'react';
import './SearchTab.scss';
import SearchIcon from '@mui/icons-material/Search';
import SuggestionBox from './SuggestionBox';
import {useState} from 'react';

const SearchTab = () => {

    // hook to display suggestion box when the search tab is clicked
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        console.log("search tab clicked");
        console.log(click);
    };

    return(
        <div className='Search'>
            <div className='Input'>
                <input 
                type="text" 
                placeholder="Search" 
                onClick={() => {handleClick()}}
                />
                <div className='SearchIcon'>
                    <SearchIcon color='action' fontSize='large' />
                </div>
            </div>
            {click && ( <SuggestionBox /> )}
        </div>
    )
}

export default SearchTab;

