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

    onDeleteContact = () => {
        const { onDeleteHandler } = this.props;
        onDeleteHandler();
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
                        style={{ cursor: 'pointer' }}
                    />

                    <i
                        className="fas fa-trash"
                        style={{
                            cursor: 'pointer',
                            float: 'right',
                            color: '#dc3545'
                        }}
                        onClick={this.onDeleteContact}
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
    phone: PropTypes.string.isRequired,
    onDeleteHandler: PropTypes.func.isRequired
};

export default Contact;
