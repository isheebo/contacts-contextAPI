import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ branding }) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">
                {branding}
            </a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home <i className="fas fa-home" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacts/add" className="nav-link">
                            Add Contact <i className="fas fa-plus" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
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
