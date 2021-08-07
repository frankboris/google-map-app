import React, {useState} from 'react'
import {DirectionsRenderer, DirectionsService} from "@react-google-maps/api";

const polylineOptions = {
    strokeColor: '#1565c0',
    strokeOpacity: 1.0,
    strokeWeight: 5
};

const DrawRoute = React.memo(({origin, destination, travelMode}) => {
    const [direction, setDirection] = useState('');

    const directionServiceCallback = (response) => {
        if (response && response.status === 'OK') {
            setDirection(response);
        }
    }

    return (
        <>
            <DirectionsService
                options={{
                    destination: origin.location,
                    origin: destination.location,
                    travelMode: travelMode
                }}
                callback={directionServiceCallback}
            />
            {direction !== '' &&
            <DirectionsRenderer
                options={{
                    directions: direction,
                    polylineOptions: polylineOptions
                }}
            />}
        </>
    )
});

export {DrawRoute}
