import React, {useEffect, useRef, useState} from 'react'
import {DirectionsRenderer, DirectionsService} from "@react-google-maps/api";

const options = {
    polylineOptions: {
        strokeColor: '#1565c0',
        strokeOpacity: 1.0,
        strokeWeight: 5
    }
};

const DrawRoute = React.memo(({origin, destination, travelMode}) => {
    const [directions, setDirections] = useState();
    const count = useRef(0);

    const directionServiceCallback = (result, status) => {
        if (status === "OK" && count.current === 0) {
            count.current += 1;
            setDirections(result);
        }
    }

    useEffect(() => {
        count.current = 0;
    }, [origin.location.lat, origin.location.lng, destination.location.lat, destination.location.lng, travelMode]);

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
            {directions && (
                <DirectionsRenderer directions={directions} options={options}/>
            )}
        </>
    )
});

export {DrawRoute}
