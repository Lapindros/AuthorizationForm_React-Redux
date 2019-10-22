import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import thunkMiddleware from 'redux-thunk';
import rootReducer from "./redux/reducers/rootReducer";
import History from './services/history';

const reduxRouterMiddleware = routerMiddleware(History);
const middleware = [thunkMiddleware, reduxRouterMiddleware];

const createStoreWithMiddlewares = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const configureStore = initialState => createStoreWithMiddlewares(rootReducer, initialState);

const saveState = (state) => {
    try {
        // Convert the state to a JSON string
        const serialisedState = JSON.stringify(state);

        // Save the serialised state to localStorage against the key 'app_state'
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        // Log errors here, or ignore
    }
};

const store = configureStore();

store.subscribe(() => {
    saveState(store.getState());
});


export default store;
export const dispatch = store.dispatch;
export const getState = store.getState;


