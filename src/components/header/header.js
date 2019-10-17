import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import userActions from "../../actions/userActions";
import {withRouter} from 'react-router-dom';

class Header extends React.Component {

    logout = () => {
        console.log('logout');
        userActions.logout();
        this.props.history.push('/');
    };

    render() {

        const {personName} = this.props;

        return (
            <AppBar
                position='static'
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        style={{flexGrow: 1}}
                    >
                        Hello, {personName}
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => this.logout()}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

        );
    }
}

export default withRouter(Header);