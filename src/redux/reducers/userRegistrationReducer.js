import Constants from '../constants/сonstants.js';

const initialState = [];

const userRegistrationReducer = (state = initialState, action) => {

    switch (action.type) {
        case Constants.REGISTRATION: {
            const users = state;
            users.push(action.data);
            return users
        }
        default:
            return state;
    }
};

export default userRegistrationReducer;
