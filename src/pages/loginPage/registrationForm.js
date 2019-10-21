import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import userActions from "../../actions/userActions";
import RadioButtons from "../../components/form/radioButton/radioButton";
import Button from "../../components/form/button/buttonComponent";
import TextField from "../../components/form/textField/textField";
import Select from "../../components/form/selectComponent/selectComponent";

import CheckBox from "../../components/form/checkbox/checkbox";
import PageConstants from "../../constants/pageConstants";
import AppActions from "../../actions/appActions";

const FORM_NAME = "regForm";

const required = value => !value && 'Required field';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

class RegistrationForm extends React.Component {

    submit = (values) => {
        const {users} = this.props;
        if (users.find(item => item.email === values.email)) {
            return alert('Такой уже существует!');
        }
        userActions.register(values);
        userActions.login(values);
        this.props.history.push('/main');
    };

  moveToLogin = () => {
    AppActions.changePage({
      page: PageConstants.PageLogin,
    })
  };

    render() {
        const {handleSubmit, invalid} = this.props;
        return (
            <form
                className='form'
                onSubmit={handleSubmit(this.submit)}
                noValidate
            >
                <div className='form__title'>Please, Register</div>
                <Field
                    name="name"
                    component={TextField}
                    validate={required}
                    labeltext="name"
                    type="text"
                />
                <Field
                    name="email"
                    component={TextField}
                    validate={[required,email]}
                    labeltext="email"
                />
                <Field
                    name="age"
                    component={TextField}
                    labeltext="age"
                />
                <Field
                    name="education"
                    component={Select}
                    labeltext="Выберите образование"
                    items={[
                        {id: 1, value: "Высшее", text: "Высшее"},
                        {id: 2, value: "Среднее", text: "Среднее"}
                    ]}
                />
                <Field
                    name="gender"
                    component={RadioButtons}
                    items={[
                        {id: 1, value: "Мужской", text: "Мужской"},
                        {id: 2, value: "Женский", text: "Женский"}
                    ]}
                />
                <Field
                    name="password"
                    component={TextField}
                    type="password"
                    labeltext="password"
                />
                <Field
                    name="checkbox"
                    component={CheckBox}
                    labeltext="Вы согласны с условиями?"
                    validate={required}
                />
                <Button
                    text="Register"
                    color={invalid ? "secondary" : "success"}
                    isBlock
                    disabled={invalid}
                />
                <Button
                  text="to login form"
                  color="link"

                  onClick={this.moveToLogin}
                />
            </form>
        );
    }
}

const form = reduxForm({
    form: FORM_NAME,
    destroyOnUnmount: true,
})(RegistrationForm);

const mapStateToProps = state => {
    return {
        users: state.usersRegistration,
    }
};

export default connect(mapStateToProps)(form);