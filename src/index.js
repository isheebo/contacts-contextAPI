import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contacts from './containers/Contacts';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const App = () => (
    <Provider>
        <BrowserRouter>
            <div className="app">
                <Header branding="Contacts Manager" />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/contacts/add" component={AddContact} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
