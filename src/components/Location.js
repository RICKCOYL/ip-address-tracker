import React from 'react';
import loader from '../assests/images/loader.svg';

const Location = ({ location }) => {
    console.log(location.state);
    const { loading, state } = location;
    return (
        <div id='location'>
            {(loading === true) ? <div id="loader-div"><img id='loader' src={loader} alt="Loading..." /></div> :
                state.code === 422 ? <div id="loader-div">
                    <p>PLEASE ENTER A VALID IP ADDRESS </p>
                </div> : (
                    <>
                        <div>
                            <h5>IP ADDRESS</h5>
                            <p>{state.ip}</p>
                        </div>
                        <div>
                            <h5>LOCATION</h5>
                            <p>{state.location.city}</p>
                        </div>
                        <div>
                            <h5>TIMEZONE</h5>
                            <p>{state.location.timezone}</p>
                        </div>
                        <div>
                            <h5>ISP</h5>
                            <p>{state.as.name}</p>
                        </div>
                    </>
                )}

        </div>
    );
};

export default Location;
