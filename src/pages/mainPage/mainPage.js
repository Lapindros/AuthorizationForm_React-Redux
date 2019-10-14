import React from 'react';
import {connect} from 'react-redux';
import './mainPage.less';
import Button from "../../components/form/button/buttonComponent";
import userActions from "../../actions/userActions";

class MainPage extends React.Component {

    logout = () => {
        userActions.logout();
        this.props.history.push('/');
    };

    render() {
        const {user: {name, email, age, gender, education}} = this.props;

        return (
            <div className='form'>
                <div className='form__title'>Hello, {name}</div>
                <div className='main-content'>
                    <span>Возраст: {age}</span>
                    <span>Пол: {gender}</span>
                    <span>Email: {email}</span>
                    <span>Образование: {education}</span>
                </div>
                <Button
                    onClick={this.logout}
                    textButton="logout"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('MainPage', state);
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(MainPage);