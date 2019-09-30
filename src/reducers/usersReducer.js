import Constants from '../constants/сonstants.js';

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.REGISTRATION: {
            const users = state.users;
            users.push(action.data);
            return {
                users
            };
        }
        default:
            return state;
    }
};

export default usersReducer;
