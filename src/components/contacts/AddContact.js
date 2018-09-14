import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Consumer } from '../../Context';
import TextInputGroup from '../layouts/TextInputGroup';

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = (dispatch, event) => {
        event.preventDefault(); // prevents submitting to a file

        const { name, email, phone } = this.state;
        const { history } = this.props;

        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }

        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }

        dispatch({
            type: 'ADD_CONTACT',
            payload: { id: uuid(), name, email, phone }
        });

        this.setState({ name: '', email: '', phone: '', errors: {} });

        history.push('/');
    };

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                <h1>Add contact</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        labelText="Name"
                                        name="name"
                                        value={name}
                                        placeholder="Enter Name..."
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        labelText="Email"
                                        name="email"
                                        value={email}
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />

                                    <TextInputGroup
                                        labelText="Phone"
                                        name="phone"
                                        value={phone}
                                        placeholder="Enter Phone..."
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />

                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-block btn-light"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

AddContact.propTypes = {
    history: PropTypes.any.isRequired // used any for lack of a better prop type
};

export default AddContact;
