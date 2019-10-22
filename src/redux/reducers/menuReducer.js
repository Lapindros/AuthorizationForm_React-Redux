import MenuConstants from '../constants/menuConstants';

const initialState = {
  routes: [],
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case MenuConstants.INIT_ROUTES:
      return {
        ...state,
        routes: action.routes,
      };

    default:
      return state;
  }
}

export default menuReducer;
