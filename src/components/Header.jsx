import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ branding }) => (
    <div>
        <h1>{branding}</h1>
    </div>
);

Header.defaultProps = {
    branding: 'Contacts'
};

Header.propTypes = {
    branding: PropTypes.string
};

export default Header;
