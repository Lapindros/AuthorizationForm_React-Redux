import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const form = formReducer.plugin({
    loginForm: loginReducer.form,
    registerForm: registerReducer.form
});

const applicationReducer = combineReducers({
    form,
    user: userReducer,
    users: usersReducer,

});

const rootReducer = (state, action) => applicationReducer(state, action);

export default rootReducer;
