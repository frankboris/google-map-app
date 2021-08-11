import React from "react";
import {CloseIcon} from "./Icons/CloseIcon";

const AddressField = React.memo(({style, closable, placeholder, onRemoveField, onChangeText, ...inputProps}) => {

    const onChange = e => onChangeText && onChangeText(e.target.value)

    return (
        <div style={style} className="address-input-container">
            <div className="input-icon">
                <input
                    type='text'
                    placeholder={placeholder}
                    className="address-input"
                    onChange={onChange}
                    {...inputProps}
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
