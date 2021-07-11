import React from 'react';
import arrow from '../assests/images/icon-arrow.svg';

const Input = () => {
    return (
        <div id='background-img'>
            <div>
                <h1>IP Address Tracker</h1>
                <div id='input-div'>
                    <input type="text" />
                    <img id="arrow" src={arrow} alt="search" />
                </div>
            </div>
        </div>
    );
};

export default Input;
