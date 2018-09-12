import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
    labelText,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => (
    <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
            type={type}
            className={classnames('form-control form-control-lg', {
                'is-invalid': error
            })}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {error && <div className="invalid-feedback"> {error} </div>}
    </div>
);

TextInputGroup.defaultProps = {
    type: 'text'
};

TextInputGroup.propTypes = {
    type: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextInputGroup;
