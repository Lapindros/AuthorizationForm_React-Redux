import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {Route, BrowserRouter} from 'react-router-dom';
import './../authPage/authPage.less';
import Button from "../../components/form/button/buttonComponent";
import TextField from "../../components/form/textField/textField";
import userActions from "../../actions/userActions";

const FORM_NAME = "loginForm";

class AuthPage extends React.Component {

    constructor(props) {
        super(props);
    }

    submit = (values) => {

        userActions.login(values);
        //console.log(this.props.formValues);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className='login'>
                <h1 className='login-title'>Please, login</h1>
                <form
                    className='login-form'
                    onSubmit={handleSubmit(this.submit)}
                    noValidate
                >
                    <Field
                        name="login"
                        component={TextField}
                        labeltext="login"
                    />
                    <Field
                        name="password"
                        component={TextField}
                        labeltext="password"
                    />
                    <Button
                        name="log-in"
                        textButton="log-in"
                    />
                    <Button
                        name="register"
                        textButton="Register"
                    />
                </form>
            </div>
        );
    }
}

const form = reduxForm({
    form: FORM_NAME,
    destroyOnUnmount: true,
})(AuthPage);

const mapStateToProps = state => {

    return {
        formValues: state.form[FORM_NAME]
    }
}

export default connect(mapStateToProps)(form);