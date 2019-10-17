import React from 'react';
import {Provider} from 'react-redux';
import LoginPage from "../../pages/loginPage/loginPage";
import RegPage from "../../pages/regPage/regPage";
import MainPage from "../../pages/mainPage/mainPage";
import store from "../../createStore";
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history"
import '../../content/less/main.less'

const history = createBrowserHistory();

class App extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route exact path="/" component={LoginPage}/>
                    <Route path="/register" component={RegPage}/>
                    <Route path="/main" component={MainPage}/>
                </Router>
            </Provider>
        );
    }
}

export default App;