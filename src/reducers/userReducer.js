import Constants from '../constants/сonstants.js';

const initialState = {
    auth: false,
    login: '',
    name: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.LOGIN: {
            return {
                ...action.data,
            };
        }
        case Constants.LOGOUT: {
            return {
                ...initialState,
            };
        }
        default:
            return state;
    }
};

export default userReducer;
