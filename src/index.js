import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <div>
        <Header branding="Contacts Manager" />
        <div className="container">
            <Contact
                name="Jane Doe"
                email="janedoe@yahoo.com"
                phone="333-333-3333"
            />
            <Contact
                name="Jimmy Taylor"
                email="jimley@gmail.com"
                phone="113-300-8833"
            />
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
