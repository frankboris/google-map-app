import React from 'react'
import {DrawRoute} from "./DrawRoute";

const DrawRoutes = React.memo(({origins, destinations, travelMode}) => {
    const originLocations = origins.filter(e => e.location);
    const destinationLocations = destinations.filter(e => e.location);

    return originLocations.length > 0 && destinationLocations.length > 0 ?
        originLocations.filter(origin => origin.location).map((origin, x) =>
            destinationLocations.filter(origin => origin.location).map((destination, y) =>
                <DrawRoute
                    origin={origin}
                    destination={destination}
                    travelMode={travelMode}
                    key={x + '' + y}
                />
            )
        ) : <span/>

});

export {DrawRoutes}
