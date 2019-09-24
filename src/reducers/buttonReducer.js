import RouterConstants from '../constants/routerConstants';

const initialState = {
    backLinks: {},
};

const routerReducer = (state = initialState, action) => {
    switch (action.type) {
        case RouterConstants.SAVE_BACK_LINK: {
            return {
                ...state,
                backLinks: {
                    ...state.backLinks,
                    [action.key]: action.location,
                },
            };
        }
        case RouterConstants.CLEAR_BACK_LINK: {
            return {
                ...state,
                backLinks: {
                    ...state.backLinks,
                    [action.key]: null,
                },
            };
        }
        default:
            return state;
    }
};

export default routerReducer;
