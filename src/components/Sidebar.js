import React, {useState} from 'react'
import {TravelModeInput} from "./TravelModeInput";
import {DRIVING, TRANSIT, WALKING} from "../constants";
import {DistanceMetrixDisplay} from "./DistanceMetrixDisplay";
import {DestinationItem} from "./DestinationItem";
import {OriginItem} from "./OriginItem";

const travelModes = [
    {
        id: DRIVING,
        name: 'Voiture'
    },
    {
        id: TRANSIT,
        name: 'Metro'
    },
    {
        id: WALKING,
        name: 'Marche'
    }
]

const Sidebar = React.memo(({form, actions, distanceMetrix}) => {
    const [open, setOpen] = useState(true);
    const {origins, destinations, travelMode} = form;
    const {updateOrigin, updateDestination, removeOrigin, removeDestination, setTravelMode} = actions;

    const toggleSidebar = () => {
        setOpen(!open);
    }

    return (
        <aside className={open ? "sidebar" : "sidebar close"}>
            <div className="scroller">
                <h1 className="app-name">Temps et Distance</h1>
                <div className="addresses">
                    <div className="origins">
                        <TravelModeInput
                            value={travelMode}
                            choices={travelModes}
                            onTravelModeChanged={setTravelMode}
                        />
                        <div style={{fontWeight: 500, marginBottom: 5}}>Adresse de départ</div>
                        {origins.map((origin, index) => (
                            <OriginItem
                                placeholder="Ex : Paris, France"
                                onOriginChanged={updateOrigin}
                                index={index}
                                onRemoveItem={removeOrigin}
                                closable={origins.length > 1}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className="destinations">
                        {destinations.map((destination, index) => (
                            <DestinationItem
                                placeholder="Ex : Lyon, France"
                                value={destination}
                                onDestinationChanged={updateDestination}
                                index={index}
                                label="Adresse d'arrivée"
                                idPrefix="destination"
                                onRemoveItem={removeDestination}
                                closable={destinations.length > 1}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className="footer">
                        <button className="btn-add" onClick={() => updateDestination({})}>Ajouter une destination
                        </button>
                    </div>
                </div>
                <DistanceMetrixDisplay
                    origins={origins}
                    destinations={destinations}
                    distanceMetrix={distanceMetrix}
                />
            </div>
            <div className="sidebar-close" onClick={toggleSidebar}>
                <div className="sidebar-toggle">
                </div>
            </div>
        </aside>
    )
});

export {Sidebar}
