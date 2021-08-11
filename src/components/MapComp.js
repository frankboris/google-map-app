import React from 'react'
import {GoogleMap} from "@react-google-maps/api";
import {CONTAINER_STYLE, DEFAULT_CENTER, DEFAULT_MAP_ID, DEFAULT_MAP_OPTIONS, DEFAULT_ZOOM} from "../constants";

const MapComp = React.memo(({children}) => {
    return (
        <GoogleMap
            id={DEFAULT_MAP_ID}
            mapContainerStyle={CONTAINER_STYLE}
            center={DEFAULT_CENTER}
            zoom={DEFAULT_ZOOM}
            options={DEFAULT_MAP_OPTIONS}
        >
            {children}
        </GoogleMap>
    )
});

export {MapComp}
