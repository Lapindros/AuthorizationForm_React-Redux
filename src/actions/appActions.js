import Constants from '../constants/сonstants.js';
import { dispatch } from '../createStore';

const changePage = data =>
    dispatch({
        type: Constants.CHANGEPAGE,
        data,
    });

export default {
  changePage,
};
