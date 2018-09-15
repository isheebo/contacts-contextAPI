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
import NotFound from './components/pages/NotFound';
import EditContact from './components/contacts/EditContact';

const App = () => (
    <Provider>
        {/* using browser router may fail on github pages, so we may use
        HashRouter or add the basename to process.env.PUBLIC_URL */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Header branding="Contacts Manager" />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/contacts/add" component={AddContact} />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/contacts/edit/:id"
                            component={EditContact}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
