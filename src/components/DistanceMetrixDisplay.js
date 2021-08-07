import React from 'react'
import {DistanceItem} from "./DistanceItem";

const DistanceMetrixDisplay = React.memo(({distanceMetrix}) => {
    const {originAddresses, destinationAddresses, rows} = distanceMetrix || {};

    return (distanceMetrix &&
        <div className="distance-matrix-results">
            {rows[0].elements.map((result, index) =>
                <DistanceItem
                    origin={originAddresses[0]}
                    destination={destinationAddresses[index]}
                    result={result}
                    key={index}
                />
            )}
        </div>
    )
})

export {DistanceMetrixDisplay}
