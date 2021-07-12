import React from 'react';
import arrow from '../assests/images/icon-arrow.svg';

const Input = ({ handleChange, state }) => {
    return (
        <div id='background-img'>
            <form>
                <h1>IP Address Tracker</h1>
                <div id='input-div'>
                    <input type="text" onChange={handleChange} value={state} />
                    <button id="arrow" type="submit">
                        <img src={arrow} alt="search" />
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Input;
