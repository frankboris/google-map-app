import React from "react";
import {DistanceMatrixService} from "@react-google-maps/api";

const DistanceMatrixComp = React.memo(({origins, destinations, travelMode, callback}) => {
    const originLocations = origins.filter(e => e.location);
    const destinationLocations = destinations.filter(e => e.location);
    return (
        originLocations.length > 0 && destinationLocations.length > 0 &&
        <DistanceMatrixService
            options={{
                origins: originLocations.map(origin => origin.location),
                destinations: destinationLocations.map(origin => origin.location),
                travelMode: travelMode,
            }}
            callback={callback}
        />
    )
});

export {DistanceMatrixComp}
