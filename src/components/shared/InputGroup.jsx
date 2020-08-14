import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const InputGroup = ({ label, name, value, placeholder, type, onChange, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name}  
                className={classnames("form-control form-control-lg", {
                    "is-invalid": error 
                })}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                data-testid="input-field"
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

InputGroup.defaultProps = {
    name: 'text file',
    label: 'upload file',
    placeholder: 'text file',
    type: 'text'
};

export default InputGroup;