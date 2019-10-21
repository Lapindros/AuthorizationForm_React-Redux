import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from "./userReducer";
import userRegistrationReducer from "./userRegistrationReducer";
import appReducer from "./appReducer";

const form = formReducer;

const applicationReducer = combineReducers({
    form,
    user: userReducer,
    usersRegistration: userRegistrationReducer,
    app: appReducer,
    routing: routerReducer,
});

const rootReducer = (state, action) => applicationReducer(state, action);

export default rootReducer;