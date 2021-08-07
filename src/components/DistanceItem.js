import React from 'react'

const DistanceItem = React.memo(({origin, destination, result}) => {
    const {status, duration, distance} = result;

    return (
        <table className="distance-matrix-result-item">
            <tbody>
            <tr>
                <td className="label">De :</td>
                <td className="value">
                    <div className="value">{origin}</div>
                </td>
            </tr>
            <tr>
                <td className="label">A :</td>
                <td className="value">
                    <div className="value">{destination}</div>
                </td>
            </tr>
            <tr>
                <td className="label">Durée :</td>
                <td className="value">{status === 'OK' ? duration.text : <div className="error">Trajet impossible</div>}</td>
            </tr>
            <tr>
                <td className="label">Distance :</td>
                <td className="value">{status === 'OK' ? distance.text : <div className="error">Trajet impossible</div>}</td>
            </tr>
            </tbody>
        </table>
    )
})

export {DistanceItem}
