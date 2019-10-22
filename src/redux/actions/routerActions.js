import { push } from 'react-router-redux';
import { dispatch } from '../../createStore';


const move = page => dispatch(push(page));

export default {
  move,
};
