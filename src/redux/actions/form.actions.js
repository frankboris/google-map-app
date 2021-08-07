import * as types from "../types/form.types";

export const updateOrigin = (origin, index) => {
    return {
        type: types.UPDATE_ORIGIN,
        index: index,
        payload: origin
    };
};

export const updateDestination = (destination, index) => {
    return {
        type: types.UPDATE_DESTINATION,
        index: index,
        payload: destination
    };
};

export const removeOrigin = (index) => {
    return {
        type: types.REMOVE_ORIGIN,
        payload: index
    };
};

export const removeDestination = index => {
    return {
        type: types.REMOVE_DESTINATION,
        payload: index
    };
};

export const setTravelMode = mode => {
    return {
        type: types.SET_TRAVEL_MODE,
        payload: mode
    };
};
