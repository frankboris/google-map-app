import React from 'react'
import {GoogleMap, LoadScript} from "@react-google-maps/api";
import {
    API_KEY,
    CONTAINER_STYLE,
    DEFAULT_CENTER,
    DEFAULT_LANGUAGE,
    DEFAULT_MAP_ID, DEFAULT_MAP_OPTIONS,
    DEFAULT_ZOOM,
    LIBRAIRIES
} from "../constants";
import {Loader} from "./Loader";

const MapComp = React.memo(({children}) => {
    return (
        <LoadScript
            id={DEFAULT_MAP_ID}
            googleMapsApiKey={API_KEY}
            libraries={LIBRAIRIES}
            language={DEFAULT_LANGUAGE}
            loadingElement={<Loader/>}
        >
            <GoogleMap
                mapContainerStyle={CONTAINER_STYLE}
                center={DEFAULT_CENTER}
                zoom={DEFAULT_ZOOM}
                options={DEFAULT_MAP_OPTIONS}
            >
                {children}
            </GoogleMap>
        </LoadScript>
    )
});

export {MapComp}
