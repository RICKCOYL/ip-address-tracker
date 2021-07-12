//import React, { useState } from 'react';
//import GoogleMapReact from 'google-map-react';
import mapImg from '../assests/images/googleimg.png';
//const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Maps = () => {
    //const defaultProps = {
    //    center: {
    //        lat: 10.99835602,
    //        lng: 77.01502627
    //    },
    //    zoom: 11
    //};

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <img style={{ height: '100vh', width: '100%' }} src={mapImg} alt="" />
        </div>
    );
};

export default Maps;
