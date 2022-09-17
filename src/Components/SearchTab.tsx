import React from 'react';
import './SearchTab.scss';
import SearchIcon from '@mui/icons-material/Search';

const SearchTab = () => {
    return(
        <div className='Search'>
            <div className='Input'>
                <input type="text" placeholder="Search" />
                <div className='SearchIcon'><SearchIcon color='action' fontSize='large' /></div>
            </div>
            <div className='Result'></div>
        </div>
    )
}

export default SearchTab;

