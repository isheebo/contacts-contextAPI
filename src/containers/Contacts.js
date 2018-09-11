import React from 'react';
import Contact from '../components/Contact';

class Contacts extends React.Component {
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
        ]
    };

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} {...contact} />
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;
