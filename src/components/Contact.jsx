import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    state = {
        displayContact: true
    };

    toggleContactDisplay = (name, event) => {
        console.log(name); // returns the name right here
        this.setState({ displayContact: false });
    };

    render() {
        const { name, email, phone } = this.props;
        const { displayContact } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}
                    <i
                        className="fas fa-sort-down"
                        onClick={this.toggleContactDisplay.bind(this, name)}
                    />
                </h4>
                {displayContact ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : null}
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
