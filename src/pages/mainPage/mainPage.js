import React from 'react';
import {connect} from 'react-redux';
import './mainPage.less';
import Header from "../../components/header/header";
import TextField from "@material-ui/core/TextField";

class MainPage extends React.Component {

    render() {
        const {user: {name, email, age, gender, education}} = this.props;

        return (
            <div className='main-page'>
                <Header
                    personName={name}
                />
                <div className='content'>
                    <div className='content__title'>Личная информация</div>

                    <TextField
                        disabled
                        id="outlined-name"
                        label="Age"
                        value={age}
                        variant="outlined"
                    />
                    <TextField
                        disabled
                        id="outlined-name"
                        label="Gender"
                        value={gender}
                        variant="outlined"
                        margin='normal'
                    />
                    <TextField
                        disabled
                        id="outlined-name"
                        label="Email"
                        value={email}
                        variant="outlined"
                        margin='normal'
                    />
                    <TextField
                        disabled
                        id="outlined-name"
                        label="Education"
                        value={education}
                        variant="outlined"
                        margin='normal'
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(MainPage);