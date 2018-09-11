import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    state = {
        displayContactInfo: true
    };

    toggleContactDisplay = () => {
        const { displayContactInfo } = this.state;
        this.setState({ displayContactInfo: !displayContactInfo });
    };

    render() {
        const { name, email, phone } = this.props;
        const { displayContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}
                    <i
                        className="fas fa-sort-down"
                        onClick={this.toggleContactDisplay}
                    />
                </h4>
                {displayContactInfo && (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                )}
            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Contact;
