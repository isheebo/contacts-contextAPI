import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './containers/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <div>
        <Header branding="Contacts Manager" />
        <div className="container">
            <Contacts />
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
