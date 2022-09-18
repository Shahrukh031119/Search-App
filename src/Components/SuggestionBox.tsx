import React from 'react';
import './SuggestionBox.scss';
import {faker} from '@faker-js/faker';

const SuggestionBox = () => {
    return(
        <div className='Result' id='property'>
            <div className='LatestTrends'>
                <b>Latest Trends</b>
                <div className='LatestItems'>
                    <img src={faker.image.fashion(110,150,true)} alt=""/>
                    <img src={faker.image.fashion(110,150,true)} alt=""/>
                    <img src={faker.image.fashion(110,150,true)} alt=""/>
                    <img src={faker.image.fashion(110,150,true)} alt=""/>
                    <img src={faker.image.fashion(110,150,true)} alt=""/>
                </div>
            </div>
            <div className='PopularSuggestions'>
                <b>Popular Suggestions</b>
                <div className='SuggestionItems'>
                    <div>{faker.commerce.productName()}</div>
                    <div>{faker.commerce.productName()}</div>
                    <div>{faker.commerce.productName()}</div>
                    <div>{faker.commerce.productName()}</div>
                    <div>{faker.commerce.productName()}</div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionBox;