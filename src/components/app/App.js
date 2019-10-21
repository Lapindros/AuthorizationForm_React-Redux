import React from 'react';
import { Provider} from 'react-redux';
import LoginPage from "../../pages/loginPage";
import MainPage from "../../pages/mainPage/mainPage";
import store from "../../createStore";
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history"
import '../../content/less/main.less'

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
                    <Route path="/main" component={MainPage} />
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;