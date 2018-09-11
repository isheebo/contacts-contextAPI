import React from 'react';
import Contact from '../components/Contact';
import { Consumer } from '../Context';

class Contacts extends React.Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <Contact key={contact.id} {...contact} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
