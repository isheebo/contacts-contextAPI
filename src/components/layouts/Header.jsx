import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ branding }) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">
                {branding}
            </a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="nav-link">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    branding: 'Contacts'
};

Header.propTypes = {
    branding: PropTypes.string
};

export default Header;