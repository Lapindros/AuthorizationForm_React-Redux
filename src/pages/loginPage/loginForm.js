import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import Button from "../../components/form/button/buttonComponent";
import TextField from "../../components/form/textField/textField";
import userActions from "../../actions/userActions";
import AppActions from "../../actions/appActions";
import PageConstants from "../../constants/pageConstants";
import RouterActions from '../../actions/routerActions';

const FORM_NAME = "loginForm";

const required = value => !value && 'Required field';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

  moveToRegistration = () => {
    AppActions.changePage({
      page: PageConstants.PageRegistration,
    })
  };

    submit = (values) => {
        const {users} = this.props;
        const UserFound = users.find(item => item.email === values.email && item.password === values.password);
        if (UserFound) {
            userActions.login(UserFound);
          RouterActions.move('/main');
        } else {
            if (confirm("Этого пользователя нет в системе, хотите зарегистрироваться?"))
              AppActions.changePage({
                page: PageConstants.PageRegistration
              })
        }
    };

    render() {
        const {handleSubmit, invalid} = this.props;
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
                    text="LOG-IN"
                    color={invalid ? "secondary" : "success"}
                    isBlock
                    disabled={invalid}
                />
                <Button
                    text="to registration"
                    color="link"

                    onClick={this.moveToRegistration}
                />
            </form>
        );
    }
}

const form = reduxForm({
    form: FORM_NAME,
    destroyOnUnmount: true,
})(LoginForm);

const mapStateToProps = state => {
    console.log(state);
    return {
        users: state.usersRegistration,
    }
};

export default connect(mapStateToProps)(form);