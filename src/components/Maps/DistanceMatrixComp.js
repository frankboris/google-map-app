import React, {useEffect, useRef} from "react";
import {DistanceMatrixService} from "@react-google-maps/api";

const DistanceMatrixComp = React.memo(({origins, destinations, travelMode, callback}) => {
    const count = useRef(0);
    const originLocations = origins.filter(e => e.location);
    const destinationLocations = destinations.filter(e => e.location);

    const matrixServiceCallback = (result) => {
        if (count.current === 0) {
            count.current += 1;
            callback(result);
        }
    }

    useEffect(() => {
        count.current = 0;
    }, [origins, destinations, travelMode]);

    return originLocations.length > 0 && destinationLocations.length > 0 && (
        <DistanceMatrixService
            options={{
                origins: originLocations.map(origin => origin.location),
                destinations: destinationLocations.map(origin => origin.location),
                travelMode: travelMode,
            }}
            callback={matrixServiceCallback}
        />
    )
});

export {DistanceMatrixComp}
