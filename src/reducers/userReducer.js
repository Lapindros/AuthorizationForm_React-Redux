import Constants from '../constants/сonstants.js';

const initialState = {
    auth: false,
    name: '',
    email: '',
    age: '',
    gender: '',
    education: '',
    password: ''
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case Constants.LOGIN: {

            return {
                ...action.data,
                auth: true,
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
