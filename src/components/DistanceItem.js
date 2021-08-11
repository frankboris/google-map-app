import React from 'react'

const DistanceItem = React.memo(({origin, destination, result}) => {
    const {status, duration, distance} = result;

    const firstName = destination.firstName || ''
    const lastName = destination.lastName || ''
    const name = `${firstName} ${lastName}`.trim();

    return (
        <div className="distance-matrix-result-item">
            <div className="name">{name}</div>
            <div className="address">{destination.name}</div>
            <div>
                <span className="label">Durée : </span>
                <span className="value">
                    {status === 'OK' ? duration.text : <span className="error">Trajet impossible</span>}
                </span>
            </div>
            <div>
                <span className="label">Distance : </span>
                <span className="value">
                    {status === 'OK' ? distance.text : <span className="error">Trajet impossible</span>}
                </span>
            </div>
        </div>
    )
})

export {DistanceItem}
