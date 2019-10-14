import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from "./userReducer";
import userRegistrationReducer from "./userRegistrationReducer";

const form = formReducer;

const applicationReducer = combineReducers({
    form,
    user: userReducer,
    usersRegistration: userRegistrationReducer,
});

const rootReducer = (state, action) => applicationReducer(state, action);

export default rootReducer;