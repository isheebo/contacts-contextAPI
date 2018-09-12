import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './containers/Contacts';
import Header from './components/layouts/Header';
import AddContact from './components/contacts/AddContact';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const App = () => (
    <Provider>
        <div>
            <Header branding="Contacts Manager" />
            <div className="container">
                <AddContact />
                <Contacts />
            </div>
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
