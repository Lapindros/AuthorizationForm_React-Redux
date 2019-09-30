import Constants from '../constants/сonstants.js';
import { dispatch } from '../createStore';

const login = data =>
    dispatch({
        type: Constants.LOGIN,
        data,
    });
const logout = () =>
    dispatch({
        type: Constants.LOGOUT,
    });
const register = data =>
    dispatch({
        type: Constants.REGISTRATION,
        data,
    });

export default {
    login,
    logout,
    register
};
