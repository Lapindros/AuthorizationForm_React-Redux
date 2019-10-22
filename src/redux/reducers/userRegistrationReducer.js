import Constants from '../constants/сonstants.js';

const initialState = [{
  name: 'Арсен',
  email: 'test@bssys.com',
  age: '34',
  gender: 'male',
  education: 'high',
  password: '123'
}];

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
