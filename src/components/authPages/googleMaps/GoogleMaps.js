import React from 'react';
import stl from './googleMaps.module.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMaps = () => {
    function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.031 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    }

    window.initMap = initMap;

    return (
        <div>
            <div id={'map'} className={stl.map}></div>
        </div>
    );
};

export default GoogleMaps;