import React from 'react';
import PropTypes from 'prop-types';

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
        contacts: [
            {
                id: 1,
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                phone: '070-123-4567'
            },
            {
                id: 2,
                name: 'John Doe',
                email: 'j.doe@example.com',
                phone: '070-996-4567'
            },
            {
                id: 3,
                name: 'Ishe Katabazi',
                email: 'ishe.katabazi@gmail.com',
                phone: '070-800-0800'
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

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
