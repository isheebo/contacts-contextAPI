import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Context = React.createContext();
export const { Consumer } = Context;

const reducer = (state, action) => {
    switch (action.type) {
    case 'DELETE_CONTACT':
        return {
            ...state,
            contacts: state.contacts.filter(
                contact => contact.id !== action.payload
            )
        };
    case 'ADD_CONTACT':
        return {
            ...state,
            contacts: [...state.contacts, action.payload]
        };
    default:
        return state;
    }
};

export class Provider extends React.Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    async componentDidMount() {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );

        this.setState({ contacts: response.data });
    }

    render() {
        const { children } = this.props;
        const { contacts, dispatch } = this.state;
        // we may export the whole state object by using `this.state` as value
        // when we have a consumer, it consumes the entire `value` from consumer

        // down here 👇🏻 I am exporting state but in a destructured way
        return (
            <Context.Provider value={{ contacts, dispatch }}>
                {children}
            </Context.Provider>
        );
    }
}

Provider.propTypes = {
    children: PropTypes.node.isRequired
};
