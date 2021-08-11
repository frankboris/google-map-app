import React, {useState} from "react";
import {Autocomplete} from "@react-google-maps/api";
import {AddressField} from "./AddressField";

const AddressInput = React.memo(({closable, placeholder, onAddressChanged, onRemoveInput}) => {
    const [autocomplete, setAutocomplte] = useState(null);

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            const location = place.geometry.location;
            onAddressChanged(location, place.formatted_address);
        }
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
                onRemoveField={onRemoveInput}
                closable={closable}
            />
        </Autocomplete>
    )
});

export {AddressInput}
