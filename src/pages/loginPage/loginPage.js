import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import Button from "../../components/form/button/buttonComponent";
import TextField from "../../components/form/textField/textField";
import userActions from "../../actions/userActions";
import RegPage from "../regPage/regPage";

const FORM_NAME = "loginForm";

const required = value => !value && 'Required field';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    submit = (values) => {
        const {users} = this.props;
        const UserFound = users.find(item => item.email === values.email && item.password === values.password);
        if (UserFound) {
            userActions.login(UserFound);
            this.props.history.push('/main');
        } else {
            if (confirm("Этого пользователя нет в системе, хотите зарегистрироваться?"))
                this.props.history.push('/register');
        }
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <form
                className='form'
                onSubmit={handleSubmit(this.submit)}
                noValidate
            >
                <div className='form__title'>Please, login</div>
                <Field
                    name="email"
                    component={TextField}
                    labeltext="email"
                    validate={[required, email]}
                />
                <Field
                    name="password"
                    component={TextField}
                    labeltext="password"
                    type="password"
                    validate={required}
                />
                <Button
                    textButton="LOG-IN"
                />
                <Link to="/register" component={RegPage}>to registration</Link>
            </form>
        );
    }
}

const form = reduxForm({
    form: FORM_NAME,
    destroyOnUnmount: true,
})(LoginPage);

const mapStateToProps = state => {
    console.log('loginPage', state);
    return {
        users: state.usersRegistration,
    }
};

export default connect(mapStateToProps)(form);