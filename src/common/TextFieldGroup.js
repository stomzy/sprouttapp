import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
        <div className="form-group form-primary">
            <input type={type} name={name} className="form-control"
            value={value} onChange={onChange} placeholder={placeholder} 
             disabled={disabled} required="" />
            <span className="form-bar"></span>
            <label className="float-label">{label}</label>
        </div>
    )
}

TextFieldGroup.prototypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;