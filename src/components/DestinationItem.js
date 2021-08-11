import React from "react";
import {AddressInput} from "./AddressInput";
import {AddressField} from "./AddressField";

const DestinationItem = React.memo(({index, value, label, idPrefix, placeholder, closable, onRemoveItem, onDestinationChanged}) => {

    const onRemove = () => onRemoveItem(index);

    const onFirstNameChanged = (firstName) => {
        onDestinationChanged({...value, firstName}, index);
    }

    const onLastNameChanged = (lastName) => {
        onDestinationChanged({...value, lastName}, index);
    }

    const onAddressChanged = (location, name) => {
        onDestinationChanged({...value, location, name}, index);
    }

    return (
        <div className="destination-item">
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between'}}>
                <div style={{fontWeight: 500}}>Destination N° {index + 1}</div>
                {closable && <button style={closeButtonStyle} onClick={onRemove}>&times;</button>}
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <AddressField
                    style={{width: '50%', paddingRight: 5}}
                    placeholder="Prénom"
                    onChangeText={onFirstNameChanged}
                />
                <AddressField
                    style={{width: '50%', paddingLeft: 5}}
                    placeholder="Nom"
                    onChangeText={onLastNameChanged}
                />
            </div>
            <AddressInput
                placeholder={placeholder}
                onAddressChanged={onAddressChanged}
                label={label}
                idPrefix={idPrefix}
                index={index}
            />
        </div>
    )
});

const closeButtonStyle = {
    fontSize: '2rem',
    cursor: 'pointer',
    padding: 0,
    color: '#ff5722',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderRadius: 20,
    lineHeight: .6,
    height: 20,
    width: 20
}

export {DestinationItem}
