import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from "./userReducer";
import userRegistrationReducer from "./userRegistrationReducer";
import appReducer from "./appReducer";
import menuReducer from "./menuReducer";

const form = formReducer;

const applicationReducer = combineReducers({
    form,
    user: userReducer,
    usersRegistration: userRegistrationReducer,
    app: appReducer,
    routing: routerReducer,
    menu: menuReducer,
});

const rootReducer = (state, action) => applicationReducer(state, action);

export default rootReducer;