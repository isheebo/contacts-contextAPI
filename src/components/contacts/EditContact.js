import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Consumer } from '../../Context';
import TextInputGroup from '../layouts/TextInputGroup';

class EditContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        this.setState({
            name: response.data.name,
            phone: response.data.phone,
            email: response.data.email
        });
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = async (dispatch, event) => {
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

        const { id } = this.props.match.params;

        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            { name, email, phone }
        );
        dispatch({ type: 'UPDATE_CONTACT', payload: response.data });

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
                                <h1>Edit contact</h1>
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
                                        value="Update Contact"
                                        className="btn btn-block btn-success"
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

EditContact.propTypes = {
    history: PropTypes.any.isRequired,
    match: PropTypes.object.isRequired
};

export default EditContact;
