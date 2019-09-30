import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.less';
import ButtonComponent from "../form/button/buttonComponent";
import TextField from "../form/textField/textField";
import Select from "../form/select/select";
import AuthPage from "../../pages/authPage/authPage";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app-wrapper'>
                    <AuthPage/>
            </div>
        );
    }
}

export default App;