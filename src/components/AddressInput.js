import React, {useState} from "react";
import {Autocomplete} from "@react-google-maps/api";
import {AddressField} from "./AddressField";

const AddressInput = React.memo(({index, closable, placeholder, onAddressChanged, onRemoveInput}) => {
    const [autocomplete, setAutocomplte] = useState(null);

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            const location = place.geometry.location;
            onAddressChanged({location}, index);
        }
    }

    const clearInput = () => {
        onRemoveInput(index);
    }

    return (
        <Autocomplete
            onLoad={element => setAutocomplte(element)}
            onPlaceChanged={onPlaceChanged}
            restrictions={{country: ["fr"]}}
            types={['address']}
        >
            <AddressField
                placeholder={placeholder}
                onRemoveField={clearInput}
                closable={closable}
            />
        </Autocomplete>
    )
});

export {AddressInput}
