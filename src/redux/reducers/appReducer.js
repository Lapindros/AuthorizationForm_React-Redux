import PageConstants from '../constants/pageConstants';
import Constants from '../constants/сonstants';

const initialState = {
    page: PageConstants.PageLogin,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.CHANGEPAGE: {
            return {
                page: action.data.page,
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
