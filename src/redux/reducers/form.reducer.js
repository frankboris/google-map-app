import * as types from "../types/form.types";
import {DRIVING} from "../../constants";

const initialState = {
    origins: [{}],
    destinations: [{}],
    travelMode: DRIVING,
};

const formReducer = (state = initialState, action) => {
    let newItems;
    switch (action.type) {
        case types.UPDATE_ORIGIN:
            if (typeof action.index !== 'undefined') {
                if (action.index < state.origins.length) {
                    newItems = [...state.origins];
                    newItems.splice(action.index, 1, action.payload);
                    return {...state, origins: newItems};
                }
            } else {
                return {...state, origins: [...state.origins, action.payload]};
            }
            return state;
        case types.UPDATE_DESTINATION:
            if (typeof action.index !== 'undefined') {
                if (action.index < state.destinations.length) {
                    newItems = [...state.destinations];
                    newItems.splice(action.index, 1, action.payload);
                    return {...state, destinations: newItems};
                }
            } else {
                return {...state, destinations: [...state.destinations, action.payload]};
            }
            return state;
        case types.REMOVE_ORIGIN:
            newItems = [...state.origins];
            newItems = newItems.filter((e, i) => i !== action.payload);
            return {...state, origins: newItems};
        case types.REMOVE_DESTINATION:
            newItems = [...state.destinations];
            newItems = newItems.filter((e, i) => i !== action.payload);
            return {...state, destinations: newItems};
        case types.SET_TRAVEL_MODE:
            return {
                ...state,
                travelMode: action.payload
            };
        default:
            return state;
    }
};

export default formReducer;
