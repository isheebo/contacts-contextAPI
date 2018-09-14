import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <h1 className="display-4 mb-3">
            <span className="text-danger">404 Page Not Found</span>
        </h1>
        <p className="lead">Sorry, the page you are looking for does not exist.</p>
        <p className="lead">
            Lets get you back to <Link to="/"> home</Link>
        </p>
    </div>
);
