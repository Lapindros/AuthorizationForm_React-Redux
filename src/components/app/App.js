import React from 'react';
import { Provider} from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from "../../pages/loginPage/loginPage";
import RegPage from "../../pages/regPage/regPage";
import MainPage from "../../pages/mainPage/mainPage";
import store from "../../createStore";
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history"

import '../../content/less/main.less'
import {Redirect} from "react-router";

const history = createBrowserHistory();


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app-wrapper'>
                <Provider store={store}>
                    <Router history={history}>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/register" component={RegPage} />
                    <Route path="/main" component={MainPage} />
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;