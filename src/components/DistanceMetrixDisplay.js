import React from 'react'
import {DistanceItem} from "./DistanceItem";

const DistanceMetrixDisplay = React.memo(({origins, destinations, distanceMetrix}) => {
    const {rows} = distanceMetrix || {};

    const compareDestinationByDistance = (dest1, dest2) => {
        if (dest1.distance?.value < dest2.distance?.value) return -1;
        if (dest1.distance?.value > dest2.distance?.value) return 1;
        return 0
    }

    const results = rows && rows[0] ? rows[0].elements.map((item, index) => ({
        ...item,
        origin: origins[0],
        destination: destinations[index]
    })) : [];

    const orderedList = results.sort(compareDestinationByDistance);

    return (distanceMetrix && orderedList.length > 0 &&
        <div className="distance-matrix-results">
            {orderedList.map((result, index) =>
                destinations[index] ? (
                    <DistanceItem
                        result={result}
                        key={index}
                    />
                ) : <div key={index}/>
            )}
        </div>
    )
})

export {DistanceMetrixDisplay}
