import React, {useState} from 'react';
import './App.scss';
import {Sidebar} from "./components/Sidebar";
import {MapComp} from "./components/MapComp";
import {DistanceMatrixComp} from "./components/Maps/DistanceMatrixComp";
import {DrawRoutes} from "./components/Maps/DrawRoutes";

function App({form, actions}) {
    const {origins, destinations, travelMode} = form;
    const [distanceMetrix, setDistanceMetrix] = useState(null);

    return (
        <main className="main">
            <MapComp>
                <Sidebar
                    form={form}
                    actions={actions}
                    distanceMetrix={distanceMetrix}
                />
                <DistanceMatrixComp
                    origins={origins}
                    destinations={destinations}
                    travelMode={travelMode}
                    callback={setDistanceMetrix}
                />
                <DrawRoutes
                    origins={origins}
                    destinations={destinations}
                    travelMode={travelMode}
                />
            </MapComp>
        </main>
    )
}

export default App;
