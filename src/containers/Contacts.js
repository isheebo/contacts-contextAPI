import React from 'react';
import Contact from '../components/contacts/Contact';
import { Consumer } from '../Context';

class Contacts extends React.Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-3">
                                <span className="text-danger">Contacts </span>
                                List
                            </h1>

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
