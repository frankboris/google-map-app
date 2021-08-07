import React, {useState} from 'react'
import {AddressInput} from "./AddressInput";
import {TravelModeInput} from "./TravelModeInput";
import {DRIVING, TRANSIT, WALKING} from "../constants";
import {DistanceMetrixDisplay} from "./DistanceMetrixDisplay";

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
                    <TravelModeInput
                        value={travelMode}
                        choices={travelModes}
                        onTravelModeChanged={setTravelMode}
                    />
                    {origins.map((origin, index) => (
                        <AddressInput
                            placeholder="Adresse de départ. Ex : Paris, France"
                            onAddressChanged={updateOrigin}
                            index={index}
                            onRemoveInput={removeOrigin}
                            closable={origins.length > 1}
                            key={index}
                        />
                    ))}
                    {destinations.map((destination, index) => (
                        <AddressInput
                            placeholder="Adresse d'arrivée. Ex : Lyon, France"
                            onAddressChanged={updateDestination}
                            index={index}
                            onRemoveInput={removeDestination}
                            closable={destinations.length > 1}
                            key={index}
                        />
                    ))}
                    <div>
                        <button className="btn-add" onClick={() => updateDestination({})}>Ajouter une destination
                        </button>
                    </div>
                </div>
                <DistanceMetrixDisplay
                    distanceMetrix={distanceMetrix}
                />
                <div style={{height: 1000}}/>
            </div>
            <div className="sidebar-close" onClick={toggleSidebar}>
                <div className="sidebar-toggle">
                </div>
            </div>
        </aside>
    )
});

export {Sidebar}
