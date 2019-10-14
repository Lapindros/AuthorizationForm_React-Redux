import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from "./userReducer";
import userRegistrationReducer from "./userRegistrationReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const form = formReducer.plugin({
    // loginForm: loginReducer.form,
    registerForm: registerReducer.form
});

const applicationReducer = combineReducers({
    form,
    user: userReducer,
    usersRegistration: userRegistrationReducer,
});

const rootReducer = (state, action) => applicationReducer(state, action);

export default rootReducer;