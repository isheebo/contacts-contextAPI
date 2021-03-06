import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Consumer } from '../../Context';

class Contact extends React.Component {
    state = {
        displayContactInfo: true
    };

    toggleContactDisplay = () => {
        const { displayContactInfo } = this.state;
        this.setState({ displayContactInfo: !displayContactInfo });
    };

    onDeleteContact = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    };

    render() {
        const { name, email, phone, id } = this.props;
        const { displayContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
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
                                    onClick={this.onDeleteContact.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                />
                                <Link to={`/contacts/edit/${id}`}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: '#777',
                                            marginRight: '1rem'
                                        }}
                                    />
                                </Link>
                            </h4>
                            {displayContactInfo && (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            )}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Contact;
