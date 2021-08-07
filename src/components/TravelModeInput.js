import React from "react";
import {CheckedRadioIcon} from "./Icons/CheckedRadioIcon";
import {RadioIcon} from "./Icons/RadioIcon";

const TravelModeItem = ({mode, active, onSelect}) => (
    <div className={active ? 'travel-mode-item active' : 'travel-mode-item'} onClick={() => onSelect(mode.id)}>
        {active && <CheckedRadioIcon size={12} color={'#DDDDDD'}/>}
        {!active && <RadioIcon size={12} color={'#041e79'}/>}
        <label>{mode.name}</label>
    </div>
)

function TravelModeInput({value, choices, onTravelModeChanged}) {
    return (
        <div className="travel-mode-input">
            {choices.map(mode =>
                <TravelModeItem
                    mode={mode}
                    active={mode.id === value}
                    onSelect={onTravelModeChanged}
                    key={mode.id}
                />
            )}
        </div>
    )
}

export {TravelModeInput}
