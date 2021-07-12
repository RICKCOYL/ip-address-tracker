import React from 'react';

const Location = ({ location }) => {
    return (
        <div id='location'>
            <div>
                <h5>IP ADDRESS</h5>
                <p>{location.ip}</p>
            </div>
            <div>
                <h5>LOCATION</h5>
                <p>{location.city}</p>
            </div>
            <div>
                <h5>FLAG</h5>
                <p><img src={location.country_flag} alt="" /></p>
            </div>
            <div>
                <h5>CONTINENT</h5>
                <p>{location.continent_name}</p>
            </div>
        </div>
    );
};

export default Location;
