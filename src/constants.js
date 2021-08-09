export const API_KEY = 'API_KEY';
export const LIBRAIRIES = ['drawing', 'places', 'visualization'];

export const DRIVING = 'DRIVING';
export const TRANSIT = 'TRANSIT';
export const WALKING = 'WALKING';


export const CONTAINER_STYLE = {
    height: '100vh', width: '100%'
};

export const DEFAULT_CENTER = {
    lat: 46,
    lng: 1
};
export const DEFAULT_MAP_OPTIONS = {
    scrollwheel: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
};
export const DIRECTIONS_OPTIONS = { suppressMarkers: true, preserveViewport: true };
export const DEFAULT_ZOOM = 7;
export const DEFAULT_LANGUAGE = 'fr';
export const DEFAULT_MAP_ID = 'google-map-script';

export const MOCK_DESTINATIONS_DATA = [
    {
        id: 1,
        title: 'Falun',
        location: { lat: 60.610361157011646, lng: 15.63610136902125 },
    },
]
export const MOCK_ORIGINS_DATA = [
    {
        id: 2,
        title: 'Uppsala',
        location: { lat: 59.86700302991904, lng: 17.639901897585162 },
    },
]

