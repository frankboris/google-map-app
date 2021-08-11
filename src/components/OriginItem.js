import React from "react";
import {AddressInput} from "./AddressInput";

const OriginItem = React.memo(({index, value, onRemoveItem, onOriginChanged, ...props}) => {

    const onRemove = () => onRemoveItem(index);

    const onAddressChanged = (location, name) => {
        onOriginChanged({...value, location, name}, index);
    }

    return (
        <div className="origins-item">
            <AddressInput
                onAddressChanged={onAddressChanged}
                onRemoveInput={onRemove}
                {...props}
            />
        </div>
    )
});

export {OriginItem}
