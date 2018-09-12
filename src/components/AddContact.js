import React from 'react';
import uuid from 'uuid';
import { Consumer } from '../Context';

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = (dispatch, event) => {
        event.preventDefault(); // prevents submitting to a file

        const { name, email, phone } = this.state;
        dispatch({
            type: 'ADD_CONTACT',
            payload: { id: uuid(), name, email, phone }
        });

        this.setState({ name: '', email: '', phone: '' });
    };

    render() {
        const { name, email, phone } = this.state;
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
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="name"
                                            placeholder="Enter Name..."
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            name="email"
                                            placeholder="Enter Email..."
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="phone"
                                            placeholder="Enter Phone..."
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </div>
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

    // render() {
    //
    // }
}

export default AddContact;
