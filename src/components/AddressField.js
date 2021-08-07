import React from "react";
import {CloseIcon} from "./Icons/CloseIcon";

const AddressField = React.memo(({closable, placeholder, onRemoveField}) => {
    return (
        <div className="address-input-container">
            <div className="input-icon">
                <input
                    type='text'
                    placeholder={placeholder}
                    className="address-input"
                />
                {closable &&
                <span className="close-icon" onClick={onRemoveField}>
                    <CloseIcon size={12} color={'#8d8d8d'}/>
                </span>}
            </div>
        </div>
    )
});

export {AddressField}
