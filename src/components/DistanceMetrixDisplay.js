import React from 'react'
import {DistanceItem} from "./DistanceItem";

const DistanceMetrixDisplay = React.memo(({origins, destinations, distanceMetrix}) => {
    const {rows} = distanceMetrix || {};

    const compareDestinationByDistance = (dest1, dest2) => {
        if (dest1.distance?.value < dest2.distance?.value) return -1;
        if (dest1.distance?.value > dest2.distance?.value) return 1;
        return 0
    }

    const elements = rows && rows[0] ? rows[0].elements.sort(compareDestinationByDistance) : [];

    return (distanceMetrix && elements.length > 0 &&
        <div className="distance-matrix-results">
            {elements.map((result, index) =>
                destinations[index] ? <DistanceItem
                    origin={origins[0]}
                    destination={destinations[index]}
                    result={result}
                    key={index}
                /> : <div key={index}/>
            )}
        </div>
    )
})

export {DistanceMetrixDisplay}
