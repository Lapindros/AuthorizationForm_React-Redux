import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import userActions from "../../actions/userActions";
import RadioButtons from "../../components/form/radioButton/radioButton";
import Button from "../../components/form/button/buttonComponent";
import TextField from "../../components/form/textField/textField";
import Select from "../../components/form/selectComponent/selectComponent";
import LoginPage from "../loginPage/loginPage";
import CheckBox from "../../components/form/checkbox/checkbox";

const FORM_NAME = "regForm";

const required = value => !value && 'Required field';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

class RegPage extends React.Component {

    submit = (values) => {
        const {users} = this.props;
        if (users.find(item => item.email === values.email)) {
            return alert('Такой уже существует!');
        }
        userActions.register(values);
        userActions.login(values);
        this.props.history.push('/main');
    };

    render() {
        const {handleSubmit} = this.props;
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
                    textButton="Register"
                />
                <Link to="/" component={LoginPage}>Back to Login</Link>
            </form>
        );
    }
}

const form = reduxForm({
    form: FORM_NAME,
    destroyOnUnmount: true,
})(RegPage);

const mapStateToProps = state => {
    return {
        users: state.usersRegistration,
    }
};

export default connect(mapStateToProps)(form);